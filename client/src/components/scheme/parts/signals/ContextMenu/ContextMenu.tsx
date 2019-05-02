import * as React from 'react';
import { connect } from 'react-redux';
import { Signals } from '../../../../definitions/Signals';
import { getSignal } from '../../../../../middleware/signal';
import Icon from './Icon';

interface State {
    active?: boolean;
    id?: number;
    state?: number;
}

class ContextMenu extends React.Component<State, {}> {
    render() {
        const {id, state} = this.props;
        const signal = Signals.filter((signal) => {
            return signal.id == id;
        })[0];
        return (
            <div className="signal-context-menu">
                {signal ? (<span className="row">
                    <div className="col-7">
                        <p className={'signal-label ' + signal.type}>{signal.name}</p>
                    </div>
                    <div className="col-5">
                        <Icon state={state} signal={signal}/>
                    </div>
                </span>) : null}
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps: {}): State => {

    return {
        id: state.signalsContextMenu.id,
        active: state.signalsContextMenu.active,
        state: getSignal(state.signals, state.signalsContextMenu.id),
    };
};

export default connect(mapStateToProps, null)(ContextMenu);


