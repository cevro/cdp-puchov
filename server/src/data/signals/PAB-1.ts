import {Signal, VCHODOVE} from '../../inc/objects/signal/signal';
import arduino from '../../ardu';

export default new Signal({
    name: 'PAB-1',
    arduino: arduino,
    port: 3,
    type: VCHODOVE,
});
