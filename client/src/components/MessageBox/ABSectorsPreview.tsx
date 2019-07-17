import * as React from 'react';
import {
    Action,
    Dispatch,
} from 'redux';
import {AutoBlockSectorsState} from '../../reducers/objectState';
import {AutoBlockSectorFrontEndDefinition} from '../../definition/autoBlock/Pu-LpM';
import {Store} from '../../reducers';
import {
    changeABCondition,
    removeABError,
} from '../../actions/webSocets';
import {connect} from 'react-redux';

interface State {
    ABSectorsState?: AutoBlockSectorsState;

    onChangeABCondition?(id: number, state: number): void;

    onRemoveABError?(id: number): void;
}

interface Props {
    ABSectors: AutoBlockSectorFrontEndDefinition[];
}

interface InnerState {
    displayOnlyInterest: boolean;
}

class ABSectorsPreview extends React.Component<State & Props, InnerState> {
    constructor(props) {
        super(props);
        this.state = {
            displayOnlyInterest: false,
        };
    }

    public render() {
        const {ABSectors, ABSectorsState} = this.props;

        return (
            <div className="list-group list-scroll">
                <div className="list-group-item">
                    <button className={'btn btn-secondary'} onClick={() => {
                        this.setState({displayOnlyInterest: !this.state.displayOnlyInterest});
                    }}>{this.state.displayOnlyInterest ? 'Display all' : 'Display only interest'}</button>
                </div>
                {ABSectors.map((sectorDef, index) => {
                    const stateObject = ABSectorsState[sectorDef.locoNetId];
                    const active = stateObject ? stateObject.active : undefined;
                    const error = stateObject ? stateObject.errorCode : undefined;
                    const state = stateObject ? stateObject.state : undefined;
                    const ABCondition = stateObject ? stateObject.fullBlockConditionActive : undefined;

                    if (this.state.displayOnlyInterest) {
                        if (active === 0) {
                            return null;
                        }
                        if (ABCondition === 1 && error === 0) {
                            return null;
                        }
                    }
                    return <div className="list-group-item" key={index}>
                        <div className="row">
                            <span className="col-2">{sectorDef.locoNetId}</span>
                            <span className="col-2">
                                <span
                                    className={'badge badge-' + (active ? 'success' : 'secondary')}
                                >{active ? 'active' : 'inactive'}</span>
                            </span>
                            <span className="col-2">
                                <span
                                    className={this.getErrorClassName(error)}>ER:{error}</span>
                            </span>
                            <span className="col-2">
                                <span className={this.getStateClassName(state)}>{this.getStateLabel(state)}</span>
                            </span>
                            <span className="col-2">
                                <span
                                    className={'badge badge-' + (ABCondition ? 'success' : 'warning')}
                                >ABC {ABCondition ? 'ON' : 'OFF'}</span>
                            </span>
                        </div>
                        <div className="row">
                            {error>0 ?
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

    private getErrorClassName(error: number) {
        switch (error) {
            case -1:
                return 'badge badge-undefined';
            case 0:
                return 'badge';
            case 1:
                return 'badge badge-danger';
            default:
                return 'badge badge-warning';
        }
    }

    private getStateClassName(state: number) {
        switch (state) {
            case -1:
                return 'badge badge-undefined';
            case 1:
                return 'badge badge-danger';
            case 2:
                return 'badge badge-success';
            default:
                return 'badge badge-warning';
        }
    }

    private getStateLabel(state: number) {
        switch (state) {
            case -1:
                return 'undefined';
            case 1:
                return 'used';
            case 2:
                return 'free';
            default:
                return 'WTF';
        }
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
