import {Message} from '@definitions/messages';

export interface MessageReceiver<M extends Message<any>> {
    handleMessageReceive(message: M): void;
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
