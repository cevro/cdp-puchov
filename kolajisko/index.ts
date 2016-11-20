/**
 * Created by miso on 20.11.2016.
 */
import {SerialPort} from  'serialport';
import Ardu from './ardu';

class mainsScript {

    public run =  ()=> {
        global.ardu= new Ardu('/dev/ttyACM0');
        console.log(SerialPort);
        console.log('ahoj');
       // let Ardu =  new SerialPort();
        setTimeout(()=>{
            console.debug(global.ardu);


            global.ardu.write(1,'6');
        },2000);

        setTimeout(()=>{
            console.debug(global.ardu);

     //       global.ardu.write(1,'0',true);

        },2200);


    }



}

let ms = new mainsScript();
ms.run();

