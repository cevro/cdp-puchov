import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { logger } from 'redux-logger';
import {
    applyMiddleware,
    createStore,
} from 'redux';
import { app } from './reducers/';

import Downloader from './components/helpers/Downloader';
import MessageBox from './components/message-box/box';
import Scheme from './components/scheme/index';
import RouteBuilder from './components/route-builder';
import SignalContextMenu from './components/scheme/parts/signals/ContextMenu/ContextMenu';

class Main extends React.Component<{}, void> {

    render() {
        const store = createStore(app, applyMiddleware(logger));
        return (
            <Provider store={store}>
                <div className="container-fluid row">
                    <Downloader/>
                    <div className="col-12">
                        <Scheme/>
                    </div>
                    <div className="col-3">
                        <RouteBuilder/>
                    </div>
                    <div className="col-4">
                        <MessageBox/>
                    </div>
                    <div className="col-4">
                        <SignalContextMenu/>
                    </div>


                </div>

            </Provider>
        );
    }
}

ReactDOM.render(<Main/>, document.getElementsByTagName('main')[0]);
