import {Signal, VCHODOVE} from '../../inc/objects/signal/signal';
import arduino from '../../ardu';

export default new Signal({
    name: 'AB',
    arduino: arduino,
    port: 3,
    type: VCHODOVE,
});
