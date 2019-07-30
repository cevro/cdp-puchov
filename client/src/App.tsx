import * as React from 'react';
import MessageBox from './components/MessageBox/MessageBox';
import Options from './components/Options/Options';
import RouteBuilderMessageBox from './components/MessageBox/RouteBuilderMessageBox';
import SectorsPreview from './components/MessageBox/SectorsPreview';
import PointsPreview from './components/MessageBox/PointsPreview';
import Card from './components/helpers/Card';
import Routes from './components/MessageBox/Routes';
import SignalsPreview from './components/MessageBox/SignalsPreview';
import ContextMenu from './components/Scheme/Parts/Signals/ContextMenu/ContextMenu';
import {frontEndScheme} from './definition/all';
import Scheme from './components/Scheme/Index';
import ABSectorsPreview from './components/MessageBox/ABSector/Index';

interface Props {
    accessKey: string;
}

export default class App extends React.Component<Props, {}> {

    public render() {
        const scheme = frontEndScheme[this.props.accessKey];
        return (
            <>
                <div className="container-fluid">
                    <div className="row col-12 top-panel">

                        <div className="col-3">
                            <Card name={'Messages'}>
                                <MessageBox/>
                            </Card>
                        </div>
                        {scheme.cards.routeBuilder &&
                        <div className="col-3">
                            <Card name={'Routes'}>
                                <Routes/>
                            </Card>
                        </div>}

                        <div className="col-3">
                            <Card name={'AB Sectors'}>
                                <ABSectorsPreview ABSectors={scheme.objects.ABSectors}/>
                            </Card>
                        </div>
                        {scheme.cards.routes &&
                        <div className="col-3">
                            <Card name={'Built routes'}>
                                <RouteBuilderMessageBox/>
                            </Card>
                        </div>
                        }
                    </div>

                    <div className="col-12">

                        <Scheme scheme={scheme}/>

                    </div>
                    <div className="row col-12 bottom-panel">
                        {scheme.cards.signals &&
                        <div className="col-3">
                            <Card name={'Signals'}>
                                <SignalsPreview signals={scheme.objects.signals}/>
                            </Card>
                        </div>
                        }
                        {scheme.cards.sectors &&
                        <div className="col-3">
                            <Card name={'Sectors'}>
                                <SectorsPreview sectors={scheme.objects.sectors}/>
                            </Card>
                        </div>
                        }
                        {scheme.cards.points &&
                        <div className="col-3">
                            <Card name={'Turnouts'}>
                                <PointsPreview/>
                            </Card>
                        </div>
                        }

                        <div className="col-3">
                            <Card name={'Options'}>
                                <Options/>
                            </Card>
                        </div>
                    </div>
                </div>

                <ContextMenu signals={scheme.objects.signals}/>
            </>
        );
    }
}
