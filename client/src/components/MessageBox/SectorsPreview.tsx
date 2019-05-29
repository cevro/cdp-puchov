import * as React from 'react';
import { connect } from 'react-redux';
import { Store } from '../../reducers';
import {
    Action,
    Dispatch,
} from 'redux';
import { SectorsState } from '../../reducers/objectState';
import { sectors } from '../definitions/Sectors';
import { changeSector } from '../../actions/webSocets';

interface State {
    sectors?: SectorsState;
    onChangeSector?: (id: number, state: number) => void;
}

class SectorsPreview extends React.Component<State, {}> {
    public render() {
        const {sectors: sectorsState} = this.props;

        return (
            <div>
                {sectors.map((sectorDef, index) => {
                    // sectorsState[id];
                    // sectorDef.id;
                    const state = sectorsState[sectorDef.id] ? sectorsState[sectorDef.id].state : undefined;

                    return <div className="row" key={index}>
                        <span className="col-2">{sectorDef.id}</span>
                        <span className="col-2">{sectorDef.name}</span>
                        <span className="col-2">
                            <span className={this.getClassNameByState(state)}>
                               {state === undefined ? 'NA' : state}
                            </span>
                            </span>
                        <div className="col-4">
                            <select className="form-control" value={state} onChange={(event) => {
                                this.props.onChangeSector(sectorDef.id, +event.target.value)
                            }}>
                                <option value={0}>0</option>
                                <option value={1}>1</option>
                            </select>
                        </div>

                    </div>
                })}
            </div>
        )
    }

    private getClassNameByState(state: number) {
        if (state === undefined) {
            return 'badge badge-undefined';
        }
        switch (state) {
            case 0:
                return 'badge badge-danger';
            case 1:
                return 'badge badge-secondary';

            default:
                return 'badge badge-dark';
        }
    }
}

const mapStateToProps = (state: Store): State => {
    return {
        sectors: state.objectState.sectors,
    };
};
const mapDispatchToProps = (dispatch: Dispatch<Action<string>>): State => {
    return {
        onChangeSector: (id, state) => changeSector(dispatch, id, state),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SectorsPreview);
