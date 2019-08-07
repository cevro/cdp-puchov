#ifndef KOLAJISKO_CONSTS_H
#define KOLAJISKO_CONSTS_H
namespace Signals{
    /**
     * @deprecated
     */
    typedef uint8_t SignalState_t;
    typedef uint8_t SignalAspect_t;
    SignalState_t SIGNAL_STATE_SIGNAL_STOJ = 0;
    SignalState_t SIGNAL_STATE_SIGNAL_VOLNO = 1;
    SignalState_t SIGNAL_STATE_SIGNAL_VYSTRAHA = 2;
    SignalState_t SIGNAL_STATE_SIGNAL_OFF = 13;

}
#endif //KOLAJISKO_CONSTS_H
