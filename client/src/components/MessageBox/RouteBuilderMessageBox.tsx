import * as React from 'react';
import {connect} from 'react-redux';
import {
    Action,
    Dispatch,
} from 'redux';
import {Store} from '@app/reducers';
import {TrainRouteDump} from '@definitions/interfaces';

interface State {
    trainRoute?: TrainRouteDump;
}

class RouteBuilderMessageBox extends React.Component<State, {}> {

    public render() {

        return (<div className="list-group list-scroll">
            <div className="list-group-item">
                <span className={this.props.trainRoute.locked ? 'fa fa-lock' : 'fa fa-unlock-alt'}/>
                {this.props.trainRoute.hasError && <>
                    <span className="badge badge-danger">Error</span>
                    <button className="btn btn-danger">Clear error</button>
                </>
                }
            </div>

            {this.props.trainRoute.buffer.map((bufferItem) => {
                return <div className="list-group-item" key={bufferItem.id}>
                    <div className="row">
                        <small className="col-3">{bufferItem.id}</small>
                        <span className="col-2">{bufferItem.name}</span>
                        <div className="col-2">
                            <span className={this.getClassNameByState(bufferItem.state)}>{bufferItem.state}</span>
                        </div>
                        <small className="col-3">{bufferItem.reason}</small>
                        <small className="col-2">
                            {bufferItem.buildOptions[40] ? '40' : null}
                            {bufferItem.buildOptions.PN ? 'PN' : null}
                            {bufferItem.buildOptions.alert ? 'alert' : null}
                        </small>
                    </div>
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
        trainRoute: store.routeBuilder.routeBuilderState,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(RouteBuilderMessageBox);
