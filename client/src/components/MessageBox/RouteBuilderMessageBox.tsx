import * as React from 'react';
import { connect } from 'react-redux';
import {
    Action,
    Dispatch,
} from 'redux';
import { Store } from '../../reducers';
import { TrainRouteBufferItem } from '../definitions/interfaces';

interface State {
    trainRouteBuffer?: TrainRouteBufferItem[];
}

class RouteBuilderMessageBox extends React.Component<State, {}> {

    public render() {

        return (<div>
            {this.props.trainRouteBuffer.map((bufferItem) => {
                return <div>
                    <small>{bufferItem.id}</small>
                    <span className="mx-1">{bufferItem.name}</span>
                    <span className={this.getClassNameByState(bufferItem.state)}>{bufferItem.state}</span>
                </div>
            })}
        </div>);
    }

    private getClassNameByState(state: string): string {
        switch (state) {
            case 'waiting':
                return 'badge badge-secondary';
            case 'built':
                return 'badge badge-success';
            case 'building':
                return 'badge badge-warning';
            default:
                return 'badge';
        }
    }
}

const mapDispatchToProps = (dispatch: Dispatch<Action<string>>): State => {
    return {};
};

const mapStateToProps = (store: Store): State => {
    return {
        trainRouteBuffer: store.objectState.trainRouteBuffer,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(RouteBuilderMessageBox);
