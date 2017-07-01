import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {logger} from 'redux-logger';
import {
    applyMiddleware,
    createStore,
} from 'redux';
import {app} from './reducers/index';

import Downloader from './components/helpers/downloader';
import MessageBox from './components/message-box/box';
import Scheme from './components/scheme/index';
import RouteBuilder from './components/route-builder';

class Main extends React.Component<{}, void> {

    render() {
        const store = createStore(app, applyMiddleware(logger));
        return (
            <Provider store={store}>
                <div className="container-fluid row">
                    <Downloader/>
                    <div className="col-8">
                        <Scheme/>
                        <RouteBuilder/>
                    </div>
                    <div className="col-4">
                        <MessageBox/>
                    </div>


                </div>

            </Provider>
        );
    }
}

ReactDOM.render(<Main/>, document.getElementsByTagName('main')[0]);
