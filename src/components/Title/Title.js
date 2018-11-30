import React, { Component } from 'react';
import './Title.scss';

class Title extends Component {
  render() {
    return (
      <h2 className={ "title" }>{ this.props.text }</h2>
    );
  }
}

export default Title;
