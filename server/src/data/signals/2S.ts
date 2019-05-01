import {
    Signal,
    VCHODOVE,
} from '../../inc/objects/signal/signal';
import arduino from '../../ardu';

export default new Signal({
    name: '2S',
    arduino: arduino,
    port: 12,
    type: VCHODOVE,
    SVGData: {rotate: 0, x: "100", y: "200"},
});
