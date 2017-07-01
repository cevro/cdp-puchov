import obvodSK2_1 from '../obvody/SK2_1';
import obvodSK2_2 from '../obvody/SK2_2';
import obvodSK2_3 from '../obvody/SK2_3';
import obvodSK2_4 from '../obvody/SK2_4';
import signal2S from '../signals/2S';
import AB from '../signals/AB';

import TrainRoute from '../../inc/objects/tran-route/train-route';
import SectorsGroup from '../../inc/objects/sector/sector-group';

export default new TrainRoute({
    name: '2S-2TK',
    signalFrom: signal2S,
    signalTo: AB,
    speed: null,
    sectorsGroup: new SectorsGroup([obvodSK2_1, obvodSK2_2, obvodSK2_3, obvodSK2_4]),
});