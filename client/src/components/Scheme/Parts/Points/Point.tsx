import * as React from 'react';
import { connect } from 'react-redux';
import { Store } from '../../../../reducers';
import {
    PointDefinition,
    pointPosition,
} from '../../../definitions/Points';
import { getPointState } from '../../../../middleware/signal';

interface Props {
    definition: PointDefinition;
}

interface State {
    state?: pointPosition;
    locked?: boolean;
    onPointClick?: (id: number) => void;
    displayLabel?: boolean;
}

class Point extends React.Component<Props & State, {}> {
    public render() {
        const {
            state,
            locked,
            displayLabel,
            definition: {
                // id,
                name,
                SVGData: {x, y, rotate, home, dir},
            },
        } = this.props;
        return (
            <g className={'point ' + this.getStateClassName(state, locked)}
               transform={'translate(' + x + ',' + y + ')'}>
                {displayLabel && <g transform={'translate(0,-10)'}>
                    <text>{name}</text>
                </g>}

                <g transform={'rotate(' + rotate + ')'}>
                    <polygon points={'0,-10 10,-10 10,10 0,10'} fill="black"/>
                    {(!state || (state === home)) ? <line x1={0} x2={10} y1={0} y2={0}/> : null}
                    {(!state || (state !== home)) ?
                        <line x1={0} x2={10} y1={0} y2={(dir === 'L') ? (-6) : (6)}/> : null}

                </g>
            </g>
        );
    }

    private getStateClassName(state: number | null, lock: boolean): string {
        if (state === 0) {
            return 'changing';
        }
        if (!state) {
            return 'undefined';
        }
        if (lock) {
            return 'locked';
        }
        return 'not-locked';
    }

}

const mapStateToProps = (state: Store, ownProps: Props): State => {
    return {
        ...getPointState(state, ownProps.definition.id),
        displayLabel: state.displayOptions.points,
    };
};

const mapDispatchToProps = (dispatch, ownProps: Props): State => {
    return {
        onPointClick: (id) => null,// dispatch(signalSelect(id)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Point);


