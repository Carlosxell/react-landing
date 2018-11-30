import React, { Component } from 'react';
import './Slider-Dot.scss';

// Components

class SliderDot extends Component {
  render() {
    return (
      <span className={ "sliderDot" + ( this.props.countValue === this.props.dotId ? '--active' : '' ) }
            onClick={ this.props.onClick }> { this.props.countValue } </span>
    );
  }
}

export default SliderDot;
