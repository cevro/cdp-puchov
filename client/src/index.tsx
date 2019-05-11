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
import Scheme from './components/Scheme/Index';
import RouteBuilder from './components/route-builder';
import SignalContextMenu from './components/Scheme/Parts/Signals/ContextMenu/ContextMenu';
import Options from './components/Options/Options';

class Main extends React.Component<{}, {}> {

    public render() {
        const store = createStore(app, applyMiddleware(logger));
        return (
            <Provider store={store}>
                <div className="container-fluid">
                    <Downloader/>
                    <div className="row col-12 top-panel">
                        <div className="col-1">
                            <SignalContextMenu/>
                        </div>
                        <div className="col-2 offset-9">
                            <Options/>
                        </div>
                    </div>

                    <div className="col-12">
                        <Scheme/>
                    </div>

                    <div className="row col-12">
                        <div className="col-3">
                            <RouteBuilder/>
                        </div>
                        <div className="col-4">
                            <MessageBox/>
                        </div>
                    </div>


                </div>

            </Provider>
        );
    }
}

ReactDOM.render(<Main/>, document.getElementsByTagName('main')[0]);
