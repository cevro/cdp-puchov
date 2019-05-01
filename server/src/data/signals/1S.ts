import {
    Signal,
    VCHODOVE,
} from '../../inc/objects/signal/signal';
import arduino from '../../ardu';

export default new Signal({
    name: '1S',
    arduino: arduino,
    port: 11,
    type: VCHODOVE,
    SVGData: {rotate: 0, x: "50", y: "250"},
});
