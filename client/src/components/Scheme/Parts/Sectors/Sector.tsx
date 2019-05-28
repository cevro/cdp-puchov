import * as React from 'react';
import { SectorDefinition } from '../../../definitions/Sectors';
import { Store } from '../../../../reducers';
import { connect } from 'react-redux';
import { getSectorState } from '../../../../middleware/signal';

const STATUS_FREE = 1;
const STATUS_BUSY = 0;
const STATUS_IN_VC = 2;
const STATUS_IN_PC = 3;
const STATUS_VYLUKA = 4;

interface Props {
    definition: SectorDefinition;
}

interface State {
    state?: number;
}

class Sector extends React.Component<Props & State, {}> {
    public render() {
        let {definition: {SVGData}, state} = this.props;

        return (
            <g className={'sector ' + this.getStatusClassname(state)}>
                {SVGData.points.map((points, index) => {
                    return (<polyline key={index} points={points}/>)
                })}
            </g>
        );
    }

    private getStatusClassname(status) {
        switch (status) {
            case STATUS_FREE :
                return 'free';
            case STATUS_BUSY :
                return 'used';
            case STATUS_IN_VC :
                return 'in-train-route';
            case STATUS_IN_PC :
                return 'in-movement-route';
            case STATUS_VYLUKA :
                return 'lockout';
            default:
                return 'undefined';
        }
    }
}

const mapStateToProps = (state: Store, ownProps: Props): State => {
    return {
        state: getSectorState(state, ownProps.definition.id),
    };
};

const mapDispatchToProps = (dispatch): State => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Sector);



