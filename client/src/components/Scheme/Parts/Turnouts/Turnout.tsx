import * as React from 'react';
import {connect} from 'react-redux';
import {Store} from '@app/reducers';
import {getTurnoutState} from '@app/middleware/objectState';
import {TurnoutDefinition} from "@definitions/points";
import {TurnoutMessages} from "@definitions/messages/turnout";

interface Props {
    definition: TurnoutDefinition;
}

interface State {
    stateObject?: TurnoutMessages.StateUpdateData;
    displayLabel?: boolean;

    onTurnoutClick?(id: number): void;
}

class Turnout extends React.Component<Props & State, {}> {
    public render() {
        const {
            stateObject,
            displayLabel,
            definition: {
                name,
                SVGData: {x, y, rotate, home, dir},
            },
        } = this.props;
        const position = stateObject ? stateObject.position : undefined;
        const requestedState = stateObject ? stateObject.requestedPosition : undefined;
        const locked = stateObject ? stateObject.locked : [];
        return (
            <g className={'point ' + this.getStateClassName(position, !!locked.length, (requestedState !== position))}
               transform={'translate(' + x + ',' + y + ')'}>
                {displayLabel && <g transform={'translate(0,-10)'}>
                    <text>{name}</text>
                </g>}

                <g transform={'rotate(' + rotate + ')'}>
                    <polygon points={'0,-10 10,-10 10,10 0,10'} fill="black"/>
                    {(!position || (position === home)) ? <line x1={0} x2={10} y1={0} y2={0}/> : null}
                    {(!position || (position !== home)) ?
                        <line x1={0} x2={10} y1={0} y2={(dir === 'L') ? (-6) : (6)}/> : null}

                </g>
            </g>
        );
    }

    private getStateClassName(state: number | null, lock: boolean, changing: boolean): string {
        if (changing) {
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
        stateObject: getTurnoutState(state, ownProps.definition.locoNetId),
        displayLabel: state.displayOptions.points,
    };
};

const mapDispatchToProps = (dispatch, ownProps: Props): State => {
    return {
        onTurnoutClick: (id) => null,// dispatch(signalSelect(id)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Turnout);


