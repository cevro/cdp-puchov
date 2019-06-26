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
    onChangeSector?(id: number, state: number): void;
}

class SectorsPreview extends React.Component<State, {}> {
    public render() {
        const {sectors: sectorsState} = this.props;

        return (
            <div className="list-group list-scroll">
                {sectors.map((sectorDef, index) => {
                    // sectorsState[id];
                    // sectorDef.id;
                    const state = sectorsState[sectorDef.id] ? sectorsState[sectorDef.id].state : undefined;
                    const locked = sectorsState[sectorDef.id] ? sectorsState[sectorDef.id].locked : null;

                    return <div className="list-group-item" key={index}>
                        <div className="row">
                            <span className="col-2">{sectorDef.id}</span>
                            <span className="col-2">{sectorDef.name}</span>
                            <span className="col-1">
                            <span className={this.getClassNameByState(state)}>
                               {state === undefined ? 'NA' : state}
                            </span>
                            </span>
                            <div className="col-3">
                                {this.getButton(sectorDef.id, state)}
                            </div>
                            <div className="col-4">
                                {locked}
                            </div>
                        </div>
                    </div>
                })}
            </div>
        )
    }

    private getButton(id: number, state: number): JSX.Element {
        switch (state) {
            case 0:
                return <button className="btn btn-success btn-sm"
                               onClick={() => {
                                   this.props.onChangeSector(id, 1)
                               }}
                >Set free</button>;
            case 1:
                return <button className="btn btn-danger btn-sm"
                               onClick={() => {
                                   this.props.onChangeSector(id, 0)
                               }}
                >Set busy</button>;
            default:
                return <span/>;
        }
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
