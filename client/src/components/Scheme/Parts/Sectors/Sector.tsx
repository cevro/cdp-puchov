import * as React from 'react';
import {Store} from '@app/reducers';
import {connect} from 'react-redux';
import {getSectorState} from '@app/middleware/objectState';
import {sectorSelect} from '@app/actions/routeBuilder';
import {
    SECTOR_STATE_FREE,
    SECTOR_STATE_OCCUPIED,
} from '../../../MessageBox/SectorsPreview';
import {SectorDefinition} from "@definitions/sectors";
import {SectorState} from '@definitions/interfaces';

interface Props {
    definition: SectorDefinition;
}

interface State {
    stateObject?: SectorState;

    onSectorClick?(id: number): void;
}

class Sector extends React.Component<Props & State, {}> {
    public render() {
        let {definition: {SVGData, id, name}, stateObject, onSectorClick} = this.props;
        return (
            <g className={'sector ' + this.getStatusClassName(stateObject)} onClick={() => {
                onSectorClick(id);
            }}>
                {SVGData.points.map((points, index) => {
                    return (<polyline key={index} points={points}/>)
                })}
                {SVGData.label &&
                <g transform={'translate(' + (SVGData.label.x) + ',' + (SVGData.label.y) + ')'}>
                    <rect x="-20" width="40" y="-10" height="20" fill="black"/>
                    <text textAnchor="middle" alignmentBaseline="middle">{name}</text>
                </g>
                }
            </g>
        );
    }

    private getStatusClassName(stateObject: SectorState) {
        if (!stateObject) {
            return 'undefined';
        }

        switch (stateObject.state) {
            case SECTOR_STATE_FREE :
                if (stateObject.locked) {
                    return 'in-train-route';
                }
                return 'free';
            case SECTOR_STATE_OCCUPIED :
                return 'used';
            default:
                return 'undefined';
        }
    }
}

const mapStateToProps = (state: Store, ownProps: Props): State => {
    return {
        stateObject: getSectorState(state, ownProps.definition.id),
    };
};

const mapDispatchToProps = (dispatch): State => {
    return {
        onSectorClick: (id: number) => dispatch(sectorSelect(id)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Sector);



