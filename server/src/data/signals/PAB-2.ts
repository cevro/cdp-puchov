import {Signal, VCHODOVE} from '../../inc/objects/signal/signal';
import arduino from '../../ardu';

export default new Signal({
    name: 'PAB-2',
    arduino: arduino,
    port: 2,
    type: VCHODOVE,
});