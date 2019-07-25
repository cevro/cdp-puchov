import * as React from 'react';
import {connect} from 'react-redux';
import {Store} from '@app/reducers';
import {
    Action,
    Dispatch,
} from 'redux';
import {SectorsState} from '@app/reducers/objectState';
import {changeSector} from '@app/actions/messages';
import {SectorDefinition} from '@definitions/sectors';

interface Props {
    sectors: SectorDefinition[];
}

interface State {
    sectorsState?: SectorsState;

    onChangeSector?(id: number, state: number): void;
}

export const SECTOR_STATE_OCCUPIED = 2;
export const SECTOR_STATE_FREE = 1;
export const SECTOR_STATE_UNDEFINED = -1;

class SectorsPreview extends React.Component<State & Props, {}> {

    public render() {
        const {sectors, sectorsState} = this.props;

        return (
            <div className="list-group list-scroll">
                {sectors.map((sectorDef, index) => {
                    // sectorsState[id];
                    // sectorDef.id;
                    const state = sectorsState[sectorDef.id] ? sectorsState[sectorDef.id].state : undefined;
                    const locked = sectorsState[sectorDef.id] ? sectorsState[sectorDef.id].locked : null;

                    return <div className={'list-group-item ' + this.getClassNameByState(state)} key={index}>
                        <div className="row">
                            <span className="col-2">{sectorDef.id}</span>
                            <span className="col-2">{sectorDef.name}</span>
                            <span className="col-2">
                                {this.getStateLabel(state)}
                            </span>
                            <div className="col-3">
                                {this.getButton(sectorDef.id, state)}
                            </div>
                            <div className="col-3">
                                {locked}
                            </div>
                        </div>
                    </div>
                })}
            </div>
        )
    }

    private getStateLabel(state: number): JSX.Element {
        if (state === undefined) {
            return <span className="badge badge-undefined">NA</span>;
        }
        switch (state) {
            case SECTOR_STATE_OCCUPIED:
                return <span className="badge badge-danger">OCCUPIED</span>;
            case SECTOR_STATE_FREE:
                return <span className="badge badge-success">FREE</span>;
            case SECTOR_STATE_UNDEFINED:
                return <span className="badge badge-undefined">NA</span>;
            default:
                return <span className="badge badge-secondary">WTF</span>;
        }

    }

    private getButton(id: number, state: number): JSX.Element[] {
        const buttons = [];
        if (state !== SECTOR_STATE_FREE) {
            buttons.push(<button key={0} className="btn btn-success btn-sm"
                                 onClick={() => {
                                     this.props.onChangeSector(id, SECTOR_STATE_FREE)
                                 }}
            >Set free</button>);
        }
        if (state !== SECTOR_STATE_OCCUPIED) {
            buttons.push(<button key={1} className="btn btn-danger btn-sm"
                                 onClick={() => {
                                     this.props.onChangeSector(id, SECTOR_STATE_OCCUPIED)
                                 }}
            >Set busy</button>)
        }

        return buttons;
    }

    private getClassNameByState(state: number) {
        if (state === undefined) {
            return 'list-item-undefined';
        }
        switch (state) {
            case SECTOR_STATE_OCCUPIED:
                return 'list-item-danger';
            case SECTOR_STATE_FREE:
                return 'list-item-success';
            case SECTOR_STATE_UNDEFINED:
                return 'list-item-undefined';
            default:
                return 'list-item-secondary';
        }
    }
}

const mapStateToProps = (state: Store): State => {
    return {
        sectorsState: state.objectState.sectors,
    };
};
const mapDispatchToProps = (dispatch: Dispatch<Action<string>>): State => {
    return {
        onChangeSector: (id, state) => changeSector(dispatch, id, state),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SectorsPreview);
