import * as React from 'react';
import { connect } from 'react-redux';
import Signal from './Signal';
import { Signals as SignalDefs } from '../../../definitions/Signals';

interface Props {
    signals?: any;
}

class Signals extends React.Component<Props, {}> {

    render() {

        return (<g>
            {SignalDefs.map((signal, signalId) => {
                return <g key={signalId}>
                    <Signal definition={signal}/>
                </g>;
            })}
        </g>)
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        ...ownProps,
        signals: state.signals,
    };
};

export default connect(mapStateToProps, null)(Signals);
