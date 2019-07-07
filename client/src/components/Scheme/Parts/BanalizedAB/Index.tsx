import * as React from 'react';
import BanalizedAB from './BanalizedAB';
import { BanalizedABDefinition } from '../../../../definition/all';

interface Props {
    ABs: BanalizedABDefinition[];
}

export default class BanalizedABs extends React.Component<Props, {}> {

    public render() {

        return (<g>
            {this.props.ABs.map((sector, key) => {
                return <g key={key}>
                    <BanalizedAB definition={sector}/>
                </g>;
            })}
        </g>)
    }
}
