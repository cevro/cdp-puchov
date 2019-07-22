import * as React from 'react';
import {ABSectorsState} from '../../../reducers/objectState';
import {AutoBlockSectorFrontEndDefinition} from '../../../definition/autoBlock/Pu-LpM';
import {Store} from '../../../reducers';
import {connect} from 'react-redux';
import Row from "./Row";

interface State {
    ABSectorsState?: ABSectorsState;
}

interface Props {
    ABSectors: AutoBlockSectorFrontEndDefinition[];
}

interface InnerState {
    displayOnlyInterest: boolean;
}

class Index extends React.Component<State & Props, InnerState> {
    constructor(props) {
        super(props);
        this.state = {
            displayOnlyInterest: false,
        };
    }

    public render() {
        const {ABSectors, ABSectorsState} = this.props;

        return (
            <div className="list-group list-scroll">
                <div className="list-group-item">
                    <button className={'btn btn-secondary'} onClick={() => {
                        this.setState({displayOnlyInterest: !this.state.displayOnlyInterest});
                    }}>{this.state.displayOnlyInterest ? 'Display all' : 'Display only interest'}</button>
                </div>
                {ABSectors.map((sectorDef, index) => {
                    const stateObject = ABSectorsState[sectorDef.locoNetId];
                    return <Row key={index}
                                definition={sectorDef}
                                displayOnlyInterest={false}
                                objectState={stateObject}/>
                })}
            </div>
        );
    }

}

const mapStateToProps = (state: Store): State => {
    return {
        ABSectorsState: state.objectState.ABSectors,
    };
};
const mapDispatchToProps = (): State => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
