import {
    Signal,
    ODDIELOVE,
} from '../../inc/objects/signal/signal';
import arduino from '../../ardu';

export default new Signal({
    name: 'PAB-1',
    arduino: arduino,
    port: 3,
    type: ODDIELOVE,
    SVGData: {rotate: 0, x: "-150", y: "250"},
});
