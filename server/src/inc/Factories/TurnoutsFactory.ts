import {
    turnouts,
} from '../../../../definitions/Points';
import Turnout from '../objects/Turnout/Turnout';

import {
    LocoNetMessage,
    LocoNetReceiver,
    MessageReciever,
} from './DateReceiver';
import {ENTITY_TURNOUT} from "../../../../definitions/consts";
import {TurnoutMessages} from "../../../../definitions/messages/turnout";

class PointsFactory implements LocoNetReceiver, MessageReciever {

    private readonly turnouts: Turnout[];

    constructor() {
        this.turnouts = turnouts.map((value => {
            return new Turnout(value);
        }));
    }

    public findById(id: number): Turnout {
        for (const index in this.turnouts) {
            if (this.turnouts.hasOwnProperty(index)) {
                if (this.turnouts[index].locoNetId === id) {
                    return this.turnouts[index];
                }
            }
        }
        throw new Error();
    }

    public dump(): TurnoutMessages.StateUpdateData[] {
        return this.turnouts.map((turnout) => {
            return turnout.dumpData();
        });
    }

    public handleLocoNetReceive(data: LocoNetMessage) {
    }

    public handleMessageReceive(message: TurnoutMessages.ClientToServerMessages): void {
        if (message.entity !== ENTITY_TURNOUT) {
            return;
        }

        switch (message.action) {
            case TurnoutMessages.MESSAGE_ACTION_SET_POSITION:
                return this.handleSetPosition(message);
        }
    }

    private handleSetPosition(message: TurnoutMessages.ChangePositionMessage) {
        const {data: {id, state}} = message;
        const point = this.findById(id);
        // point.changePosition(state); TODO
    }

}

export const turnoutsFactory = new PointsFactory();
