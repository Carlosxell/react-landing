import React, { Component } from 'react';
import './App.scss';

// Components
import Topo from './components/Topo/Topo';
import HowWorks from "./components/How-Works/How-works";
import Partners from "./components/Partners/Partners";
import FormSearch from "./components/Form-search/Form-search";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Topo />

        <HowWorks />

        <Partners />

        <FormSearch />
      </div>
    );
  }
}

export default App;
