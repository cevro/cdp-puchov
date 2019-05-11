import * as React from 'react';
import { connect } from 'react-redux';
import { signalSelect } from '../../../../actions/routeBuilder';
import { onSignalContextMenu } from '../../../../actions/signalContextMenu';
import { SignalDefinition } from '../../../definitions/Signals';
import { Store } from '../../../../reducers';
import { getSignal } from '../../../../middleware/signal';

interface Props {
    definition: SignalDefinition;
}

interface State {
    state?: number;
    busy?: boolean;
    onSignalSelect?: (id: number) => void;
    onSignalContextMenu?: (id: number) => void;
    signalFrom?: string;
    signalTo?: string;
    displayLabel?: boolean;
}

class Signal extends React.Component<Props & State, {}> {
    public render() {
        const {
            state,
            busy,
            onSignalSelect,
            signalFrom,
            signalTo,
            onSignalContextMenu,
            displayLabel,
            definition: {
                id,
                name,
                type,
                SVGData: {x, y, rotate},
            },
        } = this.props;
        return (
            <g
                className={'signal signal-type-' + type + ' ' + this.getStateClassName(state)}
                transform={'translate(' + x + ',' + y + ')'}
                onClick={() => {
                    onSignalSelect(id);
                }}
                onContextMenu={(event) => {
                    event.preventDefault();
                    onSignalContextMenu(id);
                    return false;
                }}
            >
                {displayLabel && (<g transform={'translate(0,-10)'}>
                    <text>{name}</text>
                </g>)}
                <polygon
                    className={(busy ? 'busy' : 'free') + ' ' + ((signalFrom === name || signalTo === name) ? 'selected' : '')}
                    transform={'rotate(' + rotate + ')'}
                    points="0,8 0,-8 8,0"
                />
            </g>
        );
    }

    private getStateClassName(state: number | null): string {
        if (state === 0) {
            return 'state-not-allowed';
        }
        if (!state) {
            return 'state-undefined';
        }
        if (state === 13 || state === 5) {
            return 'state-lockout';
        }
        return 'state-allowed';

    }
}

const mapStateToProps = (state: Store, ownProps: Props): State => {

    return {
        signalFrom: state.routeBuilder.signalFrom,
        signalTo: state.routeBuilder.signalTo,
        state: getSignal(state.signals, ownProps.definition.id),
        displayLabel: !!state.displayOptions.signals[ownProps.definition.type],
    };
};

const mapDispatchToProps = (dispatch): State => {
    return {
        onSignalSelect: (id: number) => dispatch(signalSelect(id)),
        onSignalContextMenu: (id: number) => dispatch(onSignalContextMenu(id)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signal);


