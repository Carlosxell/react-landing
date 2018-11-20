import React, { Component } from 'react';
import './How-works.scss';

// Components
import BoxA from '../BoxA/BoxA';
import howWorksData from "../../values/How-works-data";
import SliderDot from "../Slider-Dot/Slider-Dot";

class HowWorks extends Component {
  changeCount = (value) => {
    console.info(value, 'teste');

    this.setState({
      count: value
    });
  };
  state = {
    count: 1
  };

  render() {
    return (
      <div className="howWorks">
        <h2 className="howWorks_title">How Dreamshare</h2>

        <div className="howWorks_grid">{ howWorksData.map((result) => (
          <div className={ "howWorks_grid_item" + (this.state.count === result.id ? '--active' : '')}
               key={result.id}>
            <BoxA dataBase={result} />
          </div>
        )) }</div>

        <div className="sliderDots_grid">
          { howWorksData.map((result) =>
            ( <SliderDot key={ result.id } dotValue={ result.id } onClick={ () => this.changeCount(result.id) } /> )
          ) }
        </div>
      </div>
    );
  }
}

export default HowWorks;
