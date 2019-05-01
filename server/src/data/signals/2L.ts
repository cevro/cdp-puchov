import {Signal, VCHODOVE} from '../../inc/objects/signal/signal';
import arduino from '../../ardu';

export default new Signal({
    name: '2L',
    arduino: arduino,
    port: 9,
    type: VCHODOVE,
    SVGData:{rotate: 180, x: "500", y: "200"},
});
