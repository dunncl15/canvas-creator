import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Canvas from './components/Canvas/sketch';
import CanvasControls from './components/CanvasControls/CanvasControls';
import './index.scss';

class App extends Component {
  constructor() {
    super();
    this.state = {
      settings: {
        dimensions: [2048, 2048],
        parent: document.getElementById('app'),
        // orientation: 'portrait',
        // units: 'in',
        // pixelsPerInch: 300,
      },
    };
  }

  render() {
    return (
      <>
        <CanvasControls />
        <Canvas settings={this.state.settings} />
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
