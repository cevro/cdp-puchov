import * as React from 'react';
import { connect } from 'react-redux';
import {
    Action,
    Dispatch,
} from 'redux';
import { Store } from '../reducers';
import { buildRoute } from '../actions/routeBuilder';
import { BuildOptions } from './definitions/interfaces';

interface State {
    onBuildRoute?: (id: number, buildOptions: any) => void;
    availableRoutes?: any[];
    startSignal?: number;
    endSector?: number;
}

class RouteBuilder extends React.Component<State, BuildOptions> {
    constructor(props) {
        super(props);
        this.state = {
            40: false,
            PN: false,
            alert: false,
        };
    }

    public render() {

        const {onBuildRoute, availableRoutes} = this.props;

        /* const objects = ;*/

        return (<div className="list-group">
            {
                availableRoutes.map((route) => {

                    return (<div className="list-group-item">
                            <h6>{route.name}</h6>
                            <div className="form-check">
                                <input
                                    checked={this.state.PN}
                                    type="checkbox"
                                    disabled={this.state[40] || this.state.alert}
                                    onChange={(event) => {
                                        this.setState({
                                            PN: !!event.target.checked,
                                            40: false,
                                            alert: false,
                                        });
                                    }}
                                />
                                <label>PN</label>
                            </div>
                            <div className="form-check">
                                <input
                                    checked={this.state[40]}
                                    disabled={this.state.PN}
                                    type="checkbox"
                                    onChange={(event) => {
                                        this.setState({
                                            PN: false,
                                            40: !!event.target.checked,
                                        });
                                    }}/>
                                <label>40km/h</label>
                            </div>
                            <div className="form-check">
                                <input
                                    checked={this.state.alert}
                                    disabled={this.state.PN}
                                    type="checkbox"
                                    onChange={(event) => {
                                        this.setState({
                                            PN: false,
                                            alert: !!event.target.checked,
                                        });
                                    }}/>
                                <label>Trvale výstraha</label>
                            </div>
                            <button onClick={() => {
                                const state = this.state;
                                onBuildRoute(route.id, {
                                    ...state,
                                });
                            }} className="col-6 btn btn-success">Build
                            </button>

                        </div>
                    );
                })
            }
        </div>);
    }
}

const mapDispatchToProps = (dispatch: Dispatch<Action<string>>): State => {
    return {
        onBuildRoute: (id: number, buildOptions: BuildOptions) => buildRoute(dispatch, id, buildOptions),
    }
        ;
};

const mapStateToProps = (state: Store): State => {
    return {
        availableRoutes: state.routeBuilder.availableRoutes,
        startSignal: state.routeBuilder.startSignalId,
        endSector: state.routeBuilder.endSectorId,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(RouteBuilder);
