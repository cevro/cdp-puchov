import {AbstractObject} from "../abstract-object";

import {
    MSG_INFO,
    MSG_SUCCESS,
} from '../../../consts/messages/levels';

import {
    Arduino,
    getSerialMessage,
} from '../../../ardu';
import {NAVEST_STOJ} from '../../../consts/signal/signals';

export const SIGNAL_TYPE = 'signal';

export class Signal extends AbstractObject {
    protected signalType: string;
    protected arduino: Arduino;
    protected port: number;

    public constructor({name, type, arduino, port}) {
        super({name});

        this.signalType = type;
        this.arduino = arduino;
        this.port = port;
        this.type = SIGNAL_TYPE;
        this.status = NAVEST_STOJ;
    }

    registerListener() {
    }

    public async init() {
        await this.setStatus(NAVEST_STOJ);
    }


    private beforeHandleChange(id) {
        this.lock();
        this.sendMessage('Signal: ' + this.name + ' sa prestavuje do polohy: ' + id, MSG_INFO);
    }

    private afterHandleChange(id) {
        this.unlock();
        super.setStatus(id);
        this.sendStatus();
        this.emit('SIGNAL_CHANGED');
        this.sendMessage('návestidlo: ' + this.name + ' bolo prestavené do polohy: ' + id, MSG_SUCCESS);
    }

    public async setStatus(id: number): Promise<any> {
        if (this.status === id) {
            this.emit('SIGNAL_CHANGED');
            return;
        }
        if (this.isLocked()) {
            return;
        }

        this.beforeHandleChange(id);

        return new Promise((reslove, reject) => {
            const o = {object: this.port, signal: id};
            const callback = (data: string) => {
                // console.log(data);
                if (data.trim() == getSerialMessage(o)) {
                    this.afterHandleChange(id);
                    reslove();
                } else {
                    this.arduino.write(o, callback);
                }
            };
            this.arduino.write(o, callback);
        });
    }
}

export const VCHODOVE = 'VCHODOVE';
export const ODCHODOVE = 'ODCHODOVE';
export const CESTOVE = 'CESTOVE';
export const ODDIELOVE = 'ODDIELOVE';
