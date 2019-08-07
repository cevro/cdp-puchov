import * as React from 'react';
import SignalChange from './signalChange';
import Icon from '@app/components/Scheme/Parts/Signals/ContextMenu/Icon';
import {signalStateMapping} from '@app/middleware/signal';
import {signalTypes} from '@definitions/signals/signalTypes';
import {SignalState} from '@definitions/interfaces';
import {SignalDefinition} from '@definitions/signals/interfaces';

interface Props {
    signalDef: SignalDefinition;
    signalState: SignalState;
}

export default class Row extends React.Component<Props, {}> {
    public render() {
        const {signalDef, signalState} = this.props;
        const displayState = signalState ? signalState.displayAspect : undefined;
        const requestedState = signalState ? signalState.requestedAspect : undefined;
        return <>
            <td>
                <div className="col-12 text-center">
                    <h1>
                        <span className={'badge signal-badge-' + signalDef.type}>{signalDef.name}</span>
                    </h1>
                </div>
                <hr/>
                <div className="col-12 row">
                    <span className="col-3">locoNetId: {signalDef.locoNetId}</span>
                    <span className="col-3">name: {signalDef.name}</span>
                    <span className="col-3">conf: {signalDef.lights.join(' ')}</span>
                    <span className="col-3">type: {signalTypes.getLabel(signalDef.type)}</span>
                </div>
                <hr/>
                <div className="col-12 row">
                    <span className="col-4">display: ({displayState}) {signalStateMapping(displayState)}</span>
                    <span
                        className="col-4">requested: ({requestedState}) {signalStateMapping(requestedState)}</span>
                    <span className="col-4">
                            <SignalChange
                                locoNetId={signalDef.locoNetId}
                                signalState={signalState}/>
                        </span>
                </div>
            </td>
            <td>
                <Icon signal={signalDef} state={displayState}/>
            </td>
        </>;
    }
}

