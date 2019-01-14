import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Canvas from './components/Canvas/sketch';

class App extends Component {
  constructor() {
    super();
    this.state = {
      settings: {
        dimensions: [2048, 2048],
        // orientation: 'portrait',
        // units: 'in',
        // pixelsPerInch: 300,
      }
    }
  }
  render() {
    return <Canvas settings={this.state.settings} />
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

