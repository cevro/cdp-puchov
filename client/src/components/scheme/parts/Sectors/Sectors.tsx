import * as React from 'react';
import { connect } from 'react-redux';
import Sector from './Sector';
import { sectors } from '../../../definitions/Sectors';

interface State {
    sectors?: any;
}

class Sectors extends React.Component<State, {}> {

    render() {
        return (<g>
            {sectors.map((sector, id) => {
                return <g key={id}>
                    <Sector definition={sector}/>
                </g>;
            })}
        </g>)
    }
}

const mapStateToProps = (state): State => {
    return {
        sectors: state.sectors,
    };
};

export default connect(mapStateToProps, null)(Sectors);
