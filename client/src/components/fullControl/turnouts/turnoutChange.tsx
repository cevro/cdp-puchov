import * as React from 'react';
import {connect} from 'react-redux';
import {
    Action,
    Dispatch,
} from 'redux';
import {changeTurnout} from '@app/actions/messages';
import {TurnoutState} from '@definitions/interfaces';
import {RequestedTurnoutPosition} from '@definitions/points';

interface State {
    onChangeTurnout?(state: RequestedTurnoutPosition): void;
}

interface Props {
    turnoutState?: TurnoutState;
    locoNetId: number
}

class TurnoutChange extends React.Component<State & Props, {}> {
    public render() {
        const {turnoutState} = this.props;
        const buttons = [];
        const state = turnoutState ? turnoutState.position : 0;
        if (state !== -1) {
            buttons.push(<button key={'-'} className="btn btn-sm btn-secondary"
                                 onClick={() => {
                                     this.props.onChangeTurnout(-1)
                                 }}
            >Set position closed (-)</button>);
        }
        if (state !== 1) {
            buttons.push(<button key={'+'} className="btn btn-sm btn-primary"
                                 onClick={() => {
                                     this.props.onChangeTurnout(1)
                                 }}
            >Set position (+)</button>);
        }
        return <>{buttons}</>;
    }

}

const mapStateToProps = (): State => {
    return {};
};
const mapDispatchToProps = (dispatch: Dispatch<Action<string>>, ownProps: Props): State => {
    return {
        onChangeTurnout: (state: RequestedTurnoutPosition) => changeTurnout(dispatch, ownProps.locoNetId, state),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TurnoutChange);
