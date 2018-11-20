import React, { Component } from 'react';
import './BoxA.scss';

// Components

class BoxA extends Component {
  render() {
    return (
      <figure className="boxA">
        <div className="boxA_wrap">
          <img alt={ this.props.dataBase.title }
               className="boxA_wrap_img"
               src={ this.props.dataBase.image }/>
        </div>

        <figcaption className="boxA_content">
          <span className="boxA_btn">{ this.props.dataBase.btnText }</span>
          <h3>{ this.props.dataBase.title }</h3>
          <p>{ this.props.dataBase.description }</p>
        </figcaption>
      </figure>
    );
  }
}

export default BoxA;
