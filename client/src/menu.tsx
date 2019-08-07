import * as React from 'react';

export default class Menu extends React.Component<{}, {}> {

    public render() {
        const items = ['/full-control', '/ab-pu-lpm', '/pu'];
        return <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-3">
            <a className="navbar-brand" href="#">CDP</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent">
                <span className="navbar-toggler-icon"/>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    {items.map((value, index) => {
                        return <li key={index} className="nav-item">
                            <a className="nav-link" href={'#' + value}>{value}</a>
                        </li>;
                    })}
                </ul>
            </div>
        </nav>;
    }
}
