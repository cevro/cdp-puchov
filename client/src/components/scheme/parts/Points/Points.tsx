import * as React from 'react';
import { connect } from 'react-redux';
import Point from './Point';
import { points as PointDefinitions } from '../../../definitions/Points';

interface State {
    points?: any;
}

class Points extends React.Component<State, {}> {

    render() {

        return (<g>
            {PointDefinitions.map((signal, signalId) => {
                return <g key={signalId}>
                    <Point definition={signal}/>
                </g>;
            })}
        </g>)
    }
}

const mapStateToProps = (state): State => {
    return {
        //   points: state.points,
    };
};

export default connect(mapStateToProps, null)(Points);
