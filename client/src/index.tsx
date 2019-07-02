import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { logger } from 'redux-logger';
import {
    applyMiddleware,
    createStore,
} from 'redux';
import { app } from './reducers/';
import MessageBox from './components/MessageBox/MessageBox';
import Options from './components/Options/Options';
import Scheme from './components/Scheme/Index';
import RouteBuilderMessageBox from './components/MessageBox/RouteBuilderMessageBox';
import SectorsPreview from './components/MessageBox/SectorsPreview';
import PointsPreview from './components/MessageBox/PointsPreview';
import Card from './components/helpers/Card';
import Routes from './components/MessageBox/Routes';
import SignalsPreview from './components/MessageBox/SignalsPreview';
import ContextMenu from './components/Scheme/Parts/Signals/ContextMenu/ContextMenu';

class Main extends React.Component<{}, {}> {

    public render() {
        const store = createStore(app, applyMiddleware(logger));
        return (
            <Provider store={store}>
                <div className="container-fluid">
                    <div className="row col-12 top-panel">
                        <div className="col-3">
                            <Card name={'Messages'}>
                                <MessageBox/>
                            </Card>
                        </div>
                        <div className="col-3">
                            <Card name={'Routes'}>
                                <Routes/>
                            </Card>
                        </div>
                        <div className="col-3">
                            <Card name={'Built routes'}>
                                <RouteBuilderMessageBox/>
                            </Card>
                        </div>
                    </div>

                    <div className="col-12">
                        <Scheme/>
                    </div>
                    <div className="row col-12 bottom-panel">
                        <div className="col-3">
                            <Card name={'Signals'}>
                                <SignalsPreview/>
                            </Card>
                        </div>
                        <div className="col-3">
                            <Card name={'Sectors'}>
                                <SectorsPreview/>
                            </Card>
                        </div>
                        <div className="col-3">
                            <Card name={'Points'}>
                                <PointsPreview/>
                            </Card>
                        </div>
                        <div className="col-3">
                            <Card name={'Options'}>
                                <Options/>
                            </Card>
                        </div>
                    </div>
                </div>

                <ContextMenu/>
            </Provider>
        );
    }
}

ReactDOM.render(<Main/>, document.getElementsByTagName('main')[0]);
