import * as React from 'react';
import {connect} from 'react-redux';
import {sendMessage} from '../middleware/webSocet';
import {clearSelect} from '../actions/route-builder';
interface IProps {
    sendMessage: Function;
    onClearSelect: Function;
    signalFrom?: string;
    signalTo?: string;
    availableRoutes?: Array<any>;
}
import RouteDestroyer from './route-destroyer';

interface IState {
    availableRoutes: Array<any>;
}
class RouteBuilder extends React.Component<IProps, IState> {
    constructor() {
        super();
        this.state = {availableRoutes: []};
    }

    componentWillReceiveProps(nextProps) {

        const {signalFrom, signalTo, availableRoutes} = nextProps;
        if (signalTo && signalFrom) {
            const routes = availableRoutes.filter((route) => {
                return route.signalTo == signalTo && route.signalFrom == signalFrom;
            });
            this.setState({availableRoutes: routes});
        }
    }

    render() {

        const {sendMessage, onClearSelect} = this.props;
        const {availableRoutes} = this.state;
        const objects = availableRoutes.map((route) => {
            const {id} = route;
            const buildClick = () => {
                if (window.confirm('postaviť' + id)) {
                    this.setState({availableRoutes: []})
                    onClearSelect();
                    sendMessage({type: 'cesta', name: id, act: 'build'});
                }
            };

            return (
                <p key={id} className="row">
                    <button onClick={() => {
                        buildClick();
                    }} className="col-6 btn btn-success">{id} -Build!
                    </button>
                </p>
            );
        });

        return (<div>
            {objects}
            <p>
                <button onClick={() => onClearSelect()} className="btn btn-warning">Clear</button>
            </p>
            <RouteDestroyer/>
        </div>);
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        ...ownProps,
        sendMessage: (data) => sendMessage(dispatch, data),
        onClearSelect: () => dispatch(clearSelect()),
    };
};

const mapStateToProps = (state, ownProps) => {
    return {
        ...ownProps,
        signalFrom: state.routeBuilder.signalFrom,
        signalTo: state.routeBuilder.signalTo,
        availableRoutes: state.routeBuilder.availableRoutes,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(RouteBuilder);
