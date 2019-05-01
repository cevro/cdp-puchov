import signal2S from '../signals/2S';
import AB from '../signals/PAB-2';
import trat2S_1 from '../obvody/trat/2S_1';
import trat2S_2 from '../obvody/trat/2S_2';

import TrainRoute from '../../inc/objects/tran-route/train-route';
import SectorsGroup from '../../inc/objects/sector/sector-group';

export default new TrainRoute({
    name: 'PAB_2-2S',
    signalFrom: AB,
    signalTo: signal2S,
    speed: null,
    sectorsGroup: new SectorsGroup([trat2S_2, trat2S_1]),
    SVGData:null,
    //persistent: true,
});