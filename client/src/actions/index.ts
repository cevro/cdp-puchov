export const ACTION_HANDLE_COMMAND_ARRIVE = 'ACTION_HANDLE_COMMAND_ARRIVE';

export const handleCommandArrive = (data) => {
    return {
        type: ACTION_HANDLE_COMMAND_ARRIVE,
        data,
    };
};
