import * as React from 'react';
import { connect } from 'react-redux';
import { Store } from '../../reducers';
import {
    Action,
    Dispatch,
} from 'redux';
import { PointsState } from '../../reducers/objectState';
import { points } from '../definitions/Points';

interface State {
    points?: PointsState;
    onChangePoint?: (id: number, state: number) => void;
}

class PointsPreview extends React.Component<State, {}> {
    public render() {
        const {points: pointsState} = this.props;

        return (
            <div className="list-group list-scroll">
                {points.map((sectorDef, index) => {
                    // sectorsState[id];
                    // sectorDef.id;
                    const state = pointsState[sectorDef.id] ? pointsState[sectorDef.id].state : undefined;
                    const locked = pointsState[sectorDef.id] ? pointsState[sectorDef.id].locked : [];

                    return <div className="list-group-item" key={index}>
                        <div className="row">
                            <span className="col-2">{sectorDef.id}</span>
                            <span className="col-2">{sectorDef.name}</span>
                            <span className="col-1">
                            <span className={this.getClassNameByState(state)}>
                               {state === undefined ? 'NA' : state}
                            </span>
                            </span>
                            <div className="col-3">
                                {/*this.getButton(sectorDef.id, state)*/}
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

    /*
        private getButton(id: number, state: number): JSX.Element {
            switch (state) {
                case 0:
                    return <button className="btn btn-success"
                                   onClick={() => {
                                       this.props.onChangeSector(id, 1)
                                   }}
                    >Set free</button>;
                case 1:
                    return <button className="btn btn-danger"
                                   onClick={() => {
                                       this.props.onChangeSector(id, 0)
                                   }}
                    >Set busy</button>;
                default:
                    return <span/>;
            }
        }*/

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
        //   onChangeSector: (id, state) => changePoint(dispatch, id, state),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PointsPreview);
