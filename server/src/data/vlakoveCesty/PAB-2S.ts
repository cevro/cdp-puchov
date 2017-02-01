import signal2S from '../signals/2S';
import AB from '../signals/PAB-2';
import trat2S_1 from '../obvody/trat/2S_1';
import trat2S_2 from '../obvody/trat/2S_2';

import VlakovaCesta from '../VlakovaCesta';

export default new VlakovaCesta({
    name: 'PAB_2-2S',
    signalFrom: AB,
    signalTo: signal2S,
    toSide: false,
    obvody: [trat2S_2, trat2S_1],
    persistent: true,
});