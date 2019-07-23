import * as React from 'react';
import {connect} from 'react-redux';
import {Store} from '../../reducers';
import {
    Action,
    Dispatch,
} from 'redux';
import {TurnoutsState} from '../../reducers/objectState';
import {
    TurnoutPosition,
    turnouts,
    RequestedTurnoutPosition,
} from '../definitions/Points';
import {changeTurnout} from '../../actions/messages';

interface State {
    turnoutsState?: TurnoutsState;

    onChangeTurnout?(id: number, state: RequestedTurnoutPosition): void;
}

class TurnoutPreview extends React.Component<State, {}> {
    public render() {
        const {turnoutsState: pointsState} = this.props;

        return (
            <div className="list-group list-scroll">
                {turnouts.map((sectorDef, index) => {
                    // sectorsState[id];
                    // sectorDef.id;
                    const pointState = pointsState[sectorDef.locoNetId];
                    const state = pointState ? pointState.position : undefined;
                    const locked = pointState ? pointState.locked : [];

                    return <div className="list-group-item" key={index}>
                        <div className="row">
                            <span className="col-1">{sectorDef.locoNetId}</span>
                            <span className="col-2">{sectorDef.name}</span>
                            <span className="col-2">{/*pointState && pointState.changing*/}</span>
                            <span className="col-1">
                            <span className={this.getClassNameByState(state)}>
                               {state === undefined ? 'NA' : state}
                            </span>
                            </span>
                            <div className="col-3">
                                {this.getButton(sectorDef.locoNetId, state)}
                            </div>
                            <div className="col-4">
                                {locked.map((id) => {
                                    return <small className='ml-1'>{id}</small>;
                                })}
                            </div>
                        </div>
                    </div>
                })}
            </div>
        )
    }

    private getButton(id: number, state: TurnoutPosition): JSX.Element {
        const buttons = [];

        if (state === 0 || state === 1) {
            buttons.push(<button className="btn btn-sm btn-secondary"
                                 onClick={() => {
                                     this.props.onChangeTurnout(id, -1)
                                 }}
            >-</button>);
        }
        if (state === 0 || state === -1) {
            buttons.push(<button className="btn btn-sm btn-primary"
                                 onClick={() => {
                                     this.props.onChangeTurnout(id, 1)
                                 }}
            >+</button>);
        }
        return <>{buttons}</>;

    }

    private getClassNameByState(state: number) {
        if (state === undefined) {
            return 'badge badge-undefined';
        }
        switch (state) {
            case -1:
                return 'badge badge-warning';
            case 1:
                return 'badge badge-success';
            default:
                return 'badge badge-danger';
        }
    }
}

const mapStateToProps = (state: Store): State => {
    return {
        turnoutsState: state.objectState.turnouts,
    };
};
const mapDispatchToProps = (dispatch: Dispatch<Action<string>>): State => {
    return {
        onChangeTurnout: (id: number, state: RequestedTurnoutPosition) => changeTurnout(dispatch, id, state),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TurnoutPreview);
