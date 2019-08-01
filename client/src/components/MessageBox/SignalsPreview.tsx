import * as React from 'react';
import {connect} from 'react-redux';
import {Store} from '@app/reducers';
import {
    Action,
    Dispatch,
} from 'redux';
import {SignalsState} from '@app/reducers/objectState';
import {changeSignal} from '@app/actions/messages';
import {SignalDefinition} from '@definitions/signals/interfaces';
import SignalChange from '@app/components/fullControl/signals/signalChange';

interface State {
    signalsState?: SignalsState;

    onChangeSignal?(id: number, state: number): void;
}

interface Props {
    signals: SignalDefinition[];

}

class SignalsPreview extends React.Component<State & Props, {}> {
    public render() {
        const {signals, signalsState} = this.props;
        return (
            <div className="list-group list-scroll">
                {signals.map((signalDef, index) => {
                    const displayState = signalsState[signalDef.locoNetId] ? signalsState[signalDef.locoNetId].displayState : undefined;
                    const requestedState = signalsState[signalDef.locoNetId] ? signalsState[signalDef.locoNetId].requestedState : undefined;
                    return <div className="list-group-item" key={index}>
                        <div className="row">
                            <span className="col-2">{signalDef.locoNetId}</span>
                            <span className="col-2">{signalDef.name}</span>
                            <span className="col-1">{displayState}</span>
                            <span className="col-1">{requestedState}</span>
                            <span className="col-6">
                            <SignalChange signalState={signalsState[signalDef.locoNetId]}
                                          locoNetId={signalDef.locoNetId}/>
                            </span>
                        </div>
                    </div>
                })}
            </div>
        );
    }
}

const mapStateToProps = (state: Store): State => {
    return {
        signalsState: state.objectState.signals,
    };
};
const mapDispatchToProps = (dispatch: Dispatch<Action<string>>): State => {
    return {
        onChangeSignal: (id, state) => changeSignal(dispatch, id, state),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignalsPreview);
