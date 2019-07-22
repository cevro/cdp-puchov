import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';

interface State {
    route: string;
}

class Main extends React.Component<{}, State> {
    constructor(props) {
        super(props);
        this.state = {
            route: window.location.hash.substr(1),
        }
    }

    public componentDidMount() {
        window.addEventListener('hashchange', () => {
            this.setState({
                route: window.location.hash.substr(1),
            })
        })
    }

    public render() {
        let accessKey;
        switch (this.state.route) {
            case '/ab-pu-lpm':
                accessKey = 'ab-PuLpM';
                break;
            default:
            case '/pu':
                accessKey = 'ZSTPu';
                break;
        }

        return (
            <App accessKey={accessKey}/>
        )
    }
}

ReactDOM.render(<Main/>, document.getElementsByTagName('main')[0]);
