import * as React from 'react';
import Icon from './Icon';
import { getSignal } from '../../../../../middleware/objectState';
import { connect } from 'react-redux';
import { SignalState } from '../../../../../../../definitions/interfaces';
import { Store } from '../../../../../reducers';
import {
    Action,
    Dispatch,
} from 'redux';
import { closeContextMenu } from '../../../../../actions/signalContextMenu';
import { SignalFrontEndDefinition } from '../../../../../definition/all';

interface Props {
    signals: SignalFrontEndDefinition[];
}

interface State {
    active?: boolean;
    id?: number;
    stateObject?: SignalState;
    coordinates?: {
        x: number;
        y: number;
    };

    onCloseContext?(): void;
}

class ContextMenu extends React.Component<State & Props, {}> {
    public render() {
        const {id, stateObject, coordinates, active, onCloseContext} = this.props;
        const state = stateObject ? stateObject.displayState : undefined;
        const signal = this.props.signals.filter((signal) => {
            return signal.locoNetId === id;
        })[0];

        if (!active) {
            return null;
        }
        return (
            <div className="signal-context-menu"
                 style={{
                     position: 'absolute',
                     left: coordinates.x,
                     top: coordinates.y,
                 }}>
                {signal ? (<>
                        <h3 className="card-header">
                            <span className={'badge signal-badge-' + signal.type}>{signal.name}</span>
                            <button type="button" className="close" aria-label="Close" onClick={() => {
                                onCloseContext();
                            }}>
                                <span aria-hidden="true">&times;</span>
                            </button>
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

const mapStateToProps = (state: Store): State => {
    return {
        id: state.signalContextMenu.id,
        active: state.signalContextMenu.active,
        coordinates: state.signalContextMenu.coordinates,
        stateObject: getSignal(state, state.signalContextMenu.id),
    };
};
const mapDispatchToProps = (dispatch: Dispatch<Action<string>>): State => {
    return {
        onCloseContext: () => dispatch(closeContextMenu()),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ContextMenu);


