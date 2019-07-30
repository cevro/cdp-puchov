import * as React from 'react';
import {connect} from 'react-redux';
import {Store} from '@app/reducers';
import {Message} from "@definitions/messages";

interface State {
    messages?: Message[];
}

class MessageBox extends React.Component<State, {}> {
    public render() {
        const {messages} = this.props;
        const msgs = messages.map((message, index) => {
            let {entity, action, id} = message;
            const dateObject = new Date();
            return (<div className="list-group-item" key={index}>
                <div className="row">
                    <small
                        className="col-3">{dateObject.getHours()}:
                        {dateObject.getMinutes()}:
                        {dateObject.getSeconds()}.
                        {dateObject.getMilliseconds()}
                    </small>
                    <span className="col-2">{action}</span>
                    <span className="col-3">{entity}</span>
                    <span className="col-2">{id}</span>
                </div>
            </div>);
        });
        return (<div className="list-group list-scroll">


            {msgs}
        </div>)
    }
}

// <LocoNetConnector/>

const mapStateToProps = (state: Store): State => {
    return {
        messages: state.messages,
    };
};

export default connect(mapStateToProps, null)(MessageBox);
