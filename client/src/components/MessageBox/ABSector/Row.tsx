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
import {stat} from 'fs';

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
                    {this.getActiveLabel(active)}
                </span>
                <span className="col-2">
                    {this.getErrorLabel(error)}
                </span>
                <span className="col-2">
                    {this.getStateLabel(state)}
                </span>
                <span className="col-2">
                    {this.getBlockConditionLabel(ABCondition)}
                            </span>
                <span className="col-1">
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

    private getListClassName(objectState: ABSectorState, active: number, error: number, blockCondition: number, state: number) {
        if (objectState === undefined || error === -1 || active === -1 || blockCondition === -1 || state === -1) {
            return 'list-item-undefined';
        }
        if (!active) {
            return 'list-item-secondary';
        }
        if (error > 0) {
            return 'list-item-danger';
        }
        if (blockCondition === 0) {
            return 'list-item-warning';
        }
        return '';

    }

    private getStateLabel(state: number) {
        if (state === undefined || state === -1) {
            return <span className="badge badge-undefined">undefined</span>;
        }
        switch (state) {
            case 1:
                return <span className="badge badge-danger">used</span>;
            case 2:
                return null;
            default:
                return <span className="badge badge-warning">undefined</span>;
        }
    }

    private getActiveLabel(active: number): JSX.Element {
        if (active === undefined || active === -1) {
            return <span className="badge badge-undefined">undefined</span>;
        }
        switch (active) {
            case 0:
                return <span className="badge badge-secondary">inactive</span>;
            default:
                return null;
        }
    }

    private getErrorLabel(error: number): JSX.Element {
        if (error === undefined || error === -1) {
            return <span className="badge badge-undefined">undefined</span>;
        }
        switch (error) {
            case 0:
                return null;
            case 1:
                return <span className="badge badge-danger">BC error</span>;
            default:
                return <span className="badge badge-danger">error</span>;
        }
    }

    private getBlockConditionLabel(blockCondition: number): JSX.Element {

        if (blockCondition === undefined || blockCondition === -1) {
            return <span className="badge badge-undefined">undefined</span>;
        }
        switch (blockCondition) {
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
