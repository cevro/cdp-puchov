import signal1S from '../signals/1S';
import AB from '../signals/PAB-1';
import trat1S_1 from '../obvody/trat/1S_1';
import trat1S_2 from '../obvody/trat/1S_2';

import VlakovaCesta from '../VlakovaCesta';

export default new VlakovaCesta({
    name: 'PAB_1-1S',
    signalFrom: AB,
    signalTo: signal1S,
    toSide: false,
    obvody: [trat1S_1, trat1S_2],
    persistent: true,
});