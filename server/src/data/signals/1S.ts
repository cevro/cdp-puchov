import {Signal, VCHODOVE} from '../../inc/objects/signal/signal';
import arduino from '../../ardu';

export default new Signal({
    name: '1S',
    arduino: arduino,
    port: 11,
    type: VCHODOVE,
});
