import * as React from 'react';
import {connect} from 'react-redux';
import Signal from './signal';

interface IProps {
    signals?: any;
}

class Signals extends React.Component<IProps, void> {

    render() {
        const {signals} = this.props;
        const objects = [];
        for (let signalID in signals) {
            if (signals.hasOwnProperty(signalID)) {
                objects.push(<g key={signalID}>
                    <Signal {...signals[signalID]}/>
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
        signals: state.signals,
    };
};

export default connect(mapStateToProps, null)(Signals);
