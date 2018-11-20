import React, { Component } from 'react';
import './Topo.scss';

// Components
import Header from '../Header/Header';

class Topo extends Component {
  render() {
    return (
      <div className="topo">
        <Header />

        <div className="call">
          <h2 className="call_title">share your <br/> holiday dream</h2>
          <p className="call_subTitle">And find the perfect partner to fullfill it</p>

          <button className="btn--call">Find Your holiday partner</button>
        </div>
      </div>
    );
  }
}

export default Topo;
