import * as React from 'react';
import BiDirAB from './BiDirAB';
import { BiDirABDefinition } from '@app/definition/all';

interface Props {
    ABs: BiDirABDefinition[];
}

export default class BiDirABs extends React.Component<Props, {}> {

    public render() {

        return (<g>
            {this.props.ABs.map((sector, key) => {
                return <g key={key}>
                    <BiDirAB definition={sector}/>
                </g>;
            })}
        </g>)
    }
}
