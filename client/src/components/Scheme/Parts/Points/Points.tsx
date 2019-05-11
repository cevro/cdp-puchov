import * as React from 'react';
import Point from './Point';
import { points } from '../../../definitions/Points';

export default class Points extends React.Component<{}, {}> {

    public render() {

        return (<g>
            {points.map((signal, signalId) => {
                return <g key={signalId}>
                    <Point definition={signal}/>
                </g>;
            })}
        </g>)
    }
}
