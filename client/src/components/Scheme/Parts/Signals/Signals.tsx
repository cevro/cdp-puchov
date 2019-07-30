import * as React from 'react';
import Signal from './Signal';
import {SignalSchemeDefinition} from '@definitions/signals/interfaces';

interface Props {
    signals: SignalSchemeDefinition[];
}

export default class Signals extends React.Component<Props, {}> {

    public render() {
        return (<g>
            {this.props.signals.map((signal, signalId) => {
                return <g key={signalId}>
                    <Signal definition={signal}/>
                </g>;
            })}
        </g>)
    }
}
