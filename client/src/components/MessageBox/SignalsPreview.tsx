import * as React from 'react';
import { connect } from 'react-redux';
import { Store } from '../../reducers';
import {
    Action,
    Dispatch,
} from 'redux';
import { SignalsState } from '../../reducers/objectState';
import { signals } from '../definitions/Signals';

interface State {
    signals?: SignalsState;
    // onChangeSector?: (id: number, state: number) => void;
}

class SignalsPreview extends React.Component<State, {}> {
    public render() {
        const {signals: signalsState} = this.props;
        /* <span className={this.getClassNameByState(state)}>
                                     {state === undefined ? 'NA' : state}
                                  </span>*/
        /* <div className="col-3">
                                    {this.getButton(sectorDef.id, state)}
                                </div>*/
        /*<div className="col-4">
            {locked}
        </div>*/
        return (
            <div className="list-group list-scroll">
                {signals.map((signalDef, index) => {
                    // sectorsState[id];
                    // sectorDef.id;
                    const state = signalsState[signalDef.id] ? signalsState[signalDef.id].state : undefined;

                    return <div className="list-group-item" key={index}>
                        <div className="row">
                            <span className="col-2">{signalDef.id}</span>
                            <span className="col-2">{signalDef.name}</span>
                            <span className="col-2">{state}</span>
                            <span className="col-1"/>

                        </div>
                    </div>
                })}
            </div>
        );
        /*                */
    }
}

const mapStateToProps = (state: Store): State => {
    return {
        signals: state.objectState.signals,
    };
};
const mapDispatchToProps = (dispatch: Dispatch<Action<string>>): State => {
    return {
        // onChangeSector: (id, state) => changeSector(dispatch, id, state),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignalsPreview);
