import * as React from 'react';
import {connect} from 'react-redux';

interface IProps {
    messages?: Array<any>;
}

class Box extends React.Component<IProps, {}> {
    render() {
        const {messages} = this.props;
        const msgs = messages.map((message, index) => {
            let {text, lvl} = message;
            let className = 'info';
            switch (lvl) {
                case -1:
                    className = 'danger';
                    break;
                case 0:
                    className = 'info';
                    break;
                case 1:
                    className = 'success';
                    break;
                case 2:
                    className = 'warning';
                    break;

            }
            return (<div className={'alert alert-' + className} key={index}>
                {text}
            </div>);
        });
        return (
            <div>
                {msgs}
            </div>
        )
    }
}
const mapStateToProps = (state, onwProps) => {
    return {
        ...onwProps,
        messages: state.messages,
    };
};

export default connect(mapStateToProps)(Box);
