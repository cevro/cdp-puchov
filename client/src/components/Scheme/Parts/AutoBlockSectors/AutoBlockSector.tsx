import * as React from 'react';
import { connect } from 'react-redux';
import { Store } from '../../../../reducers';
import { getABSectorState } from '../../../../middleware/objectState';
import { AutoBlockSectorState } from '../../../definitions/interfaces';
import { AutoBlockSectorFrontEndDefinition } from '../../../../definition/autoBlock/Pu-LpM';

interface Props {
    definition: AutoBlockSectorFrontEndDefinition;
}

interface State {
    stateObject?: AutoBlockSectorState;

    onPointClick?(id: number): void;
}

class AutoBlockSector extends React.Component<Props & State, {}> {
    public render() {
        const {
            stateObject,
            definition: {x, y},
        } = this.props;
        const active = stateObject ? stateObject.active : undefined;
        const error = stateObject ? stateObject.errorCode : undefined;
        const state = stateObject ? stateObject.state : undefined;
        const ABCondition = stateObject ? stateObject.fullBlockConditionActive : undefined;
        return (
            <g className={'AB-sector'}
               transform={'translate(' + x + ',' + y + ')'}>

                <g transform={'translate(-50,0)'}>
                    <g transform={'translate(0,-15)'}>
                        <text fill="white">active</text>
                        <circle r="5" cx={50} fill={active ? 'green' : 'gray'}/>
                    </g>
                    <g transform={'translate(0,0)'}>
                        <text fill="white">error</text>
                        <circle r="5" cx={50} className={'AB-sector-error ' + this.getErrorClassName(error)}/>
                    </g>
                    <g transform={'translate(0,15)'}>
                        <text fill="white">state</text>
                        <circle r="5" cx={50} className={'AB-sector-state ' + this.getStateClassName(state)}/>
                    </g>
                    <g transform={'translate(0,30)'}>
                        <text fill="white">AB</text>
                        <text fill="white">{ABCondition}</text>
                    </g>
                </g>
            </g>
        );
    }

    private getErrorClassName(state: number | null): string {
        if (state === undefined) {
            return 'undefined'
        }
        switch (state) {
            case -1:
                return 'undefined';
            case 0:
                return 'no-error';
            default:
                return 'has-error';

        }
    }


    private getStateClassName(state: number | null): string {
        if (state === undefined) {
            return 'undefined'
        }
        switch (state) {
            case -1:
                return 'undefined';
            case 1:
                return 'occupied';
            case 2:
                return 'free'

        }
    }

}

const mapStateToProps = (state: Store, ownProps: Props): State => {
    return {
        stateObject: getABSectorState(state, ownProps.definition.locoNetId),
    };
};

const mapDispatchToProps = (dispatch, ownProps: Props): State => {
    return {
        onPointClick: (id) => null,// dispatch(signalSelect(id)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AutoBlockSector);


