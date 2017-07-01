import wsServer from './webSocetServer';
import {signals} from './data/signals/index';

class Main {
    public async run() {
        // stupid touch
        wsServer;

        for (let signal of signals) {
           // await signal.init();
        }
      //  VC4.emit('ROUTE_BUILD');
      //  VC3.emit('ROUTE_BUILD');

    }
}
setTimeout(() => (new Main()).run(), 2000);
