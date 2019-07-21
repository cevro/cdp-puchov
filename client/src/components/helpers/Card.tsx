import * as React from 'react';

interface Props {
    name: string | JSX.Element;
}

export default class Card extends React.Component<Props, {}> {

    public render() {

        return (
            <div className="card bg-black border-light">
                <div className="card-header">
                    <h5>{this.props.name}</h5>
                </div>
                {this.props.children}
            </div>

        );
    }
}
