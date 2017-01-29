import wsServer from './webSocetServer';
import VC from './data/vlakoveCesty/1L-L1';
import ABtest from './data/vlakoveCesty/testAB';
import poslednyAB from './data/vlakoveCesty/poslednyAB';

class Main {
    public run = () => {
        VC;
        ABtest;
        wsServer;
        poslednyAB;
        setInterval(() => {
            let signal = Math.floor(Math.random() * 16);
            if (signal != 5 && signal != 13) {

            }
        }, 20000);
    }
}
(new Main()).run();
