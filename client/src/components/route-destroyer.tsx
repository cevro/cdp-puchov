import * as React from 'react';
import {connect} from 'react-redux';
import {sendMessage} from '../middleware/webSocet';
import {clearSelect} from '../actions/route-builder';
interface IProps {
    sendMessage: Function;
    routes: any;
}

class RouteDestroyer extends React.Component<IProps, void> {

    render() {
        const {sendMessage, routes} = this.props;
        return (<div>

            {Object.keys(routes).map((key) => routes[key]).filter((route) => {
                return route.active && !route.busy;
            }).map((route) => {
                const downClick = () => {
                    sendMessage({type: 'cesta', name: route.name, act: 'hard_down'});
                };
                return (<div className="mb-3"><span>{route.name}</span>
                    <button onClick={() => downClick()} className="btn btn-danger">zruš!</button>
                </div>);
            })}

        </div>);
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        ...ownProps,
        sendMessage: (data) => sendMessage(dispatch, data),
    };
};

const mapStateToProps = (state, ownProps) => {
    return {
        ...ownProps,
        routes: state.routes,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(RouteDestroyer);

/*
 };*/