import VlakovaCesta from "./VlakovaCesta";

import {Signal} from "./Signal";
import Obvod from './Obvod';
import {AbstractObject} from "./AbstractObject";
import {
    MSG_ERROR,
    MSG_INFO,
    MSG_SUCCESS,
    MSG_WARNING
} from '../consts/messages/levels';

import  {NAVEST_STOJ}    from '../consts/signal/signals';

import {signalStrategy} from './navestStategy';

import {STATUS_FREE, STATUS_BUSY, STATUS_IN_VC} from '../consts/obvod/status';

export const VlakovaCesta_TYPE = 'cesta';
export default class persistentVC extends VlakovaCesta{

    public takeDown() {
        if (!this.active) {
            return;
        }
        if (this.isDownAble()) {
            this.active = false;
            this.sendMessage('Vlakova cesta zrušena: ' + this.getName(), MSG_WARNING);
                this.build();
        }
    }

    public deactivePersistent() {

    }
}