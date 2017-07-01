import * as React from 'react';
import {connect} from 'react-redux';
import {signalSelect} from '../../../../actions/route-builder';

interface IProps {
    name: string;
    status: number;
    busy: boolean;
    onSignalSelect?: Function;
    signalFrom?: string;
    signalTo?: string;
}

class Signal extends React.Component<IProps, void> {
    render() {
        const {name, status, busy, onSignalSelect, signalFrom, signalTo} = this.props;
        const {x, y, rotate} = this.getData(name);
        return (
            <g
                transform={'translate(' + x + ',' + y + ')'}
                onClick={() => {
                    onSignalSelect(name);
                }}
            >
                <g transform={'translate(0,-10)'}>
                    <text>{name}--{status}</text>
                </g>
                <polygon
                    className={(busy ? 'busy' : 'free') + ' ' + ((signalFrom === name || signalTo === name) ? 'selected' : '')}
                    transform={'rotate(' + rotate + ')'}
                    points="0,8 0,-8 8,0"
                    fill={
                        (status === 0) ? 'red' : ((status === undefined || status === 13 || status === 5) ? 'yellow' : 'green')
                    }
                />
            </g>
        );
    }


    private getData(name: string) {
        switch (name) {
            case "2S":
                return {rotate: 0, x: "100", y: "200"};
            case "1S":
                return {rotate: 0, x: "50", y: "250"};
            case "1L":
                return {rotate: 180, x: "500", y: "250"};
            case "2L":
                return {rotate: 180, x: "500", y: "200"};
            case'PAB-1':
                return {rotate: 0, x: "-150", y: "250"};
            case'PAB-2':
                return {rotate: 0, x: "-150", y: "200"};
            case 'AB':
                return {rotate: 0, x: "600", y: "225"};
            default:
                return {rotate: 0, x: 0, y: 0};
        }
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        ...ownProps,
        signalFrom: state.routeBuilder.signalFrom,
        signalTo: state.routeBuilder.signalTo,
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        ...ownProps,
        onSignalSelect: (id) => dispatch(signalSelect(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signal);


