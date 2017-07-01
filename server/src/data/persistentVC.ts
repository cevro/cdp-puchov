import VlakovaCesta from "../inc/objects/tran-route/train-route";

import {Signal} from "../inc/objects/signal/signal";
import Obvod from '../inc/objects/sector/sector';
import {AbstractObject} from "../inc/objects/abstract-object";
import {
    MSG_ERROR,
    MSG_INFO,
    MSG_SUCCESS,
    MSG_WARNING
} from '../consts/messages/levels';

import  {NAVEST_STOJ}    from '../consts/signal/signals';

import {signalStrategy} from '../inc/objects/signal/signal-strategy';

import {
    STATUS_FREE,
    STATUS_BUSY,
    STATUS_IN_VC
} from '../consts/obvod/status';

export const VlakovaCesta_TYPE = 'cesta';
export default class persistentVC extends VlakovaCesta {

    public takeDown(hard?: boolean):boolean {
        if (!this.active) {
            return;
        }
        if (this.isDownAble()) {
            this.active = false;
            this.sendMessage('Vlakova cesta zrušena: ' + this.getName(), MSG_WARNING);
            this.handleBuild();
        }
    }

    public deactivePersistent() {

    }
}