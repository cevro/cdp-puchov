import * as React from 'react';
import Sector from './Sector';
import { sectors } from '../../../definitions/Sectors';

export default class Sectors extends React.Component<{}, {}> {

    public render() {
        return (<g>
            {sectors.map((sector, id) => {
                return <g key={id}>
                    <Sector definition={sector}/>
                </g>;
            })}
        </g>)
    }
}
