import * as React from 'react';
import { SectorDefinition } from '../../../definitions/Sectors';
import { Store } from '../../../../reducers';
import { connect } from 'react-redux';
import { getSectorState } from '../../../../middleware/objectState';
import { SectorState } from '../../../definitions/interfaces';
import { sectorSelect } from '../../../../actions/routeBuilder';

const STATUS_FREE = 1;
const STATUS_BUSY = 0;

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
            <g className={'sector ' + this.getStatusClassname(stateObject)} onClick={() => {
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

    private getStatusClassname(stateObject: SectorState) {
        if (!stateObject) {
            return 'undefined';
        }

        switch (stateObject.state) {
            case STATUS_FREE :
                if (stateObject.locked) {
                    return 'in-train-route';
                }
                return 'free';
            case STATUS_BUSY :
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



