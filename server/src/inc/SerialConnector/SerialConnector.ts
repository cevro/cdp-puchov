import * as SerialPort from 'serialport';
import {
    LocoNetMessage,
    LocoNetReceiver,
    MessageReceiver,
} from '../Factories/DateReceiver';
import {PortInfo} from 'serialport';
import {logger} from '@app/webSocetServer';
import {Message} from '@definitions/messages';

class SerialConnector implements MessageReceiver<Message<any>> {
    private listeners: LocoNetReceiver[] = [];

    private connector: SerialPort;
    private params: SerialPort.OpenOptions;
    private ports: PortInfo[] = [];

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
        } catch (e) {
            console.log(e);
        }
    }

    public registerListener(listener: LocoNetReceiver) {
        this.listeners.push(listener);
    }

    public handleMessageReceive(message: Message<{ port: string, params: SerialPort.OpenOptions }>) {
        if (message.entity === 'locoNet-connector') {
            switch (message.action) {
                case 'connect':
                    // this.params = message.data.params;
                    this.port = message.data.port;
                    if (this.port === message.data.port) {
                        return;
                    }
                    this.port = message.data.port;
                    if (this.connector) {
                        this.connector.close();
                    }
                    this.tryConnect();
                    return;
                case 'reconnect':
                    this.tryConnect();
                    return;
                case 'get-port-list':
                    this.handleGetPortList();
                    return;

            }

        }
    }

    public handleGetPortList() {
        SerialPort.list().then((list: PortInfo[]) => {
            this.ports = list;
            logger.log({
                entity: 'locoNet-connector',
                id: 0,
                action: 'port-list',
                data: {
                    ports: this.ports,
                },
                date: new Date(),
            });
        });

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

