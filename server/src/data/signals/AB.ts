import {Signal, VCHODOVE} from '../Signal';
import arduino from '../../ardu';

export default new Signal({
    name: 'AB',
    arduino: arduino,
    port: 3,
    type: VCHODOVE,
});
