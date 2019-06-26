import { Message } from '../../../../definitions/interfaces';

export interface DataRecierver {
    dataReceive(message: Message): void;
}
