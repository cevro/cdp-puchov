import {Signal, ODDIELOVE} from '../Signal';
import arduino from '../../ardu';

export default new Signal({
    name: '118-1',
    arduino: arduino,
    port: 2,
    type: ODDIELOVE,
});
