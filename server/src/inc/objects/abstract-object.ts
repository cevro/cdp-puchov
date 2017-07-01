import wsServer from '../../webSocetServer';
import {EventEmitter} from 'events';

export abstract class AbstractObject extends EventEmitter {
    protected id: string;
    protected name: string;
    protected status: number;
    protected type: string;
    protected busy: boolean;

    public constructor({name}) {
        super();
        this.name = name;
        this.id = name;
        this.busy = false;
        this.status = undefined;
    }

    abstract registerListener(): void;

    abstract async init();

    public getName(): string {
        return this.name;
    }

    public getID(): string {
        return this.id;
    }

    addListener(event, listener) {
        console.log('Event `' + event + '` register by ' + this.name);
        return super.addListener(event, listener);
    }

    emit(event, ...arcs) {
        console.log('Event `' + event + '` emited by ' + this.name);
        return super.emit(event, ...arcs);
    }

    public lock() {
        this.busy = true;
        this.sendStatus();
    }

    public unlock() {
        this.busy = false;
        this.sendStatus();
    }

    public isLocked(): boolean {
        return this.busy;
    }

    public sendStatus(connection = null): any {
        const {name, type, status, busy} = this;
        const msg = JSON.stringify({name, type, status, busy});
        // this.emit('STATUS_SEND', msg);
        if (connection) {
            connection.send(msg);
        } else {
            wsServer.broadcast(msg);
        }
    }

    public getStatus(): number {
        return this.status;
    }

    public async setStatus(id: number) {
        this.status = id;
        this.sendStatus();
    }

    protected sendMessage(text, lvl = 1): void {
        // this.emit('MESSAGE_SEND', text);
        const msg = {type: 'message', text, lvl};
        wsServer.broadcast(JSON.stringify(msg));
    }
}