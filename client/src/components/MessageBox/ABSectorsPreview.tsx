import * as React from 'react';
import {
    Action,
    Dispatch,
} from 'redux';
import { AutoBlockSectorsState } from '../../reducers/objectState';
import { AutoBlockSectorFrontEndDefinition } from '../../definition/autoBlock/Pu-LpM';
import { Store } from '../../reducers';
import {
    changeABCondition,
    removeABError,
} from '../../actions/webSocets';
import { connect } from 'react-redux';

interface State {
    ABSectorsState?: AutoBlockSectorsState;

    onChangeABCondition?(id: number, state: number): void;

    onRemoveABError?(id: number): void;
}

interface Props {
    ABSectors: AutoBlockSectorFrontEndDefinition[];
}

class ABSectorsPreview extends React.Component<State & Props, {}> {
    public render() {
        const {ABSectors, ABSectorsState} = this.props;

        return (
            <div className="list-group list-scroll">
                {ABSectors.map((sectorDef, index) => {
                    const stateObject = ABSectorsState[sectorDef.locoNetId];
                    const active = stateObject ? stateObject.active : undefined;
                    const error = stateObject ? stateObject.errorCode : undefined;
                    const state = stateObject ? stateObject.state : undefined;
                    const ABCondition = stateObject ? stateObject.fullBlockConditionActive : undefined;
                    return <div className="list-group-item" key={index}>
                        <div className="row">
                            <span className="col-2">{sectorDef.locoNetId}</span>
                            <span className="col-2">
                                <span
                                    className={'badge badge-' + (active ? 'success' : 'secondary')}
                                >{active ? 'active' : 'inactive'}</span>
                            </span>
                            <span className="col-2">ER:{error}</span>
                            <span className="col-2">ST:{state}</span>
                            <span className="col-2">
                                <span
                                    className={'badge badge-' + (ABCondition ? 'success' : 'warning')}
                                >ABC {ABCondition ? 'ON' : 'OFF'}</span>
                            </span>
                        </div>
                        <div className="row">
                            {error ?
                                <button className="btn btn-sm btn-primary"
                                        onClick={(e) => this.props.onRemoveABError(sectorDef.locoNetId)}>remove ERR
                                </button> : null}
                            {ABCondition ?
                                <button
                                    className="btn btn-sm btn-danger"
                                    onClick={(e) => this.props.onChangeABCondition(sectorDef.locoNetId, 0)}>Turn OFF
                                    AB condition
                                </button> :
                                <button
                                    className="btn btn-sm btn-success"
                                    onClick={(e) => this.props.onChangeABCondition(sectorDef.locoNetId, 1)}>Turn ON
                                    AB condition
                                </button>
                            }
                        </div>

                    </div>
                })}
            </div>
        );
    }
}

const mapStateToProps = (state: Store): State => {
    return {
        ABSectorsState: state.objectState.ABSectors,
    };
};
const mapDispatchToProps = (dispatch: Dispatch<Action<string>>): State => {
    return {
        onChangeABCondition: (id, state) => changeABCondition(dispatch, id, state),
        onRemoveABError: (id) => removeABError(dispatch, id),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ABSectorsPreview);
