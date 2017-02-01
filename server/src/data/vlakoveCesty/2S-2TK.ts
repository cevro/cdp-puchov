import obvodSK2_1 from '../obvody/SK2_1';
import obvodSK2_2 from '../obvody/SK2_2';
import obvodSK2_3 from '../obvody/SK2_3';
import obvodSK2_4 from '../obvody/SK2_4';
import signal2S from '../signals/2S';
import AB from '../signals/AB';

import VlakovaCesta from '../VlakovaCesta';

export default new VlakovaCesta({
    name: '2S-2TK',
    signalFrom: signal2S,
    signalTo: AB,
    toSide: false,
    obvody: [obvodSK2_1, obvodSK2_2, obvodSK2_3, obvodSK2_4],
});