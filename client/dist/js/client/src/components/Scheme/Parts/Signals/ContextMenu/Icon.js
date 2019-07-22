"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const Signals_1 = require("../../../../definitions/Signals");
const signal_1 = require("../../../../../middleware/signal");
class Icon extends React.Component {
    constructor() {
        super(...arguments);
        this.SVG_HEIGHT = 200;
    }
    render() {
        const { signal: { type, construction } } = this.props;
        return (React.createElement("svg", { viewBox: (-this.SVG_HEIGHT / 2) + ' 0 ' + this.SVG_HEIGHT + ' 400', height: "300" },
            React.createElement("rect", { x: -this.SVG_HEIGHT / 2, height: 400, width: this.SVG_HEIGHT, fill: "dodgerblue" }),
            React.createElement("g", { className: 'signal-preview signal-type-' + type },
                React.createElement("g", { transform: (construction === 'T') ? 'translate(0,75)' : 'translate(0,10)' },
                    this.getBackground(),
                    this.getShield(),
                    this.getLights(),
                    this.getLabel(),
                    this.getStage()))));
    }
    getStage() {
        const { signal: { construction, type } } = this.props;
        const shieldHeight = this.getShieldHeight();
        switch (construction) {
            case 'T':
                return React.createElement("g", { transform: 'translate(15,' + (shieldHeight - 50) + ')' },
                    React.createElement("g", { transform: 'translate(5,0)' }, this.getSmallStageLabel()));
            case 'K':
                return React.createElement("g", { transform: 'translate(30,' + (shieldHeight - 100) + ')' },
                    React.createElement("g", { transform: 'translate(5,0)' }, this.getStageLabel(type)));
            default:
                return React.createElement("g", { transform: 'translate(0,' + (shieldHeight + 15) + ')' },
                    React.createElement("rect", { x: -4, y: 0, width: 8, height: 300, fill: '#555' }),
                    React.createElement("g", { transform: 'translate(0,45)' }, this.getStageLabel(type)));
        }
    }
    getBackground() {
        const { signal: { construction } } = this.props;
        switch (construction) {
            case 'T':
                return (React.createElement(React.Fragment, null,
                    React.createElement("rect", { x: -this.SVG_HEIGHT / 2, width: this.SVG_HEIGHT, height: "400", y: (this.getShieldHeight() + 15 + 30), fill: "green" }),
                    React.createElement("polygon", { points: '-10,0 10,0 15,30 -15,30', transform: 'translate(0,' + (this.getShieldHeight() + 15) + ')', fill: "#ccc" })));
            case 'K':
                return (React.createElement(React.Fragment, null,
                    React.createElement("rect", { x: -this.SVG_HEIGHT / 2, width: this.SVG_HEIGHT, height: "50", y: (this.getShieldHeight() - 45), fill: '#ccc', opacity: 0.5 }),
                    React.createElement("rect", { x: -this.SVG_HEIGHT / 2, width: this.SVG_HEIGHT, height: "5", y: this.getShieldHeight() - 95, fill: '#ccc' }),
                    React.createElement("rect", { x: -this.SVG_HEIGHT / 2, width: this.SVG_HEIGHT, height: "5", y: this.getShieldHeight() + 5, fill: '#ccc' }),
                    React.createElement("line", { x1: 50, x2: -50, y1: this.getShieldHeight() - 95, y2: this.getShieldHeight() + 5, strokeWidth: 5, stroke: '#ccc' }),
                    React.createElement("line", { x1: -150, x2: -50, y1: this.getShieldHeight() - 95, y2: this.getShieldHeight() + 5, strokeWidth: 5, stroke: '#ccc' }),
                    React.createElement("line", { x1: 50, x2: 150, y1: this.getShieldHeight() - 95, y2: this.getShieldHeight() + 5, strokeWidth: 5, stroke: '#ccc' })));
            default:
                return null;
        }
    }
    getLabel() {
        const { signal: { name } } = this.props;
        return React.createElement("g", { className: 'label', transform: 'translate(0,' + (this.getShieldHeight()) + ')' },
            React.createElement("rect", { x: "-15", y: 0, width: "30", height: "15" }),
            React.createElement("text", { transform: "translate(0,10)" }, name));
    }
    getShieldHeight() {
        const { signal: { lights, construction } } = this.props;
        if (construction === 'T') {
            return (lights.length * 30) + 15;
        }
        return (lights.length * 30) + 30;
    }
    getShield() {
        const { signal: { construction, lights } } = this.props;
        const height = this.getShieldHeight();
        switch (construction) {
            case 'T':
                return React.createElement(React.Fragment, null,
                    React.createElement("polygon", { points: '-15,15' +
                            ' 15,15' +
                            ' 15,' + (height + 15) +
                            ' -15,' + (height + 15), fill: "black" }),
                    lights.map((value, index) => {
                        return React.createElement("line", { key: index, x1: -15, x2: 15, y1: (index * 30) + 45, y2: (index * 30) + 45, stroke: '#666', strokeWidth: 1 });
                    }));
            default:
                return React.createElement(React.Fragment, null,
                    React.createElement("polygon", { points: '-15,0' +
                            ' 15,0' +
                            ' 30,5' +
                            ' 30,' + (height - 5) +
                            ' 15,' + (height) +
                            ' -15,' + (height) +
                            ' -30,' + (height - 5) +
                            ' -30,5', fill: "black" }),
                    React.createElement("line", { x1: -15, x2: -15, y1: 15, y2: height - 15, stroke: '#666', strokeWidth: 1 }),
                    React.createElement("line", { x1: 15, x2: 15, y1: 15, y2: height - 15, stroke: '#666', strokeWidth: 1 }),
                    React.createElement("line", { x1: -30, x2: 30, y1: 15, y2: 15, stroke: '#666', strokeWidth: 1 }),
                    lights.map((value, index) => {
                        return React.createElement("line", { key: index, x1: -30, x2: 30, y1: (index * 30) + 45, y2: (index * 30) + 45, stroke: '#666', strokeWidth: 1 });
                    }));
        }
    }
    getLights() {
        const { signal: { lights }, state } = this.props;
        return React.createElement(React.Fragment, null, lights.map((value, index) => {
            return React.createElement("circle", { key: index, cx: "0", cy: (index * 30) + 30, r: "10", fill: signal_1.SignalLightDisplay.getColorById(value), className: signal_1.SignalLightDisplay.getColorCallBack(value, state) });
        }));
    }
    getSmallStageLabel() {
        const { signal: { type } } = this.props;
        const width = 10;
        switch (type) {
            case Signals_1.SignalTypes.TYPE_ENTRY:
                return React.createElement("g", null,
                    React.createElement("rect", { x: -width / 2, y: 0, width: width, height: 25, fill: 'white' }),
                    React.createElement("rect", { x: -width / 2, y: 25, width: width, height: 25, fill: 'red' }));
            case Signals_1.SignalTypes.TYPE_PATH:
            case Signals_1.SignalTypes.TYPE_EXIT:
                return React.createElement("g", null);
            /*  <rect x={0} y={0} width={width} height={26} fill={'red'}/>
              <rect x={0} y={26} width={width} height={11} fill={'white'}/>
              <rect x={0} y={37} width={width} height={26} fill={'red'}/>
              <rect x={0} y={63} width={width} height={11} fill={'white'}/>
              <rect x={0} y={74} width={width} height={26} fill={'red'}/>
          </g>;*/
            case Signals_1.SignalTypes.TYPE_SHUNT:
                return React.createElement("g", null,
                    React.createElement("rect", { x: -width / 2, y: 0, width: width, height: 25, fill: 'white' }),
                    React.createElement("rect", { x: -width / 2, y: 25, width: width, height: 25, fill: 'blue' }));
            case Signals_1.SignalTypes.TYPE_AB:
                return React.createElement("g", null,
                    React.createElement("rect", { x: -width / 2, y: 0, width: width, height: 50, fill: 'white' }));
        }
    }
    getStageLabel(type) {
        const width = 10;
        switch (type) {
            case Signals_1.SignalTypes.TYPE_ENTRY:
                return React.createElement("g", null,
                    React.createElement("rect", { x: -width / 2, y: 0, width: width, height: 25, fill: 'white' }),
                    React.createElement("rect", { x: -width / 2, y: 25, width: width, height: 25, fill: 'red' }),
                    React.createElement("rect", { x: -width / 2, y: 50, width: width, height: 25, fill: 'white' }),
                    React.createElement("rect", { x: -width / 2, y: 75, width: width, height: 25, fill: 'red' }));
            case Signals_1.SignalTypes.TYPE_PATH:
            case Signals_1.SignalTypes.TYPE_EXIT:
                return React.createElement("g", null,
                    React.createElement("rect", { x: -width / 2, y: 0, width: width, height: 26, fill: 'red' }),
                    React.createElement("rect", { x: -width / 2, y: 26, width: width, height: 11, fill: 'white' }),
                    React.createElement("rect", { x: -width / 2, y: 37, width: width, height: 26, fill: 'red' }),
                    React.createElement("rect", { x: -width / 2, y: 63, width: width, height: 11, fill: 'white' }),
                    React.createElement("rect", { x: -width / 2, y: 74, width: width, height: 26, fill: 'red' }));
            case Signals_1.SignalTypes.TYPE_SHUNT:
                return React.createElement("g", null,
                    React.createElement("rect", { x: -width / 2, y: 0, width: width, height: 25, fill: 'white' }),
                    React.createElement("rect", { x: -width / 2, y: 25, width: width, height: 25, fill: 'blue' }),
                    React.createElement("rect", { x: -width / 2, y: 50, width: width, height: 25, fill: 'white' }),
                    React.createElement("rect", { x: -width / 2, y: 75, width: width, height: 25, fill: 'blue' }));
            case Signals_1.SignalTypes.TYPE_AB:
                return React.createElement("g", null,
                    React.createElement("rect", { x: -width / 2, y: 0, width: width, height: 100, fill: 'white' }));
        }
    }
}
exports.default = Icon;
//# sourceMappingURL=Icon.js.map