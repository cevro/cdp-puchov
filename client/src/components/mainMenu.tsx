import * as React from 'react';

export default class MainMenu extends React.Component<{}, {}> {
    public render() {
        return <div>
            <ul>
                <li>
                    <a href="#/pu">ZST Púchov</a>
                </li>
                <li>
                    <a href="#/ab-pu-lpm">AB PU-LpM</a>
                </li>
                <li>
                    <a href="#/full-control">full control</a>
                </li>
            </ul>
        </div>
    }
}

