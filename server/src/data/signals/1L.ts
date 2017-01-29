import {Signal, VCHODOVE} from '../AbstractSignal';
import arduino from '../../ardu';

export default new Signal({
    name: '1L',
    arduino: arduino,
    port: 12,
    type: VCHODOVE,
});
