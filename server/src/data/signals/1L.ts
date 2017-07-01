import {Signal, VCHODOVE} from '../../inc/objects/signal/signal';
import arduino from '../../ardu';

export default new Signal({
    name: '1L',
    arduino: arduino,
    port: 12,
    type: VCHODOVE,
});
