export interface Message<T = any, E = string, A = string> {
    readonly entity: E;
    readonly action: A;
    readonly id: number;
    readonly data: T;
}

export const MESSAGE_ACTION_STATE_UPDATE_GLOBAL = 'state-update';
