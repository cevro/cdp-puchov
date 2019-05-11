import * as React from 'react';
import Signal from './Signal';
import { signals } from '../../../definitions/Signals';

export default class Signals extends React.Component<{}, {}> {

    public render() {
        return (<g>
            {signals.map((signal, signalId) => {
                return <g key={signalId}>
                    <Signal definition={signal}/>
                </g>;
            })}
        </g>)
    }
}
