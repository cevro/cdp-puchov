import * as React from 'react';
import { connect } from 'react-redux';
import { sendMessage } from '../middleware/webSocet';
import { clearSelect } from '../actions/routeBuilder';
import {
    Action,
    Dispatch,
} from 'redux';

interface State {
    sendMessage?: (data: any) => void;
    onClearSelect?: () => void;
    signalFrom?: string;
    signalTo?: string;
    availableRoutes?: any[];
}

class RouteBuilder extends React.Component<State, {}> {

    public render() {

        const {sendMessage, onClearSelect} = this.props;
        /* const objects = availableRoutes.map((route) => {
             const {id} = route;
             const buildClick = () => {
                 if (window.confirm('postaviť' + id)) {
                     this.setState({availableRoutes: []});
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
         });*/

        return (<div>
            <p>
                <button onClick={() => onClearSelect()} className="btn btn-warning">Clear</button>
            </p>
        </div>);
    }
}

const mapDispatchToProps = (dispatch: Dispatch<Action<string>>): State => {
    return {
        sendMessage: (data) => sendMessage(dispatch, data),
        onClearSelect: () => dispatch(clearSelect()),
    };
};

const mapStateToProps = (state): State => {
    return {
        signalFrom: state.routeBuilder.signalFrom,
        signalTo: state.routeBuilder.signalTo,
        availableRoutes: state.routeBuilder.availableRoutes,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(RouteBuilder);
