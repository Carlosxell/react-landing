import React, { Component } from 'react';
import './Slider-Dot.scss';

// Components

class SliderDot extends Component {
  render() {
    return (
      <span className="sliderDot"> { this.props.dotValue } </span>
    );
  }
}

export default SliderDot;
