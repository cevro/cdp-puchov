import obvodSK2_1 from '../obvody/SK2_1';
import obvodSK1_2 from '../obvody/SK1_2';
import obvodSK2_2 from '../obvody/SK2_2';
import obvodSK1_3 from '../obvody/SK1_3';
import obvodSK1_4 from '../obvody/SK1_4';
import signal1S from '../signals/1S';
import AB from '../signals/AB';

import VlakovaCesta from '../VlakovaCesta';

export default new VlakovaCesta({
    name: '1S-2TK',
    signalFrom: signal1S,
    signalTo: AB,
    toSide: true,
    obvody: [obvodSK1_4, obvodSK1_3, obvodSK1_2, obvodSK2_2, obvodSK2_1],
});