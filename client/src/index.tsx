import * as React from 'react';
import {Provider} from 'react-redux';
import {logger} from 'redux-logger';
import {
    applyMiddleware,
    createStore,
} from 'redux';
import {app} from './reducers/';
import Router from './router';
import * as ReactDOM from 'react-dom';
import Downloader from '@app/components/helpers/Downloader';
import Menu from '@app/menu';

class Main extends React.Component<{}, {}> {

    public render() {
        const store = createStore(app, applyMiddleware(logger));
        return (
            <Provider store={store}>
                <>
                    <Menu/>
                    <Router/>
                    <Downloader/>
                </>
            </Provider>
        );
    }
}

ReactDOM.render(<Main/>, document.getElementsByTagName('main')[0]);
