#include "./libs/Sectors/SectorRef.h"
#include "./libs/Signal/SignalRef.h"
#include "./libs/Signal/Signal.h"
#include "./libs/Signal/SignalStrategy.h"
#include "libs/AB/AutoBlockSector.h"
#include "libs/AB/OneSideAutoBlock.h"
#include "libs/AB/BiDirectionalAB.h"
#include "./libs/LocoNetObject.h"

using namespace Sectors;
using namespace Signals;
using namespace AutomaticBlock;


/* ***************** Define sectors *****************/
auto sector1 = SectorRef(101);
//auto sector2 = SectorRef(102);
auto sector3 = SectorRef(103);
//auto sector4 = SectorRef(104);
auto sector5 = SectorRef(105);
//auto sector6 = SectorRef(106);
auto sector7 = SectorRef(107);
//auto sector8 = SectorRef(108);
auto sector9 = SectorRef(109);
//auto sector10 = SectorRef(110);

auto sector11 = SectorRef(111);
//auto sector12 = SectorRef(112);
auto sector13 = SectorRef(113);
//auto sector14 = SectorRef(114);
auto sector15 = SectorRef(115);
//auto sector16 = SectorRef(116);
auto sector17 = SectorRef(117);
//auto sector18 = SectorRef(118);
auto sector19 = SectorRef(119);
//auto sector20 = SectorRef(120);

auto sector21 = SectorRef(121);
//auto sector22 = SectorRef(122);
auto sector23 = SectorRef(123);
//auto sector24 = SectorRef(124);
auto sector25 = SectorRef(125);
//auto sector26 = SectorRef(126);
auto sector27 = SectorRef(127);
//auto sector28 = SectorRef(128);

auto sector29 = SectorRef(129);
//auto sector30 = SectorRef(130);



/* ***************** Signals ***************/

//auto signal0 = Signal(13, 500); //2-116
auto signal1 = Signal(2, 501);  //1-116
//auto signal2 = Signal(13, 502);
auto signal3 = Signal(3, 503); // 1-102
//auto signal4 = Signal(13, 504);

auto signal5 = Signal(4, 505);
//auto signal6 = Signal(13, 506);
auto signal7 = Signal(5, 507);
//auto signal8 = Signal(13, 508);
auto signal9 = Signal(6, 509);

//auto signal10 = Signal(13, 510);
auto signal11 = Signal(7, 511);
//auto signal12 = Signal(13, 512);
auto signal13 = Signal(8, 513);
//auto signal14 = Signal(13, 514);

auto signal15 = Signal(9, 515);
//auto signal16 = Signal(13, 516);
auto signal17 = Signal(10, 517);
//auto signal18 = Signal(13, 518);
auto signal19 = Signal(13, 519);

//auto signal20 = Signal(13, 520);
auto signal21 = Signal(13, 521);
//auto signal22 = Signal(13, 522);
auto signal23 = Signal(13, 523);
//auto signal24 = Signal(13, 524);

auto signal25 = Signal(13, 525);
//auto signal26 = Signal(13, 526);
auto signal27 = Signal(13, 527);
//auto signal28 = Signal(13, 528);
auto signal29 = Signal(13, 529);

//auto signal30 = Signal(13, 530);
auto signal31 = Signal(13, 531);
//auto signal32 = Signal(13, 532);
auto signal33 = Signal(13, 533);
//auto signal34 = Signal(13, 534);

auto signal35 = Signal(13, 535);
//auto signal36 = Signal(13, 536);
auto signal37 = Signal(13, 537);

//auto signal40 = Signal(13, 540);
auto signal41 = Signal(13, 541);

//auto signal42 = Signal(13, 542);
auto signal43 = Signal(13, 543);

/* ***************** ABSectors ****************************/

//auto ABSector1S_0 = AutoBlockSector(717, 1, &signal41, &signal1, (ISector *[]) {129});

auto ABSector1S_0 = AutoBlockSector<1>(717, &signal41, &signal1, (ISector *[]) {&sector29});

//auto ABSector2S_0 = AutoBlockSector(716, 1, 540, 500, (ISector *[]) {130});

auto ABSector1S_1 = AutoBlockSector<1>(701, &signal1, &signal3, (ISector *[]) {&sector27});
//auto ABSector2S_1 = AutoBlockSector(700, 1, 500, 502, (ISector *[]) {128});

auto ABSector1S_2 = AutoBlockSector<1>(703, &signal3, &signal5, (ISector *[]) {&sector25});
//auto ABSector2S_2 = AutoBlockSector(702, 1, 502, 504, (ISector *[]) {126});

auto ABSector1S_3 = AutoBlockSector<2>(705, &signal5, &signal7, (ISector *[]) {&sector23, &sector21});
//auto ABSector2S_3 = AutoBlockSector(704, 2, 504, 506, (ISector *[]) {124, 122});

auto ABSector1S_4 = AutoBlockSector<2>(707, &signal7, &signal9, (ISector *[]) {&sector19, &sector17});
//auto ABSector2S_4 = AutoBlockSector(706, 2, 506, 508, (ISector *[]) {120, 118});

auto ABSector1S_5 = AutoBlockSector<2>(709, &signal9, &signal11, (ISector *[]) {&sector15, &sector13});
//auto ABSector2S_5 = AutoBlockSector(708, 2, 508, 510, (ISector *[]) {116, 114});

auto ABSector1S_6 = AutoBlockSector<2>(711, &signal11, &signal13, (ISector *[]) {&sector11, &sector9});
//auto ABSector2S_6 = AutoBlockSector(710, 2, 510, 512, (ISector *[]) {112, 110});

auto ABSector1S_7 = AutoBlockSector<2>(713, &signal13, &signal15, (ISector *[]) {&sector7, &sector5});
//auto ABSector2S_7 = AutoBlockSector(712, 2, 512, 514, (ISector *[]) {108, 106});

auto ABSector1S_8 = AutoBlockSector<2>(715, &signal15, &signal17, (ISector *[]) {&sector3, &sector1});
//auto ABSector2S_8 = AutoBlockSector(714, 2, 514, 516, (ISector *[]) {104, 102});


auto ABSector1L_0 = AutoBlockSector<1>(739, &signal43, &signal19, (ISector *[]) {&sector1});
//auto ABSector2L_0 = AutoBlockSector(738, 1, 542, 518, (ISector *[]) {102});

auto ABSector1L_1 = AutoBlockSector<2>(721, &signal19, &signal21, (ISector *[]) {&sector3, &sector5});
//auto ABSector2L_1 = AutoBlockSector(720, 2, 518, 520, (ISector *[]) {104, 106});

auto ABSector1L_2 = AutoBlockSector<2>(723, &signal21, &signal23, (ISector *[]) {&sector7, &sector9});
//auto ABSector2L_2 = AutoBlockSector(722, 2, 520, 522, (ISector *[]) {108, 110});

auto ABSector1L_3 = AutoBlockSector<2>(725, &signal23, &signal25, (ISector *[]) {&sector11, &sector13});
//auto ABSector2L_3 = AutoBlockSector(724, 2, 522, 524, (ISector *[]) {112, 114});

auto ABSector1L_4 = AutoBlockSector<2>(727, &signal25, &signal27, (ISector *[]) {&sector15, &sector17});
//auto ABSector2L_4 = AutoBlockSector(726, 2, 524, 526, (ISector *[]) {116, 118});

auto ABSector1L_5 = AutoBlockSector<1>(729, &signal27, &signal29, (ISector *[]) {&sector19});
//auto ABSector2L_5 = AutoBlockSector(728, 1, 526, 528, (ISector *[]) {118});

auto ABSector1L_6 = AutoBlockSector<1>(731, &signal29, &signal31, (ISector *[]) {&sector21});
//auto ABSector2L_6 = AutoBlockSector(730, 1, 528, 530, (ISector *[]) {122});

auto ABSector1L_7 = AutoBlockSector<2>(733, &signal31, &signal33, (ISector *[]) {&sector23, &sector25});
//auto ABSector2L_7 = AutoBlockSector(732, 1, 530, 532, (ISector *[]) {124, 126});


auto ABSector1L_8 = AutoBlockSector<1>(735, &signal33, &signal35, (ISector *[]) {&sector27});
//auto ABSector2L_8 = AutoBlockSector(734, 1, 532, 534, (ISector *[]) {128});


auto ABSector1L_9 = AutoBlockSector<1>(737, &signal35, &signal37, (ISector *[]) {&sector29});
//auto ABSector2L_9 = AutoBlockSector(736, 1, 534, 536, (ISector *[]) {130});


auto ab1S = OneSideAutoBlock<9>(401, (IAutoBlockSector *[]) {
        &ABSector1S_0,
        &ABSector1S_1,
        &ABSector1S_2,
        &ABSector1S_3,
        &ABSector1S_4,
        &ABSector1S_5,
        &ABSector1S_6,
        &ABSector1S_7,
        &ABSector1S_8
});
//auto ab2S = OneSideAutoBlock(402, 9, (ISector *[]) {716, 700, 702, 704, 706, 708, 710, 712, 714});

auto ab1L = OneSideAutoBlock<10>(403, (IAutoBlockSector *[]) {
        &ABSector1L_0,
        &ABSector1L_1,
        &ABSector1L_2,
        &ABSector1L_3,
        &ABSector1L_4,
        &ABSector1L_5,
        &ABSector1L_6,
        &ABSector1L_7,
        &ABSector1L_8,
        &ABSector1L_9
});
//auto ab2L = OneSideAutoBlock(404, 10, (ISector *[]) {738, 720, 722, 724, 726, 728, 730, 732, 734, 736});



auto ab1 = BiDirectionalAB(451, &ab1S, &ab1L);

//auto ab2 = BiDirectionalAB(450, 404, 402);



LocoNetObject *objects[] = {
        //signal0,
        &signal1,
        //signal2,
        &signal3,
        //signal4,
        &signal5,
        //signal6,
        &signal7,
        //signal8,
        &signal9,

        //signal10,
        &signal11,
        //signal12,
        &signal13,
        //signal14,
        &signal15,
        //signal16,
        &signal17,
        //signal18,
        &signal19,

        //signal20,
        &signal21,
        //signal22,
        &signal23,
        //signal24,
        &signal25,
        //signal26,
        &signal27,
        //signal28,
        &signal29,

        //signal30,
        &signal31,
        //signal32,
        &signal33,
        //signal34,
        &signal35,
        //signal36,
        &signal37,

        //signal40,
        &signal41,
        //signal42,
        &signal43,

        &sector1, //sector2,
        &sector3, //sector4,
        &sector5, //sector6,
        &sector7, //sector8,
        &sector9, //sector10,
        &sector11, //sector12,
        &sector13, //sector14,
        &sector15, //sector16,
        &sector17, //sector18,
        &sector19, //sector20,
        &sector21, //sector22,
        &sector23, //sector24,
        &sector25, //sector26,
        &sector27, //sector28,
        &sector29, //sector30


        &ABSector1S_0, //ABSector2S_0,
        &ABSector1S_1, //ABSector2S_1,
        &ABSector1S_2, //ABSector2S_2,
        &ABSector1S_3, //ABSector2S_3,
        &ABSector1S_4, //ABSector2S_4,
        &ABSector1S_5, //ABSector2S_5,
        &ABSector1S_6, //ABSector2S_6,
        &ABSector1S_7, //ABSector2S_7,
        &ABSector1S_8, //ABSector2S_8,

        &ABSector1L_0, //ABSector2L_0,
        &ABSector1L_1, //ABSector2L_1,
        &ABSector1L_2, //ABSector2L_2,
        &ABSector1L_3, //ABSector2L_3,
        &ABSector1L_4, //ABSector2L_4,
        &ABSector1L_5, //ABSector2L_5,
        &ABSector1L_6, //ABSector2L_6,
        &ABSector1L_7, //ABSector2L_7,
        &ABSector1L_8, //ABSector2L_8,
        &ABSector1L_9, //ABSector2L_9,


        &ab1S, /*ab2S,*/ &ab1L, /*ab2L*/

        &ab1
};


IOneSideAutoBlock *oneSideAutoBlocks[] = {&ab1S, /*ab2S,*/ &ab1L, /*ab2L*/};

BiDirectionalAB *biDirABs[] = {&ab1/*, ab2*/};


void sendState() {
    for (auto &object: objects) {
        object->dump();
    }
    return;
};

/**
 *
 * @param id
 * @param cmd
 * @param value
 */
void handleCmd(int id, char cmd, int value) {
    for (auto &object: objects) {
        if (object->getLocoNetId() == id) {
            object->handleCmd(cmd, value);
        }
    }
    return;
}

/**
 *
 */
void setup() {
    Serial.begin(115200);
    while (!Serial) { ;
    }

    for (auto &AB: biDirABs) {
        AB->init();
    }

    sendState();

}

char tmp[10];

void loop() {
    memset(tmp, 0, sizeof(tmp));
    if (Serial.available()) {
        Serial.readBytes(tmp, 10);
        if (String(tmp).length() > 0) {
            char *data = strtok(tmp, ":");
            char *results[3];
            memset(results, 0, sizeof(results));
            int i = 0;
            while (data != NULL) {
                results[i] = data;
                i++;
                data = strtok(NULL, ":");
            }
            int address = String(results[0]).toInt();
            int status = String(results[2]).toInt();
            char cmd = results[1][0];
            handleCmd(address, cmd, status);
        }
    }

    for (auto &object: objects) {
        object->clock();
    }

    delay(10);

}
