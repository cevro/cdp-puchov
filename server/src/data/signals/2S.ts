import {Signal, VCHODOVE} from '../Signal';
import arduino from '../../ardu';

export default new Signal({
    name: '2S',
    arduino: arduino,
    port: 12,
    type: VCHODOVE,
});
