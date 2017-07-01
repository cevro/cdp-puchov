import obvodSK1_1 from '../obvody/SK1_1';
import obvodSK1_2 from '../obvody/SK1_2';
import obvodSK1_3 from '../obvody/SK1_3';
import obvodSK2_3 from '../obvody/SK2_3';
import obvodSK2_4 from '../obvody/SK2_4';
import signal2S from '../signals/2S';
import AB from '../signals/AB';

import TrainRoute from '../../inc/objects/tran-route/train-route';
import SectorsGroup from '../../inc/objects/sector/sector-group';

export default new TrainRoute({
    name: '2S-1TK',
    signalFrom: signal2S,
    signalTo: AB,
    speed: 40,
    sectorsGroup: new SectorsGroup([obvodSK1_1, obvodSK1_2, obvodSK1_3, obvodSK2_3, obvodSK2_4]),
});
