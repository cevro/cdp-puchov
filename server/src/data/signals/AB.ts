import {Signal, VCHODOVE} from '../../inc/objects/signal/signal';
import arduino from '../../ardu';

export default new Signal({
    name: 'AB',
    arduino: arduino,
    port: 4,
    type: VCHODOVE,
    SVGData:{rotate: 0, x: "600", y: "225"},
});
