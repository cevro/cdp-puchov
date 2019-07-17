import * as React from 'react';
import {connect} from 'react-redux';
import {
    Action,
    Dispatch,
} from 'redux';
import {Store} from '../../reducers';
import {
    togglePointText,
    toggleSignalText,
} from '../../actions/displayOptions';
import {SignalTypes} from '../definitions/Signals';
import {displayOptionsState} from '../../reducers/displayOptions';

interface State {
    displayState?: displayOptionsState;

    onToggleSignal?(type: number): void;

    onTogglePoints?(): void;
}

class Options extends React.Component<State, {}> {

    public render() {
        const {onToggleSignal, displayState, onTogglePoints} = this.props;
        return (<div className="card-body row">
            <div className="col-6">
                <h6>Toggle label on signals</h6>
                {SignalTypes.getAllTypes().map((type: number) => {
                    return <div className="row" key={type}>
                        <button className="btn btn-link" onClick={() => {
                            onToggleSignal(type);
                        }}>
                    <span
                        className={displayState.signals[type] ? 'text-success fa fa-check-square-o' : 'text-danger fa fa-square-o'}/>
                            <span
                                className={'ml-3 badge signal-badge-' + type}>{SignalTypes.getLabel(type)}</span>
                        </button>
                    </div>
                })
                }
            </div>
            <div className="col-6">
                <div className="row">
                    <button className="btn btn-link" onClick={() => {
                        onTogglePoints();
                    }}>
                    <span
                        className={displayState.points ? 'text-success fa fa-check-square-o' : 'text-danger fa fa-square-o'}/>
                        <span className={'ml-3 badge badge-secondary'}>toggle points on</span>
                    </button>
                </div>
            </div>
        </div>);
    }
}

const mapDispatchToProps = (dispatch: Dispatch<Action<string>>): State => {
    return {
        onToggleSignal: (type: number) => dispatch(toggleSignalText(type)),
        onTogglePoints: () => dispatch(togglePointText()),
    };
};

const mapStateToProps = (state: Store): State => {
    return {
        displayState: state.displayOptions,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Options);
