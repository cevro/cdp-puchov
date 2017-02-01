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
import wsServer from "../webSocetServer";

export const VlakovaCesta_TYPE = 'cesta';

export default class VlakovaCesta extends AbstractObject {
    protected signalFrom: Signal;
    protected signalTo: Signal;
    protected active: boolean;
    protected toSide: boolean;
    protected obvody: Array<Obvod>;
    protected persistent: boolean;
    protected isBlocked: boolean = false;

    constructor({name, signalFrom, signalTo, toSide, obvody, persistent = false}) {
        super({name});
        this.signalFrom = signalFrom;
        this.signalTo = signalTo;
        this.signalTo.setVCTo(this);
        this.signalFrom.setVCFrom(this);
        this.toSide = toSide;
        this.obvody = obvody;
        this.obvody.forEach((obvod) => {
            obvod.addVC(this);
        });
        this.active = false;
        this.status = 0; // 0 entry signal to STOJ
        this.type = VlakovaCesta_TYPE;
        this.persistent = persistent;
    }

    public deactivePersistent() {
        if (!this.persistent) {
            return;
        }
        this.persistent = false;
        this.hardDown();
    }

    public hardDown() {
        if (!this.active) {
            return;
        }
        if (this.persistent) {
            this.sendMessage('Persstentá cesta nejde natvrd zrušiť!', MSG_ERROR);
            return;
        }
        this.sendMessage('Ruší sa vlaková cesta' + this.getName());
        this.isBlocked = true;
        this.status = 0;
        this.refreshSignals();
        setTimeout(() => {
            this.obvody.forEach((obvod) => {
                obvod.changeStatus(STATUS_FREE);
            });
            this.isBlocked = false;
            this.takeDown(true);
        }, 30000);
    }

    protected canChange() {
        if (this.active) {
            if (!this.isBlocked)
                return true;
        }
        return false;
    }

    public change() {
        if (!this.canChange()) {
            return;
        }

        let status = 1;
        this.obvody.forEach((obvod) => {
            if (obvod.getStatus() != STATUS_IN_VC) {
                status = 0;
            }
        });
        this.status = status;

        this.refreshSignals();
        this.takeDown();
    };

    private isFree() {
        let isFree = true;
        this.obvody.forEach((obvod) => {
            if (obvod.getStatus() != STATUS_FREE) {
                isFree = false;
            }
        });
        return isFree;
    }

    private isBuildAble() {
        return (this.isFree() && !this.active);
    }

    public build() {
        this.sendMessage('Stavá sa vlaková cesta: ' + this.getName(), MSG_INFO);
        let canBuild = this.isBuildAble();
        if (!canBuild) {
            this.change();
            this.sendMessage('Nedá sa postaviť vlaková cesta: ' + this.getName(), MSG_ERROR);
            return;
        }
        this.obvody.forEach((obvod) => {
            obvod.changeStatus(STATUS_IN_VC);
        });
        this.active = true;
        this.sendMessage('Postavila sa vlaková cesta: ' + this.getName(), MSG_SUCCESS);
        this.change();
    }

    /**
     * Uplna bloková podmienka
     * @returns {boolean}
     */
    private isDownAble() {
        return (this.isFree() && this.signalTo.getStatus() == NAVEST_STOJ);
    }


    public takeDown(hard: boolean = false) {
        if (!this.active) {
            return;
        }
        if (this.isDownAble() || hard) {
            this.active = false;
            this.sendMessage('Vlakova cesta zrušena: ' + this.getName(), MSG_WARNING);
            if (this.persistent) {
                this.build();
            }
        }
    }

    private refreshSignals() {
        let signal = signalStrategy(this.signalFrom, this.signalTo, this.status, this.toSide);
        this.signalFrom.setNavest(signal);
    };
}

