import * as React from 'react';
import { connect } from 'react-redux';
import {
    Action,
    Dispatch,
} from 'redux';
import { Store } from '../../reducers';
import {
    togglePointText,
    toggleSignalText,
} from '../../actions/displayOptions';
import {
    SIGNAL_ENTRY,
    SIGNAL_EXIT,
    SIGNAL_PATH,
    SIGNAL_SHIFT,
} from '../definitions/Signals';
import { displayOptionsState } from '../../reducers/displayOptions';

interface State {
    onToggleSignal?: (type: number) => void;
    onTogglePoints?: () => void;
    displayState?: displayOptionsState;
}

class Options extends React.Component<State, {}> {

    public render() {
        const {onToggleSignal, displayState, onTogglePoints} = this.props;
        return (<div className="row">
            <div className="col-6">
                {[SIGNAL_ENTRY, SIGNAL_EXIT, SIGNAL_PATH, SIGNAL_SHIFT].map((type: number) => {
                    return <div className="row">
                        <button className="btn btn-link" onClick={() => {
                            onToggleSignal(type);
                        }}>
                    <span
                        className={displayState.signals[type] ? 'text-success fa fa-check-square-o' : 'text-danger fa fa-square-o'}/>
                            <span className={'ml-3 badge signal-badge-' + type}>toggle label on {type}</span>
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
