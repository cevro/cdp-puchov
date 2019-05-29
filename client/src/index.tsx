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
import MessageBox from './components/MessageBox/MessageBox';
import RouteBuilder from './components/route-builder';
import SignalContextMenu from './components/Scheme/Parts/Signals/ContextMenu/ContextMenu';
import Options from './components/Options/Options';
import Scheme from './components/Scheme/Index';
import RouteBuilderMessageBox from './components/MessageBox/RouteBuilderMessageBox';
import SectorsPreview from './components/MessageBox/SectorsPreview';

class Main extends React.Component<{}, {}> {

    public render() {
        const store = createStore(app, applyMiddleware(logger));
        return (
            <Provider store={store}>
                <div className="container-fluid">

                    <div className="row col-12 top-panel">
                        <div className="col-1">
                            <SignalContextMenu/>
                        </div>

                        <div className="offset-9 col-2">
                            <Options/>
                        </div>
                    </div>

                    <div className="col-12">
                        <Scheme/>
                    </div>

                    <div className="row col-12">
                        <div className="col-3">
                            <RouteBuilder/>
                            <Downloader/>
                        </div>
                        <div className="col-3">
                            <SectorsPreview/>
                        </div>
                        <div className="col-3">
                            <RouteBuilderMessageBox/>
                        </div>
                        <div className=" col-3">
                            <MessageBox/>
                        </div>
                    </div>


                </div>

            </Provider>
        );
    }
}

ReactDOM.render(<Main/>, document.getElementsByTagName('main')[0]);
