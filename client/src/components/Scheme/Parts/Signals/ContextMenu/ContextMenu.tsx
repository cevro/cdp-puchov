import * as React from 'react';
import { signals } from '../../../../definitions/Signals';
import Icon from './Icon';
import { getSignal } from '../../../../../middleware/signal';
import { connect } from 'react-redux';

interface State {
    active?: boolean;
    id?: number;
    state?: number;
}

class ContextMenu extends React.Component<State, {}> {
    public render() {
        const {id, state} = this.props;
        const signal = signals.filter((signal) => {
            return signal.id === id;
        })[0];
        return (
            <div className="signal-context-menu card bg-dark">
                {signal ? (<>
                        <h3 className="card-header">
                            <span className={'badge signal-badge-' + signal.type}>{signal.name}</span>
                        </h3>
                        <div>
                            <div className="text-center py-1" style={{maxHeight: '100%'}}>
                                <Icon state={state} signal={signal}/>
                            </div>
                        </div>
                    </>
                ) : null}
            </div>
        );
    }
}

const mapStateToProps = (state): State => {
    return {
        id: state.signalsContextMenu.id,
        active: state.signalsContextMenu.active,
        state: getSignal(state, state.signalsContextMenu.id),
    };
};

export default connect(mapStateToProps, null)(ContextMenu);


