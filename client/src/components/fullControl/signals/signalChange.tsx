import * as React from 'react';
import {connect} from 'react-redux';
import {
    Action,
    Dispatch,
} from 'redux';
import {changeSignal} from '@app/actions/messages';
import {SignalState} from '@definitions/interfaces';
import {signalStateMapping} from '@app/middleware/signal';

interface State {
    onChangeSignal?(state: number): void;
}

interface Props {
    signalState?: SignalState;
    locoNetId: number
}

class SignalChange extends React.Component<State & Props, {}> {
    public render() {
        const {signalState} = this.props;
        return (
            <select className={'form-control'} value={signalState ? signalState.displayAspect : -1} onChange={(e) => {
                if (+e.target.value !== -1) {
                    this.props.onChangeSignal(+e.target.value);
                }
            }}>
                {[-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((value) => {
                    return <option key={value} value={value}>({value}) {signalStateMapping(value)}</option>
                })}
            </select>
        );
    }

}

const mapStateToProps = (): State => {
    return {};
};
const mapDispatchToProps = (dispatch: Dispatch<Action<string>>, ownProps: Props): State => {
    return {
        onChangeSignal: (state) => changeSignal(dispatch, ownProps.locoNetId, state),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignalChange);
