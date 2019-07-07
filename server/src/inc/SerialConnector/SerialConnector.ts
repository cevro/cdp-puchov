import * as SerialPort from 'serialport';
// import * as Readline from '@serialport/parser-readline';
import {
    LocoNetMessage,
    LocoNetReciever,
    MessageReciever,
} from '../Factories/DateReceiver';
import { Message } from '../../definitions/interfaces';


class SerialConnector implements MessageReciever {
    private listeners: LocoNetReciever[] = [];

    private connector: SerialPort;
    private params: SerialPort.OpenOptions;

    private port: string = '/dev/ttyUSB0';

    public tryConnect() {
        try {
            this.connector = new SerialPort(this.port, {
                baudRate: 115200,
                // defaults for Arduino serial communication
                dataBits: 8,
                parity: 'none',
                stopBits: 1,
            }, (err) => {
                // console.log(err);
            });
            this.dateReceive();
        }
        catch (e) {
            console.log(e);
        }
    }


    handleMessageReceive(message: Message<{ port: string, params: SerialPort.OpenOptions }>) {
        if (message.entity == 'loconet-connector') {
            switch (message.action) {
                case 'connect':
                    this.params = message.data.params;
                    this.port = message.data.port;
                    this.tryConnect();
                    break;
                case 'reconnect':
                    this.tryConnect();
            }

        }
    }

    public send(data: LocoNetMessage): void {
        const msg = data.locoNetId + ':' + data.type + ':' + data.value + '\r\n';
        // console.log('send:' + msg);
        this.connector.write(msg);
    }

    private dateReceive(): void {
        const parser = new SerialPort.parsers.Readline({
            delimiter: '\r\n',
            encoding: 'ascii',
        });
        this.connector.pipe(parser);

        parser.on('data', (data) => {
            const msg = this.parseMessage(data.toString());
            if (!msg) {
                return;
            }
            this.listeners.forEach((listener) => {
                listener.handleLocoNetReceive(msg)
            });
            // console.log('parsed received:' + data);
        });
    }

    public registerListener(listener: LocoNetReciever) {
        this.listeners.push(listener);
    }

    private parseMessage(msg: string): LocoNetMessage {
        if (!msg.match(/[0-9]+:[a-z]:-?[0-9]+/)) {
            console.log('errored received:' + msg);
            return null;
        }
        const parts = msg.split(':');
        return {
            locoNetId: +parts[0],
            type: parts[1],
            value: +parts[2],
        };
    }
}

export const locoNetConnector = new SerialConnector();

