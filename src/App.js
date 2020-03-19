import React, { Component } from 'react';
import Particles from 'react-particles-js';
import particlesjsConfig from './particlesjs-config.json';
import './App.scss';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Particles
          width="100vw"
          height="100vh"
          params={particlesjsConfig} />
        <h1 className="martin">martin</h1>
        <h1 className="achev">achev</h1>
      </div>
    );
  }
}
