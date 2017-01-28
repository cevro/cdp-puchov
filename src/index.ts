import signalL1 from './data/signals/L1';
import VC from './data/vlakoveCesty/1L-L1';

class Main {
    public run = () => {
        VC;
        setInterval(() => {
            let signal = Math.floor(Math.random() * 16);
            if (signal != 5 && signal != 13) {
                signalL1.setNavest(signal);
            }
        }, 10000);
    }
}
(new Main()).run();
