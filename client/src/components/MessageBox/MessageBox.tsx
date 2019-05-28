import * as React from 'react';
import { connect } from 'react-redux';
import { Message } from '../definitions/interfaces';

interface State {
    messages?: Message[];
}

class MessageBox extends React.Component<State, {}> {
    public render() {
        const {messages} = this.props;
        const msgs = messages.map((message, index) => {
            let {entity, action, date, data, id} = message;

            return (<div className="text text-white" key={index}>
                [{(new Date(date)).toISOString()}]:
                {action}-
                {entity}-
                {id}
            </div>);
        });
        return (
            <div>
                {msgs}
            </div>
        )
    }
}

const mapStateToProps = (state): State => {
    return {
        messages: state.messages,
    };
};

export default connect(mapStateToProps, null)(MessageBox);
