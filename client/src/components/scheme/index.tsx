import * as React from 'react';
import Signals from './parts/signals/index';
import Sectors from './parts/sectors/index';

export default class Scheme extends React.Component<{}, void> {
    render() {
        return (
            <div>
                <svg viewBox="-200 150 900 350" style={{width: '100%'} }>
                    <Sectors/>
                    <Signals/>
                </svg>
            </div>
        );
    }
}