import React, { Component } from 'react';
import './App.scss';

// Components
import Topo from './components/Topo/Topo';
import HowWorks from "./components/How-Works/How-works";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Topo />

        <HowWorks />
      </div>
    );
  }
}

export default App;
