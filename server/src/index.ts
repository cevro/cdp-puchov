import serialConnector from './inc/SerialConnector/SerialConnector';

class Main {
    public async run() {

        // stupid touch
        //wsServer;
        let index = 0;
        setInterval(() => {
            serialConnector.write('s:2:' + index);
            index++;
            if (index > 16) {
                index = 0;
            }
        }, 4000);

    }
}

setTimeout(() => (new Main()).run(), 2000);
