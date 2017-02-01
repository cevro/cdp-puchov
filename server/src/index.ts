import wsServer from './webSocetServer';
import VC3 from './data/vlakoveCesty/PAB-2S';
import VC4 from './data/vlakoveCesty/PAB-1S';

class Main {
    public run = () => {
        VC4.build();
        VC3.build();

        wsServer;
    }
}
setTimeout(() => (new Main()).run(), 20000);
