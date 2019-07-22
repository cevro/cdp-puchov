import {
    LocoNetMessage,
    LocoNetReceiver,
    MessageReciever,
} from './DateReceiver';
import { Message } from '../../definitions/interfaces';
import BanalizedAutoBlock, { BANALIZERD_AB_ENTITY_NAME } from '../objects/AB/BiDirAB';

class BiDirABsFactory implements MessageReciever, LocoNetReceiver {
    private readonly ABs: BanalizedAutoBlock[];

    constructor() {
        this.ABs = [{locoNetId: 450}, {locoNetId: 451}].map((value) => {
            return new BanalizedAutoBlock(value);
        });
    }

    public dump(): any[] {
        return this.ABs.map((AB) => {
            return AB.dumpData();
        });
    }

    public handleLocoNetReceive(data: LocoNetMessage) {
        this.ABs.forEach((AB) => {
            if (AB.getLocoNetId() == data.locoNetId) {
                AB.handleLocoNetReceive(data);
            }
        });
    }

    public handleMessageReceive(message: Message) {
        if (message.entity !== BANALIZERD_AB_ENTITY_NAME) {
            return;
        }
        this.ABs.forEach((AB) => {
            if (AB.getLocoNetId() == message.id) {
                AB.handleMessageReceive(message);
            }
        });
    }
}

export const banalizedAutoBlockFactory = new BiDirABsFactory();
