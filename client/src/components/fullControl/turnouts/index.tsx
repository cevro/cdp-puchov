import * as React from 'react';
import {connect} from 'react-redux';
import {Store} from '@app/reducers';
import {TurnoutsState} from '@app/reducers/objectState';
import {autoBlockPuLpM} from '@app/definition/autoBlock/Pu-LpM';
import Row from './row';
import {
    TurnoutDefinition,
    turnouts,
} from '@definitions/points';

interface State {
    turnoutsState?: TurnoutsState;
}

class TurnoutsTable extends React.Component<State, {}> {
    public render() {
        const {turnoutsState} = this.props;
        return (
            <div className="container">
                <table className="table table-hover table-striped table-dark">
                    <tbody>
                    {this.getTurnouts().map((turnoutDef, index) => {
                        return <Row key={index}
                                    turnoutDef={turnoutDef}
                                    turnoutState={turnoutsState[turnoutDef.locoNetId]}/>
                    })}
                    </tbody>
                </table>
            </div>
        );
    }

    private getTurnouts(): TurnoutDefinition[] {
        return [...autoBlockPuLpM.objects.points, ...turnouts];
    }
}

const mapStateToProps = (state: Store): State => {
    return {
        turnoutsState: state.objectState.turnouts,
    };
};

const mapDispatchToProps = (): State => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(TurnoutsTable);
