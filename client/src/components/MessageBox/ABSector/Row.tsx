import * as React from "react";
import {AutoBlockSectorFrontEndDefinition} from "../../../definition/autoBlock/Pu-LpM";
import {ABSectorState} from "../../definitions/interfaces";
import {Store} from "../../../reducers";
import {
    Action,
    Dispatch,
} from "redux";
import {
    changeABCondition,
    removeABError,
} from "../../../actions/webSocets";
import {connect} from "react-redux";
import {ABSectorsState} from "../../../reducers/objectState";

interface Props {
    definition: AutoBlockSectorFrontEndDefinition;
    objectState: ABSectorState;
    displayOnlyInterest: boolean;
}

interface State {
    ABSectorsState?: ABSectorsState;

    onChangeABCondition?(state: number): void;

    onRemoveABError?(): void;
}

interface InnerState {
    display: boolean;
}

class Row extends React.Component<Props & State, InnerState> {
    constructor(props) {
        super(props);
        this.state = {display: false};
    }

    public render() {
        const {objectState, definition} = this.props;
        const active = objectState ? objectState.active : undefined;
        const error = objectState ? objectState.errorCode : undefined;
        const state = objectState ? objectState.state : undefined;
        const ABCondition = state ? objectState.fullBlockConditionActive : undefined;

        if (this.props.displayOnlyInterest) {
            if (active === 0) {
                return null;
            }
            if (ABCondition === 1 && error === 0) {
                return null;
            }
        }
        return <div
            className={'list-group-item ' + this.getListClassName(objectState, active, error, ABCondition)}>
            <div className="row">
                <span className="col-2">{definition.locoNetId}</span>
                <span className="col-2">
                                <span
                                    className={'badge badge-' + (active ? 'success' : 'secondary')}
                                >{active ? 'active' : 'inactive'}</span>
                            </span>
                <span className="col-2">
                    {error !== 0 ? <span
                        className={this.getErrorClassName(error)}>ER:{error}
                    </span> : null}

                            </span>
                <span className="col-2">
                                <span className={this.getStateClassName(state)}>{this.getStateLabel(state)}</span>
                            </span>
                <span className="col-2">
                                <span
                                    className={'badge badge-' + ((ABCondition === undefined) ? 'undefined' : (ABCondition ? 'success' : 'warning'))}
                                >ABC {ABCondition ? 'ON' : 'OFF'}</span>
                            </span>
                <span className="col-">
                    <button className="btn btn-link" onClick={(e) => {
                        e.preventDefault();
                        this.setState({display: !this.state.display});
                    }}><span className={this.state.display ? 'fa fa-chevron-up' : 'fa fa-chevron-down'}/></button>
                </span>
            </div>
            <div className={'row border-top ' + (this.state.display ? '' : 'd-none')}>
                {error > 0 ?
                    <button className="btn btn-sm btn-primary"
                            onClick={() => this.props.onRemoveABError()}>remove ERR
                    </button> : null}
                {ABCondition ?
                    <button
                        className="btn btn-sm btn-danger"
                        onClick={() => this.props.onChangeABCondition(0)}>Turn OFF
                        AB condition
                    </button> :
                    <button
                        className="btn btn-sm btn-success"
                        onClick={() => this.props.onChangeABCondition(1)}>Turn ON
                        AB condition
                    </button>
                }
            </div>
        </div>
    }

    private getListClassName(objectState: ABSectorState, active: number, error: number, ABCondition: number) {
        if (objectState === undefined) {
            return 'list-item-undefined';
        }
        if (!active) {
            return 'list-item-secondary';
        }
        if (error > 0) {
            return 'list-item-danger';
        }
        if (ABCondition === 0) {
            return 'list-item-warning';
        }

    }

    private getErrorClassName(error: number) {
        if (error === undefined) {
            return 'badge badge-undefined';
        }
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
        if (state === undefined) {
            return 'badge badge-undefined';
        }
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
        if (state === undefined) {
            return 'undefined';
        }
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
const mapDispatchToProps = (dispatch: Dispatch<Action<string>>, ownProps: Props): State => {
    return {
        onChangeABCondition: (state) => changeABCondition(dispatch, ownProps.definition.locoNetId, state),
        onRemoveABError: () => removeABError(dispatch, ownProps.definition.locoNetId),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Row);
