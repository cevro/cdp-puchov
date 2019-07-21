//#include "./libs/SectorRef.h"
//#include "./libs/SignalRef.h"
//#include "libs/Signal/Signal.h"
//#include "libs/Signal/SignalStrategy.h"
//#include "./libs/ABSector.h"
//#include "./libs/OneSideAutoBlock.h"
//
//
///***** Define sectors *****/
//auto sector1 = SectorRef(101);
//
//
///***** Define signals *****/
//
//
//auto signal1 = Signals::Signal(7, 501);
//auto signal2 = Signals::Signal(8, 503);
//
//
//auto ABSector1S_0 = ABSector(717, 1, signal1, signal2, (int[]) {101});
//
//
///**
// *
// */
//void setup() {
//    Serial.begin(115200);
//    while (!Serial) { ;
//    }
//}
//
//void loop() {
//    for (int i = 0; i < 16; ++i) {
//        signal1.setState(i);
//        signal2.setState(i + 1);
//
//        Serial.print("ref exist:");
//        Serial.println(ABSector1S_0.exitSignal.getState());
//        Serial.print("ref entry:");
//        Serial.println(ABSector1S_0.entrySignal.getState());
//        ABSector1S_0.getState();
//
//
//    }
//    signal1.clock();
//    signal2.clock();
//    delay(10);
//
//}
