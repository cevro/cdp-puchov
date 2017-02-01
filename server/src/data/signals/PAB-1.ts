import {Signal, VCHODOVE} from '../Signal';
import arduino from '../../ardu';

export default new Signal({
    name: 'PAB-1',
    arduino: arduino,
    port: 3,
    type: VCHODOVE,
});
