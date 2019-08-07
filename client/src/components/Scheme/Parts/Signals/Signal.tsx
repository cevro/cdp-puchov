import * as React from 'react';
import {connect} from 'react-redux';
import {signalSelect} from '@app/actions/routeBuilder';
import {onSignalContextMenu} from '@app/actions/signalContextMenu';
import {signalTypes} from '@definitions/signals/signalTypes';
import {Store} from '@app/reducers';
import {getSignalState} from '@app/middleware/objectState';
import {
    Action,
    Dispatch,
} from 'redux';
import {SignalState} from '@definitions/interfaces';
import {SignalSchemeDefinition} from '@definitions/signals/interfaces';

interface Props {
    definition: SignalSchemeDefinition;
}

interface State {
    stateObject?: SignalState;
    displayLabel?: boolean;

    onSignalSelect?(id: number): void;

    onSignalContextMenu?(id: number, coordinates: { x: number, y: number }): void;
}

class Signal extends React.Component<Props & State, {}> {
    public render() {
        const {
            stateObject,
            onSignalSelect,
            onSignalContextMenu,
            displayLabel,
            definition: {
                locoNetId,
                name,
                type,
                SVGData: {x, y, rotate},
            },
        } = this.props;
        const state = stateObject ? stateObject.displayAspect : undefined;
        return (
            <g
                className={'signal signal-type-' + type + ' ' + this.getStateClassName(state)}
                transform={'translate(' + x + ',' + y + ')'}
                onClick={() => {
                    onSignalSelect(locoNetId);
                }}
                onContextMenu={(event) => {
                    event.preventDefault();
                    onSignalContextMenu(locoNetId, {x: event.pageX, y: event.pageY});
                    return false;
                }}
            >
                {displayLabel && (<g transform={'translate(0,-10)'}>
                    <text>{name}</text>
                </g>)}
                {this.getIconByType(type, rotate)}
            </g>
        );
    }

    private getIconByType(type: number, rotate: number): JSX.Element {
        switch (type) {
            case signalTypes.TYPE_SHUNT:
                return <polyline
                    points="0,7 7,0 0,-7"
                    transform={'rotate(' + rotate + ')'}
                />;
            case signalTypes.TYPE_AB:
                return <>
                    <polyline
                        points="0,7 7,0 0,-7"
                        transform={'rotate(' + rotate + ')'}
                    />
                    <polyline
                        points="-4,7 3,0 -4,-7"
                        transform={'rotate(' + rotate + ')'}
                    />
                </>;
            default:
                return <polygon
                    transform={'rotate(' + rotate + ')'}
                    points="0,10 10,0 0,-10"
                />;
        }
    }

    private getStateClassName(state: number): string {
        if (state === undefined || state === -1) {
            return 'state-undefined';
        }
        switch (state) {
            case 0:
                return 'state-not-allowed';
            case 13:
                return 'state-off';
            case 5:
                return 'state-lockout';
            case 9:
            case 10:
                return 'state-shift';
            default:
                return 'state-allowed';
        }
    }
}

const mapStateToProps = (state: Store, ownProps: Props): State => {
    return {
        stateObject: getSignalState(state, ownProps.definition.locoNetId),
        displayLabel: !!state.displayOptions.signals[ownProps.definition.type],
    };
};

const mapDispatchToProps = (dispatch: Dispatch<Action<string>>): State => {
    return {
        onSignalSelect: (id: number) => dispatch(signalSelect(id)),
        onSignalContextMenu: (id: number, coordinates: { x: number, y: number }) => dispatch(onSignalContextMenu(id, coordinates)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signal);


