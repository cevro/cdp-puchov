import * as React from 'react';
import {connect} from 'react-redux';
import {Store} from '@app/reducers';

interface State {
    locoNetConnector?: any;
}

class LocoNetConnector extends React.Component<State, {}> {
    public render() {
        const {locoNetConnector} = this.props;

        return (<div className="list-group list-scroll">
            {locoNetConnector.avaiablePorts.map(()=>{})}
        </div>)
    }
}

const mapStateToProps = (state: Store): State => {
    return {
      //  locoNetConnector: state.objectState.locoNetConnector,
    };
};

export default connect(mapStateToProps, null)(LocoNetConnector);
