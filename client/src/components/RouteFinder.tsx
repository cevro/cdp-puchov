import * as React from 'react';
import { connect } from 'react-redux';
import {
    Action,
    Dispatch,
} from 'redux';
import { Store } from '../reducers';
import { signals } from '@definitions/signals';
import { sectors } from '@definitions/sectors';
import { findRoute } from '../actions/routeBuilder';

interface State {
    startSignal?: number;
    endSector?: number;

    onFindRoute?(signalId: number, sectorId: number): void;
}

class RouteFinder extends React.Component<State, {}> {

    public render() {

        const {startSignal, endSector} = this.props;
        let signal = null;
        if (startSignal !== undefined) {
            signal = signals.filter((def) => {
                return def.locoNetId === startSignal;
            })[0];
        }
        let sector = null;
        if (endSector !== undefined) {
            sector = sectors.filter((def) => {
                return def.id === endSector;
            })[0];
        }
        return (<div className="card-body">
            <div className="row">
                <span>Start signal:</span>
                <span>{signal && signal.name}</span>
            </div>
            <div className="row">
                <span>End sector:</span>
                <span>{sector && sector.name}</span>
            </div>
            <div className="row">
                <button
                    className="btn btn-primary"
                    onClick={() => {
                        this.props.onFindRoute(startSignal, endSector);
                    }}
                    disabled={!(sector && signal)}
                >Find
                </button>
            </div>
        </div>);
    }
}

const mapDispatchToProps = (dispatch: Dispatch<Action<string>>): State => {
    return {
        onFindRoute: (signalId: number, sectorId: number) => findRoute(dispatch, signalId, sectorId),
    };
};

const mapStateToProps = (state: Store): State => {
    return {
        startSignal: state.routeBuilder.startSignalId,
        endSector: state.routeBuilder.endSectorId,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(RouteFinder);
