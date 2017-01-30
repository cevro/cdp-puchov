import VlakovaCesta from '../VlakovaCesta';
import signalAB2 from '../signals/AB2';
import signal1L from '../signals/1L';
import priblizovak from '../obvody/priblizovak';

export default new VlakovaCesta({
    signalFrom: signalAB2,
    signalTo: signal1L,
    toSide: false,
    obvody: [priblizovak],
});