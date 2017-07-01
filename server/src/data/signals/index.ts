import signal1L from './1L';
import signal2L from './2L';
import signal1S from './1S';
import signal2S from './2S';

import signalPAB_1 from './PAB-1';
import signalPAB_2 from './PAB-2';
import AB from './AB';
import {Signal} from '../../inc/objects/signal/signal';

export const signals: Array<Signal> = [signal2L, signal1L, signal2S, signal1S, signalPAB_1, signalPAB_2, AB];
