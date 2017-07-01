import {combineReducers} from 'redux';
import {messages} from './messages';
import {signals} from './signals';
import {routes} from './routes';
import {sectors} from './sectors';
import {routeBuilder} from './route-builder';

export const app = combineReducers({
    messages,
    signals,
    routes,
    sectors,
    routeBuilder,
});
