import {
    Signal,
    ODDIELOVE,
} from '../../inc/objects/signal/signal';
import arduino from '../../ardu';

export default new Signal({
    name: 'PAB-2',
    arduino: arduino,
    port: 2,
    type: ODDIELOVE,
    SVGData: {rotate: 0, x: '-150', y: '200'},
});