import * as React from 'react';
import AutoBlockSector from './AutoBlockSector';
import { AutoBlockSectorFrontEndDefinition } from '../../../../definition/autoBlock/Pu-LpM';

interface Props {
    autoBlockSectors: AutoBlockSectorFrontEndDefinition[];
}

export default class ABSectors extends React.Component<Props, {}> {

    public render() {

        return (<g>
            {this.props.autoBlockSectors.map((sector, key) => {
                return <g key={key}>
                    <AutoBlockSector definition={sector}/>
                </g>;
            })}
        </g>)
    }
}
