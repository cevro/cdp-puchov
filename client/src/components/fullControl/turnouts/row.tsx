import * as React from 'react';
import {TurnoutDefinition} from '@definitions/points';
import {TurnoutMessages} from '@definitions/messages/turnout';
import TurnoutChange from './turnoutChange';

interface Props {
    turnoutDef: TurnoutDefinition;
    turnoutState: TurnoutMessages.StateUpdateData;
}

export default class Row extends React.Component<Props, {}> {
    public render() {
        const {turnoutDef, turnoutState} = this.props;
        const position = turnoutState ? turnoutState.position : undefined;
        const requestedPosition = turnoutState ? turnoutState.requestedPosition : undefined;
        const locked = turnoutState ? turnoutState.locked : [];
        return <tr>
            <td>

                <div className="col-12 text-center">
                    <h1>
                        <span>{turnoutDef.name}</span>
                    </h1>
                </div>
                <hr/>
                <div className="col-12 row">
                    <span className="col-3">locoNetId: {turnoutDef.locoNetId}</span>
                    <span className="col-3">sector: {turnoutDef.sector}</span>
                    <span className="col-3">position: {position}</span>
                    <span className="col-3">requested position: {requestedPosition}</span>
                    <span className="col-12">{locked.join(' ')}</span>
                </div>
                <hr/>
                <TurnoutChange locoNetId={turnoutDef.locoNetId} turnoutState={turnoutState}/>
            </td>

        </tr>;
    }

    /* <td>
     <svg>
         {this.getTurnoutIcon()}
     </svg>
 </td>*/

    public getTurnoutIcon(): JSX.Element {
        const {
            turnoutState,
            turnoutDef: {
                SVGData: {x, y, rotate, home, dir},
            },
        } = this.props;
        const position = turnoutState ? turnoutState.position : undefined;
        const requestedState = turnoutState ? turnoutState.requestedPosition : undefined;
        const locked = turnoutState ? turnoutState.locked : [];
        return (
            <g className={'point ' + this.getStateClassName(position, !!locked.length, (requestedState !== position))}
               transform={'translate(' + x + ',' + y + ')'}>
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

    // <span className="col-3">name: {signalDef.name}</span>
    //                     <span className="col-3">conf: {signalDef.lights.join(' ')}</span>
    //                     <span className="col-3">type: {SignalTypes.getLabel(signalDef.type)}</span>

    // <div className="col-12 row">
    //                     <span className="col-4">display: ({displayState}) {signalStateMapping(displayState)}</span>
    //                     <span
    //                         className="col-4">requested: ({requestedState}) {signalStateMapping(requestedState)}</span>
    //                     <span className="col-4">
    //                             <SignalChange
    //                                 locoNetId={signalDef.locoNetId}
    //                                 signalState={signalState}/>
    //                         </span>
    //                 </div>

    // <Icon signal={signalDef} state={displayState}/>
}

