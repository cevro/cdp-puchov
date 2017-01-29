import VlakovaCesta from '../VlakovaCesta';
import signalAB1 from '../signals/AB1';
import signalAB2 from '../signals/AB2';

export default new VlakovaCesta({
    signalFrom: signalAB1,
    signalTo: signalAB2,
    toSide: false,
});
