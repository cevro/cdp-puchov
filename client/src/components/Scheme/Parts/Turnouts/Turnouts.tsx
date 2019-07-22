import * as React from 'react';
import Turnout from './Turnout';
import { TurnoutDefinition } from '../../../definitions/Points';

interface Props {
    points: TurnoutDefinition[];
}

export default class Turnouts extends React.Component<Props, {}> {

    public render() {

        return (<g>
            {this.props.points.map((signal, signalId) => {
                return <g key={signalId}>
                    <Turnout definition={signal}/>
                </g>;
            })}
        </g>)
    }
}
