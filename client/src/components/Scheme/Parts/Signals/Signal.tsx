import * as React from 'react';
import { connect } from 'react-redux';
import { signalSelect } from '../../../../actions/routeBuilder';
import { onSignalContextMenu } from '../../../../actions/signalContextMenu';
import {
    SignalDefinition,
    SignalTypes,
} from '../../../definitions/Signals';
import { Store } from '../../../../reducers';
import { getSignal } from '../../../../middleware/objectState';
import {
    Action,
    Dispatch,
} from 'redux';
import { SignalState } from '../../../definitions/interfaces';

interface Props {
    definition: SignalDefinition;
}

interface State {
    stateObject?: SignalState;
    onSignalSelect?: (id: number) => void;
    onSignalContextMenu?: (id: number) => void;
    displayLabel?: boolean;
}

class Signal extends React.Component<Props & State, {}> {
    public render() {
        const {
            stateObject,
            onSignalSelect,
            onSignalContextMenu,
            displayLabel,
            definition: {
                id,
                name,
                type,
                SVGData: {x, y, rotate},
            },
        } = this.props;
        const state = stateObject ? stateObject.state : undefined;
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
                {this.getIconByType(type, rotate)}
            </g>
        );
    }

    private getIconByType(type: number, rotate: number): JSX.Element {
        switch (type) {
            case SignalTypes.TYPE_SHUNT:
                return <polyline
                    points="0,7 7,0 0,-7"
                    transform={'rotate(' + rotate + ')'}
                />;
            case SignalTypes.TYPE_AUTOBLOCK:
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
        if (state === undefined) {
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
        stateObject: getSignal(state, ownProps.definition.id),
        displayLabel: !!state.displayOptions.signals[ownProps.definition.type],
    };
};

const mapDispatchToProps = (dispatch: Dispatch<Action<string>>): State => {
    return {
        onSignalSelect: (id: number) => dispatch(signalSelect(id)),
        onSignalContextMenu: (id: number) => dispatch(onSignalContextMenu(id)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signal);


