import * as React from 'react';
import {AutoBlockSectorFrontEndDefinition} from '@app/definition/autoBlock/Pu-LpM';
import {ABSectorState} from '@definitions/interfaces';
import {Store} from '@app/reducers';
import {
    Action,
    Dispatch,
} from 'redux';
import {
    changeABCondition,
    removeABError,
} from '@app/actions/messages/ABSector';
import {connect} from 'react-redux';
import {ABSectorsState} from '@app/reducers/objectState';

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

        /*   if (this.props.displayOnlyInterest) {
               if (active === 0) {
                   return null;
               }
               if (ABCondition === 1 && error === 0) {
                   return null;
               }
           }*/
        return <div
            className={'list-group-item ' + this.getListClassName(objectState)}>
            <div className="row">
                <span className="col-2">{definition.locoNetId}</span>
                <span className="col-2">
                    {this.getActiveLabel(objectState)}
                </span>
                <span className="col-2">
                    {this.getErrorLabel(objectState)}
                </span>
                <span className="col-2">
                    {this.getStateLabel(objectState)}
                </span>
                <span className="col-2">
                    {this.getBlockConditionLabel(objectState)}
                            </span>
                <span className="col-1">
                    <button className="btn btn-link" onClick={(e) => {
                        e.preventDefault();
                        this.setState({display: !this.state.display});
                    }}><span className={this.state.display ? 'fa fa-chevron-up' : 'fa fa-chevron-down'}/></button>
                </span>
            </div>
            {objectState && (
                <div className={'row border-top ' + (this.state.display ? '' : 'd-none')}>
                    {objectState.errorCode > 0 ?
                        <button className="btn btn-sm btn-primary"
                                onClick={() => this.props.onRemoveABError()}>remove ERR
                        </button> : null}
                    {objectState.fullBlockConditionActive ?
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
                </div>)}
        </div>
    }

    private getListClassName(objectState: ABSectorState) {
        if (!objectState) {
            return 'list-item-undefined';
        }
        if (objectState.errorCode === -1 ||
            objectState.active === -1 ||
            objectState.fullBlockConditionActive === -1 ||
            objectState.state === -1) {
            return 'list-item-undefined';
        }
        if (!objectState.active) {
            return 'list-item-secondary';
        }
        if (objectState.errorCode > 0) {
            return 'list-item-danger';
        }
        if (objectState.fullBlockConditionActive === 0) {
            return 'list-item-warning';
        }
        return '';

    }

    private getStateLabel(objectState: ABSectorState) {

        if (!objectState) {
            return <span className="badge badge-undefined">undefined</span>;
        }
        switch (objectState.state) {
            case 1:
                return <span className="badge badge-danger">used</span>;
            case 2:
                return null;
            default:
                return <span className="badge badge-warning">undefined</span>;
        }
    }

    private getActiveLabel(objectState: ABSectorState): JSX.Element {
        if (!objectState) {
            return <span className="badge badge-undefined">undefined</span>;
        }
        switch (objectState.active) {
            case -1:
                return <span className="badge badge-undefined">undefined</span>;
            case 0:
                return <span className="badge badge-secondary">inactive</span>;
            default:
                return null;
        }
    }

    private getErrorLabel(objectState: ABSectorState): JSX.Element {
        if (!objectState) {
            return <span className="badge badge-undefined">undefined</span>;
        }
        switch (objectState.errorCode) {
            case -1:
                return <span className="badge badge-undefined">undefined</span>;
            case 0:
                return null;
            default:
                return <span className="badge badge-danger">{objectState.errorMessage}</span>;
        }
    }

    private getBlockConditionLabel(objectState: ABSectorState): JSX.Element {
        if (!objectState) {
            return <span className="badge badge-undefined">undefined</span>;
        }
        switch (objectState.fullBlockConditionActive) {
            case -1:
                return <span className="badge badge-undefined">undefined</span>
            case 0:
                return <span className="badge badge-warning">bc: OFF</span>;
            default:
                return null;
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
