import signalL1 from './data/signals/L1';
import signalAB2 from './data/signals/AB2';
import VC from './data/vlakoveCesty/1L-L1';
import ABtest from './data/vlakoveCesty/testAB';
import wsServer from './webSocetServer';

class Main {
    public run = () => {
        VC;
        ABtest;
        wsServer;
        setInterval(() => {
            let signal = Math.floor(Math.random() * 16);
            if (signal != 5 && signal != 13) {
                signalL1.setNavest(signal);
                signalAB2.setNavest(signal);
            }
        }, 10000);
    }
}
(new Main()).run();
