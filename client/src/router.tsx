import * as React from 'react';
import App from './App';
import FullControl from './components/fullControl/';
import MainMenu from './components/mainMenu';

interface State {
    route: string;
}

export default class Router extends React.Component<{}, State> {
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
            case '/full-control':
                return <FullControl/>;
            case '/ab-pu-lpm':
                accessKey = 'ab-PuLpM';
                break;

            case '/pu':
                accessKey = 'ZSTPu';
                break;
            default:
                return <MainMenu/>;
        }
        return (
            <App accessKey={accessKey}/>
        )
    }
}

