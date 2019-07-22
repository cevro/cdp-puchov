import { Message } from '../../definitions/interfaces';

export interface MessageReciever {
    //dataReceive(message: Message): void;

    handleMessageReceive(message: Message): void;
}

export interface LocoNetMessage {
    locoNetId: number,
    type: string,
    value: number
}

export interface LocoNetReceiver {
    handleLocoNetReceive(message: LocoNetMessage): void;
}

export interface DataDumper<T = any> {
    dumpData(): T;
}
