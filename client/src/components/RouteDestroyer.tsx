import * as React from 'react';
import { connect } from 'react-redux';
import { sendMessage } from '../middleware/webSocet';
import {
    Action,
    Dispatch,
} from 'redux';
import { Store } from '../reducers';

interface State {
    sendMessage?: Function;
    routes?: any;
}

class RouteDestroyer extends React.Component<State, {}> {

    public render() {
        const {sendMessage, routes} = this.props;
        return (<div>

            {Object.keys(routes).map((key) => routes[key]).filter((route) => {
                return route.active && !route.busy;
            }).map((route) => {
                const downClick = () => {
                    sendMessage({type: 'route', name: route.name, act: 'hard_down'});
                };
                return (<div className="mb-3"><span>{route.name}</span>
                    <button onClick={() => downClick()} className="btn btn-danger">zruš!</button>
                </div>);
            })}

        </div>);
    }
}

const mapDispatchToProps = (dispatch: Dispatch<Action<string>>): State => {
    return {
        sendMessage: (data) => sendMessage(dispatch, data),
    };
};

const mapStateToProps = (state: Store & any): State => {
    return {
        routes: state.routes,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(RouteDestroyer);
