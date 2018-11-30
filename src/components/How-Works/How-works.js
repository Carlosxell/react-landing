import React, { Component } from 'react';
import './How-works.scss';

// Components
import BoxA from '../BoxA/BoxA';
import Title from '../Title/Title';
import howWorksData from "../../values/How-works-data";
import SliderDot from "../Slider-Dot/Slider-Dot";

class HowWorks extends Component {
  state = {
    count: 1
  };

  changeCount = (value) => {
    this.setState({
      count: value
    });
  };

  render() {
    return (
      <div className="howWorks">
        <Title text={ "How Dreamshare" } />

        <div className="howWorks_grid">{ howWorksData.map((result) => (
          <div className={ "howWorks_grid_item" + (this.state.count === result.id ? '--active' : '')}
               key={result.id}>
            <BoxA dataBase={result} />
          </div>
        )) }</div>

        <div className="sliderDots_grid">
          { howWorksData.map((result) =>
            ( <SliderDot countValue={ this.state.count }
                         dotId={ result.id }
                         key={ result.id }
                         onClick={ () => this.changeCount(result.id) } /> )
          ) }
        </div>
      </div>
    );
  }
}

export default HowWorks;
