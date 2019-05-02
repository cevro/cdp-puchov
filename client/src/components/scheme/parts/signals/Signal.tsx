import * as React from 'react';
import { connect } from 'react-redux';
import { signalSelect } from '../../../../actions/route-builder';

import { onSignalContextMenu } from '../../../../actions/signalContextMenu';
import { SignalDefinition } from '../../../definitions/Signals';
import { Store } from '../../../../reducers';
import { getSignal } from '../../../../middleware/signal';

interface IProps {
    definition: SignalDefinition;
}

interface State {
    state?: number;
    busy?: boolean;
    onSignalSelect?: Function;
    onSignalContextMenu?: Function;
    signalFrom?: string;
    signalTo?: string;
}

class Signal extends React.Component<IProps & State, {}> {
    render() {
        const {
            state,
            busy,
            onSignalSelect,
            signalFrom,
            signalTo,
            onSignalContextMenu,
            definition: {
                id,
                name,
                SVGData: {x, y, rotate},
            },
        } = this.props;
        return (
            <g
                transform={'translate(' + x + ',' + y + ')'}
                onClick={() => {
                    onSignalSelect(name);
                }}
                onContextMenu={(event) => {
                    event.preventDefault();
                    onSignalContextMenu(id);
                    return false;
                }}
            >
                <g transform={'translate(0,-10)'}>
                    <text>{name}</text>
                </g>
                <polygon
                    className={(busy ? 'busy' : 'free') + ' ' + ((signalFrom === name || signalTo === name) ? 'selected' : '')}
                    transform={'rotate(' + rotate + ')'}
                    points="0,8 0,-8 8,0"
                    fill={
                        (state === 0) ? 'red' : ((state === undefined || state === 13 || state === 5) ? 'yellow' : 'green')
                    }
                />
            </g>
        );
    }
}

const mapStateToProps = (state: Store, ownProps: IProps): State => {
    return {
        signalFrom: state.routeBuilder.signalFrom,
        signalTo: state.routeBuilder.signalTo,
        state: getSignal(state.signals, ownProps.definition.id),
    };
};

const mapDispatchToProps = (dispatch, ownProps: IProps): State => {
    return {
        onSignalSelect: (id) => dispatch(signalSelect(id)),
        onSignalContextMenu: (data) => dispatch(onSignalContextMenu(data)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signal);


