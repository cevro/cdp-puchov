import * as React from 'react';
import { connect } from 'react-redux';
import { Store } from '../../reducers';
import {
    Action,
    Dispatch,
} from 'redux';
import { SignalsState } from '../../reducers/objectState';
import { SignalFrontEndDefinition } from '../../definition/all';
import { changeSignal } from '../../actions/webSocets';

interface State {
    signalsState?: SignalsState;

    onChangeSignal?(id: number, state: number): void;
}

interface Props {
    signals: SignalFrontEndDefinition[];

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
                                <select className={'form-control'} value={displayState} onChange={(e) => {
                                    this.props.onChangeSignal(signalDef.locoNetId, +e.target.value);
                                }}>
                                    {[-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map((value) => {
                                        return <option key={value} value={value}>{value}</option>
                                    })}
                                    </select>
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
