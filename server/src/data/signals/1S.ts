import {Signal, VCHODOVE} from '../Signal';
import arduino from '../../ardu';

export default new Signal({
    name: '1S',
    arduino: arduino,
    port: 11,
    type: VCHODOVE,
});
