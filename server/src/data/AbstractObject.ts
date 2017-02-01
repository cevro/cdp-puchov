import wsServer from './../webSocetServer';
export abstract class AbstractObject {
    protected name: string;
    protected status: number;
    protected type: string;

    public constructor({name}) {
        this.name = name;
    }

    public getName() {
        return this.name;
    }

    public sendStatus(connection = null) {
        let {name, type, status} = this;
        let msg = {name, type, status};
        if (connection) {
            connection.send(JSON.stringify(msg));
        } else {
            wsServer.broadcast(JSON.stringify(msg));
        }
    }

    public getStatus() {
        return this.status;
    }

    protected sendMessage(text, lvl = 1) {
        let msg = {type: 'message', text, lvl};
        wsServer.broadcast(JSON.stringify(msg));
    }
}