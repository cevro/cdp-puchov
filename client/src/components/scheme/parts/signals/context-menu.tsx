import * as React from 'react';
import {connect} from 'react-redux';

interface IProps {
    x?: number;
    y?: number;
    active?: boolean;
    signal?: any;
}

class ContextMenu extends React.Component<IProps, void> {
    render() {
        /*let {name, status, busy} = this.props;
         let data = this.getData(name);
         const selected = true;
         return (
         <g
         transform={'translate(' + data.x + ',' + data.y + ')'}
         onContextMenu={() => {

         }}
         >
         <g transform={'translate(0,-10)'}>
         <text>{name}--{status}</text>
         </g>
         <polygon
         className={(busy ? 'busy' : 'free') + ' ' + (selected ? 'selected' : '')}
         transform={'rotate(' + data.rotate + ')'}
         points="0,5 0,-5 5,0"
         fill={
         (status === 0) ? 'red' : ((status === undefined || status === 13 || status === 5) ? 'yellow' : 'green')
         }
         />
         </g>
         );*/
        return null;
    }


}

const mapStateToProps = (state, ownProps: IProps) => {
    return {...ownProps};
};

const mapDispatchToProps = (dispatch, ownProps: IProps) => {
    return {
        ...ownProps,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContextMenu);
