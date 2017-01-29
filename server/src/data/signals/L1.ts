import {Signal, ODCHODOVE} from '../AbstractSignal';
import arduino from '../../ardu';

export default new Signal({
    name: 'L1',
    arduino: arduino,
    port: 11,
    type: ODCHODOVE,
});
