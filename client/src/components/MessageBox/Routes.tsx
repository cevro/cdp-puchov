import * as React from 'react';
import {connect} from 'react-redux';
import {
    Action,
    Dispatch,
} from 'redux';
import {clearSelect} from '@app/actions/routeBuilder';
import RouteFinder from '../RouteFinder';
import RouteBuilder from '../RouteBuilder';
import {Store} from '@app/reducers';

interface State {
    availableRoutes?: any[];

    onClearSelect?(): void;
}

class Routes extends React.Component<State, {}> {
    public componentDidUpdate() {

    }

    public render() {

        const {availableRoutes, onClearSelect} = this.props;
        return <>
            {availableRoutes.length ? <RouteBuilder/> : <RouteFinder/>}
            <button onClick={() => {
                onClearSelect()
            }} className="btn btn-warning">Clear
            </button>
        </>
    }
}

const mapDispatchToProps = (dispatch: Dispatch<Action<string>>): State => {
    return {
        onClearSelect: () => dispatch(clearSelect()),
    };
};

const mapStateToProps = (store: Store): State => {
    return {
        availableRoutes: store.routeBuilder.availableRoutes,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Routes);
