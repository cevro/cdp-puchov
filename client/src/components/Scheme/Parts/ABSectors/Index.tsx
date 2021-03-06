import * as React from 'react';
import AutoBlockSector from './ABSector';
import { AutoBlockSectorFrontEndDefinition } from '@app/definition/autoBlock/Pu-LpM';

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
