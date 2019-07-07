#include "navestidlo.h"
Navestidlo N[6];

//KolajObvod* O[2] = {new KolajObvod(), new KolajObvod()};


void setup() {

  Serial.begin(115200);
  while (!Serial) {
    ;
  }
 // O[0]->setPin(A0);
 // O[2]->setPin(A1);

  N[0].setPin(11);
  N[1].setPin(10);
  N[2].setPin(9);
  N[3].setPin(8);

}
char tmp[10];
//bool status = O[0]->getStatus();
void loop() {
  //N[0]->setNavest(1);
  if (Serial.available()) {

    memset(tmp, 0, sizeof(tmp));

    Serial.readBytesUntil(';',tmp, 10);
    Serial.println(tmp);
    char* data = strtok(tmp, ":")    ;
    char* results[3] ;
    memset(results, 0, sizeof(results));
    int i = 0;
    while ( data != NULL ) {
      results[i] = data;
      i++;
      //Serial.println( data );
      data = strtok(NULL, ":");
    }
    int addr = String(results[1]).toInt();
   // switch (results[0][0]) {
   //   case 's':
        /*if (results[2][0] == '?') {
          Serial.print("s:");
          Serial.print(addr);
          Serial.print(":");
          Serial.println(N[addr]->getNavest());
        } else {*/
          int status = String(results[2]).toInt();
          N[addr].setNavest(status);
          Serial.println(N[addr].getNavest());
       // }
  //      break;
    /*  case'o':
        if (results[2][0] == '?') {
          Serial.print("o:");
          Serial.print(addr);
          Serial.print(":");
          Serial.println(O[addr]->getStatus());
        }*/

  //  }




    /* for (int i = 0; i < input.length(); i++) {
       if (input.substring(i, i + 1) == ":") {
         int slaveId = input.substring(0, i).toInt();
         auto com =  input.substring(i + 1);

         if (com == "?") {
           uint8_t status = N[slaveId]->getNavest();
           Serial.print(slaveId);
           Serial.print(":");
           Serial.println(status);
         } else {
           uint8_t status = input.substring(i + 1).toInt();
           N[slaveId]->setNavest(status);
           Serial.println(status);
           Serial.println(slaveId);
         }
         break;
       }
      }*/
  }
/*
  if (status != O[0]->getStatus()) {
    //Serial.println("change status");
    status = O[0]->getStatus();
    if (O[0]->getStatus()) {
      N[0]->setNavest(1);
    } else {
      N[0]->setNavest(0);

    }
  }
*/
  for (int i = 0; i < 6; i++) {
    N[i].clock();
    Serial.print(i);
    Serial.print(":");
   Serial.println(N[i].getNavest());
  }
 // O[0]->clock();

  delay(10);

}



