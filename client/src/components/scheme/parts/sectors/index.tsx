import * as React from 'react';
import {connect} from 'react-redux';
import Sector from './sector';

interface IProps {
    sectors?: any;
}

class Sectors extends React.Component<IProps, void> {

    render() {
        const {sectors} = this.props;
        const objects = [];
        for (let sectorID in sectors) {
            if(sectors.hasOwnProperty(sectorID)){
                objects.push(<g key={sectorID}>
                    <Sector {...sectors[sectorID]}/>
                </g>);
            }
        }
        return (<g>
            {objects}
        </g>)
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        ...ownProps,
        sectors: state.sectors,
    };
};

export default connect(mapStateToProps, null)(Sectors);
