import * as React from 'react';
import Sector from './Sector';
import { SectorDefinition } from '@definitions/sectors';

interface Props {
    sectors: SectorDefinition[];
}

export default class Sectors extends React.Component<Props, {}> {

    public render() {
        const {sectors} = this.props;
        return (<g>
            {sectors.map((sector, id) => {
                return <g key={id}>
                    <Sector definition={sector}/>
                </g>;
            })}
        </g>)
    }
}
