import * as React from 'react';
import {connect} from 'react-redux';
import {Store} from '@app/reducers';
import {SignalsState} from '@app/reducers/objectState';
import {autoBlockPuLpM} from '@app/definition/autoBlock/Pu-LpM';
import Row from './row';
import {signals} from '@definitions/signals';
import {
    SignalDefinition,
    SignalSchemeDefinition,
} from '@definitions/signals/interfaces';
import {getAllSignals} from '@definitions/signals/all';

interface State {
    signalsState?: SignalsState;
}

class SignalsTable extends React.Component<State, {}> {
    public render() {
        const {signalsState} = this.props;
        return (
            <div className="container">
                <table className="table table-hover table-striped table-dark">
                    <tbody>
                    {this.getSignals().map((signalDef, index) => {
                        return <Row key={index} signalDef={signalDef} signalState={signalsState[signalDef.locoNetId]}/>
                    })}
                    </tbody>
                </table>
            </div>
        );
    }

    private getSignals(): SignalDefinition[] {
        return getAllSignals();
    }
}

const mapStateToProps = (state: Store): State => {
    return {
        signalsState: state.objectState.signals,
    };
};
const mapDispatchToProps = (): State => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(SignalsTable);
