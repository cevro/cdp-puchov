import * as React from 'react';
import { connect } from 'react-redux';
import { Store } from '../../../../reducers';
import { PointDefinition } from '../../../definitions/Points';

interface Props {
    definition: PointDefinition;
}

interface State {
    state?: -1 | 0 | 1;
    locked?: boolean;
    //   onSignalSelect?: Function;
    //   onSignalContextMenu?: Function;
    //   signalFrom?: string;
    //   signalTo?: string;
}

class Point extends React.Component<Props & State, {}> {
    render() {
        const {
            state,
            locked,
            definition: {
                // id,
                name,
                SVGData: {x, y, rotate, home, dir},
            },
        } = this.props;
        return (
            <g className={'point ' + this.getStateClassName(state, locked)}
               transform={'translate(' + x + ',' + y + ')'}>
                <g transform={'translate(0,-10)'}>
                    <text>{name}</text>
                </g>

                <g transform={'rotate(' + rotate + ')'}>
                    <polygon points={'0,-10 10,-10 10,10 0,10'} fill="black"/>
                    {(!state || (state == home)) ? <line x1={0} x2={10} y1={0} y2={0}/> : null}
                    {(!state || (state != home)) ? <line x1={0} x2={10} y1={0} y2={(dir == 'L') ? (-6) : (6)}/> : null}

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
        state: 0,
        locked: false,
        //   signalFrom: state.routeBuilder.signalFrom,
        //    signalTo: state.routeBuilder.signalTo,
        //    state: getSignal(state.signals, ownProps.definition.id),
    };
};

const mapDispatchToProps = (dispatch, ownProps: Props): State => {
    return {
        //  onSignalSelect: (id) => dispatch(signalSelect(id)),
        //   onSignalContextMenu: (data) => dispatch(onSignalContextMenu(data)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Point);


