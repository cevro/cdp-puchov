import * as React from 'react';
import { connect } from 'react-redux';
import { Store } from '../../reducers';
import {
    Action,
    Dispatch,
} from 'redux';
import { PointsState } from '../../reducers/objectState';
import {
    pointPosition,
    points,
    requestedPointPosition,
} from '../definitions/Points';
import { changePoint } from '../../actions/webSocets';

interface State {
    points?: PointsState;

    onChangePoint?(id: number, state: requestedPointPosition): void;
}

class PointsPreview extends React.Component<State, {}> {
    public render() {
        const {points: pointsState} = this.props;

        return (
            <div className="list-group list-scroll">
                {points.map((sectorDef, index) => {
                    // sectorsState[id];
                    // sectorDef.id;
                    const pointState = pointsState[sectorDef.id];
                    const state = pointState ? pointState.position : undefined;
                    const locked = pointState ? pointState.locked : [];

                    return <div className="list-group-item" key={index}>
                        <div className="row">
                            <span className="col-1">{sectorDef.id}</span>
                            <span className="col-2">{sectorDef.name}</span>
                            <span className="col-2">{/*pointState && pointState.changing*/}</span>
                            <span className="col-1">
                            <span className={this.getClassNameByState(state)}>
                               {state === undefined ? 'NA' : state}
                            </span>
                            </span>
                            <div className="col-3">
                                {this.getButton(sectorDef.id, state)}
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


    private getButton(id: number, state: pointPosition): JSX.Element {
        const buttons = [];

        if (state === 0 || state === 1) {
            buttons.push(<button className="btn btn-sm btn-secondary"
                                 onClick={() => {
                                     this.props.onChangePoint(id, -1)
                                 }}
            >-</button>);
        }
        if (state === 0 || state === -1) {
            buttons.push(<button className="btn btn-sm btn-primary"
                                 onClick={() => {
                                     this.props.onChangePoint(id, 1)
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
        points: state.objectState.points,
    };
};
const mapDispatchToProps = (dispatch: Dispatch<Action<string>>): State => {
    return {
        onChangePoint: (id: number, state: requestedPointPosition) => changePoint(dispatch, id, state),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PointsPreview);
