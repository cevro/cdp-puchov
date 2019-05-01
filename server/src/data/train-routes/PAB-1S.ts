import signal1S from '../signals/1S';
import AB from '../signals/PAB-1';
import trat1S_1 from '../obvody/trat/1S_1';
import trat1S_2 from '../obvody/trat/1S_2';

import TrainRoute from '../../inc/objects/tran-route/train-route';
import SectorsGroup from '../../inc/objects/sector/sector-group';

export default new TrainRoute({
    name: 'PAB_1-1S',
    signalFrom: AB,
    signalTo: signal1S,
    speed: null,
    sectorsGroup: new SectorsGroup([trat1S_1, trat1S_2]),
    SVGData: null,
    // persistent: true,
});
