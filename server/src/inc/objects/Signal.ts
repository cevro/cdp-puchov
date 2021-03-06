import {SignalState} from '@definitions/interfaces';
import {LocoNetMessage} from '../Factories/DateReceiver';
import {locoNetConnector} from '../SerialConnector/SerialConnector';
import {ENTITY_SIGNAL} from '@definitions/entity';
import {Message} from '@definitions/messages';
import LocoNetObject from './LocoNetObject';
import {LocoNetDefinition} from '@definitions/interfaces';

export default class Signal extends LocoNetObject<Message<any>, SignalState> {

    private _displayAspect: number;
    private _requestedAspect: number;

    public constructor(definition: LocoNetDefinition) {
        super(definition.locoNetId);
        this._displayAspect = -1;
        this._requestedAspect = -1;
    }

    public getDisplayAspect() {
        return this._displayAspect;
    }

    public getRequestedAspect() {
        return this._requestedAspect;
    }

    /**
     * @deprecated
     * @param value
     */
    public changeState(value: number) {
        return this.requestChange(value);
    }

    public dumpData(): SignalState {
        return {
            displayAspect: this._displayAspect,
            requestedAspect: this._requestedAspect,
            locoNetId: this.locoNetId,
        };
    }

    public handleLocoNetReceive(data: LocoNetMessage): void {
        switch (data.type) {
            case 'a':
                console.log('a');
                return this.confirmChange(data.value);
            case 'r':
                return console.log('r');
        }
        return;
    }

    public requestChange(aspect: number): void {
        if (aspect === this._requestedAspect) {
            return;
        }
        this._requestedAspect = aspect;
        locoNetConnector.send({
            locoNetId: this.locoNetId,
            type: 'a',
            value: aspect,
        });
        this.sendState();
    }

    public handleMessageReceive(message: Message) {
        switch (message.action) {
            case 'set-state':
                this.requestChange(message.data.state);

        }
    }

    public getEntityName(): string {
        return ENTITY_SIGNAL;
    }

    private confirmChange(value: number) {
        if (value === this._displayAspect) {
            return;
        }
        this._displayAspect = value;
        this.sendState();
    }
}
