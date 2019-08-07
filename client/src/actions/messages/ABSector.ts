import {
    Action,
    Dispatch,
} from 'redux';
import {
    ActionMessageSend,
    onSendMessage,
} from '../webSocets';
import {
    RemoveErrorMessage,
    SetBlockConditionMessage,
} from '@definitions/messages/ABSector';
import {ENTITY_AB_SECTOR} from '@definitions/entity';

export const changeABCondition =
    (dispatch: Dispatch<Action<string>>, locoNetId: number, state: number):
        ActionMessageSend<SetBlockConditionMessage> => {
        return dispatch(onSendMessage({
            action: 'set-block-condition',
            entity: ENTITY_AB_SECTOR,
            date: new Date(),
            id: locoNetId,
            data: {locoNetId, state},
        }));
    };

export const removeABError =
    (dispatch: Dispatch<Action<string>>, locoNetId: number):
        ActionMessageSend<RemoveErrorMessage> => {
        return dispatch(onSendMessage({
            action: 'remove-error',
            entity: ENTITY_AB_SECTOR,
            date: new Date(),
            id: locoNetId,
            data: {locoNetId},
        }));
    };