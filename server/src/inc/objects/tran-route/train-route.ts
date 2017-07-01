import {Signal} from '../signal/signal';
import {AbstractObject} from "../abstract-object";
import {
    MSG_ERROR,
    MSG_INFO,
    MSG_SUCCESS,
    MSG_WARNING,
} from '../../../consts/messages/levels';
import  {NAVEST_STOJ}    from '../../../consts/signal/signals';
import {signalStrategy} from '../signal/signal-strategy';

import {ROUTE_BUILD} from '../../../consts/events/index';
import SectorsGroup from '../sector/sector-group';

export const TRAIN_ROUTE_TYPE = 'cesta';

export default class TrainRoute extends AbstractObject {
    protected signalFrom: Signal;
    protected signalTo: Signal;
    protected sectorsGroup: SectorsGroup;

    protected active: boolean;
    protected speed: number;
    protected persistent: boolean;

    constructor({name, signalFrom, signalTo, speed, sectorsGroup, persistent = false}) {
        super({name});
        this.signalFrom = signalFrom;
        this.signalTo = signalTo;
        this.sectorsGroup = sectorsGroup;

        this.speed = speed;
        this.active = false;
        /**
         * 0 obsadeny
         * 1 free
         * @type {number}
         */
        this.status = 0; // 0 entry signal to STOJ
        this.type = TRAIN_ROUTE_TYPE;
        this.persistent = persistent;
        this.registerListener();
    }

    init() {
    }

    public isActive(): boolean {
        return this.active;
    }

    public getSignalFrom(): Signal {
        return this.signalFrom;
    }

    public getSignalTo(): Signal {
        return this.signalTo;
    }

    registerListener() {
        this.signalTo.addListener('SIGNAL_CHANGED', () => {
            return this.handleSignalToChanged();
        });
        this.addListener(ROUTE_BUILD, () => {
            return this.handleBuild();
        });
        this.addListener('ROUTE_HARD_DOWN', () => {
            return this.handleHardThrowDown();
        });
        this.sectorsGroup.addListeners(() => {
            this.handleSectorChanged();
        });
    }

    private async handleSignalToChanged() {
        return this.changeSignal();
    }

    private async handleBuild() {
        if (!this.isBuildAble()) {
            this.sendMessage('Nedá sa postaviť vlaková cesta: ' + this.getName(), MSG_ERROR);
            return;
        }

        this.lock();
        this.sendMessage('Stavá sa vlaková cesta: ' + this.getName(), MSG_INFO);
        this.sendStatus();

        this.active = true;
        this.sectorsGroup.allocate();

        this.updateStatus();

        this.unlock();
        await this.changeSignal();
        this.sendMessage('Postavila sa vlaková cesta: ' + this.getName(), MSG_SUCCESS);
        this.sendStatus();
        return true;
    }

    private async handleHardThrowDown() {
        if (!this.active) {
            return;
        }
        if (this.persistent) {
            this.sendMessage('Persistentá cesta nejde natvrdo zrušiť!', MSG_ERROR);
            return;
        }
        this.sendMessage('Ruší sa vlaková cesta' + this.getName());
        this.lock();
        this.status = 0;
        this.sendStatus();

        this.sectorsGroup.lock();
        await this.changeSignal();
        await new Promise((resolve) => {

            setTimeout(() => {
                this.sectorsGroup.unlock();
                this.sectorsGroup.deallocate();
                this.unlock();
                this.handleThrowDown(true);
                this.sendStatus();
                resolve();
            }, 30000);
        });
    }

    private async handleThrowDown(hard: boolean = false) {
        if (!this.isActive()) {
            return false;
        }
        if (this.isDownAble()) {
            this.active = false;
            this.sendMessage('Vlakova cesta zrušena: ' + this.getName(), MSG_WARNING);
            return true;
        }
        return false;
    }

    private async handleSectorChanged() {
        if (!this.isActive()) {
            return;
        }
        this.updateStatus();
        await this.changeSignal();
        await this.handleCancel();
    }

    private async handleCancel() {
        if (!this.isActive()) {
            return;
        }
        if (!this.canCancel()) {
            return;
        }
        this.active = false;
        this.sendMessage('Vlakova cesta zrušena: ' + this.getName(), MSG_WARNING);
    }

    private canCancel() {
        return this.isDownAble();
    }


    private updateStatus(): void {
        this.status = this.sectorsGroup.isReserved() ? 1 : 0;
    }

    /**
     * Vyhodnotí obvody a či už daná VC nieje postavená
     * @returns {boolean}
     */
    private isBuildAble(): boolean {
        return (this.sectorsGroup.isFree() && !this.isActive());
    }

    /**
     * Uplna bloková podmienka
     * @returns {boolean}
     */
    protected isDownAble(): boolean {
        return (this.sectorsGroup.isFree() && this.signalTo.getStatus() == NAVEST_STOJ);
    }


    private async changeSignal() {
        const signal = signalStrategy(this.signalFrom, this.signalTo, this.status, this.speed);
        await this.signalFrom.setStatus(signal);
    };
}

/*  public deActivePersistent(): void {
 if (!this.persistent) {
 return;
 }
 this.persistent = false;
 this.hardDown();
 }*/

