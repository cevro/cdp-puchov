import * as React from 'react';
import {connect} from 'react-redux';
import {
    Action,
    Dispatch,
} from 'redux';
import {Store} from '@app/reducers';
import {
    toggleTurnoutText,
    toggleSignalText,
} from '@app/actions/displayOptions';
import {displayOptionsState} from '@app/reducers/displayOptions';
import {signalTypes} from '@definitions/signals/signalTypes';

interface State {
    displayState?: displayOptionsState;

    onToggleSignal?(type: number): void;

    onToggleTurnouts?(): void;
}

class Options extends React.Component<State, {}> {

    public render() {
        const {displayState} = this.props;
        return (<div className="card-body row">
            <div className="col-6">
                <h6>Toggle label on signals</h6>
                {signalTypes.getAllTypes().map((type: number) => {
                    return <div className="row" key={type}>
                        <button className="btn btn-link" onClick={() => {
                            this.props.onToggleSignal(type);
                        }}>
                    <span
                        className={displayState.signals[type] ? 'text-success fa fa-check-square-o' : 'text-danger fa fa-square-o'}/>
                            <span
                                className={'ml-3 badge signal-badge-' + type}>{signalTypes.getLabel(type)}</span>
                        </button>
                    </div>
                })
                }
            </div>
            <div className="col-6">
                <div className="row">
                    <button className="btn btn-link" onClick={() => {
                        this.props.onToggleTurnouts();
                    }}>
                    <span
                        className={displayState.points ? 'text-success fa fa-check-square-o' : 'text-danger fa fa-square-o'}/>
                        <span className={'ml-3 badge badge-secondary'}>toggle turnouts on</span>
                    </button>
                </div>
            </div>
        </div>);
    }
}

const mapDispatchToProps = (dispatch: Dispatch<Action<string>>): State => {
    return {
        onToggleSignal: (type: number) => dispatch(toggleSignalText(type)),
        onToggleTurnouts: () => dispatch(toggleTurnoutText()),
    };
};

const mapStateToProps = (state: Store): State => {
    return {
        displayState: state.displayOptions,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Options);
