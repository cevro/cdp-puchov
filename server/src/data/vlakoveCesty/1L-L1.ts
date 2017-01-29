import VlakovaCesta from '../VlakovaCesta';
import signal1L from '../signals/1L';
import signalL1 from '../signals/L1';

export default new VlakovaCesta({
    signalFrom: signal1L,
    signalTo: signalL1,
    toSide: true,
});