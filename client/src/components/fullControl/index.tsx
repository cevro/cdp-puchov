import * as React from 'react';
import SignalsTable from './signals/';
import TurnoutsTable from './turnouts/'

type Tabs = 'signals' | 'turnouts';

interface InnerState {
    tab: Tabs;
}

interface TabItem {
    id: Tabs,
    component: React.ComponentClass,
    label: string,
}

export default class Index extends React.Component<{}, InnerState> {
    public constructor(props) {
        super(props);
        this.state = {tab: 'signals'};
    }

    public render() {
        const components: TabItem[] = [
            {
                id: 'signals',
                component: SignalsTable,
                label: 'Signals',
            },
            {
                id: 'turnouts',
                component: TurnoutsTable,
                label: 'Points',
            },
        ];
        return (
            <div className="container">
                <ul className="nav nav-tabs">
                    {components.map((value, index) => {
                        return <li key={index} className="nav-item">
                            <button
                                className={'btn nav-link btn-link ' + (this.state.tab === value.id ? 'active' : '')}
                                onClick={(e) => {
                                    e.preventDefault();
                                    this.setState({tab: value.id});
                                }}
                            >{value.label}
                            </button>
                        </li>
                    })}
                </ul>
                <div className="tab-content">
                    {components.map((value, index) => {
                        return <div key={index}
                                    className={'tab-pane fade ' + (this.state.tab === value.id ? 'show active' : '')}>
                            {React.createElement(value.component)}
                        </div>
                    })}
                </div>
            </div>
        );
    }
}
