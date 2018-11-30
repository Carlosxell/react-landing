import React, { Component } from 'react';
import './Partner.scss';

class Partner extends Component {
  render() {
    return (
      <figure className="partner">
        <div className={ "partner_wrap" }>
          <img alt={ "Foto do parceiro " + this.props.info.name }
               className={ "partner_wrap_img" }
               src={ this.props.info.images.user }
               title={ "Foto do parceiro " + this.props.info.name }/>

          <img aria-hidden="true"
               alt="Ícone"
               className={ "partner_wrap_icon icon" + this.props.info.class }
               src={ this.props.info.images.icon }/>
        </div>

        <figcaption className={ "partner_content" }>
          <h4 className={ "partner_content_title" }>{ this.props.info.name }</h4>

          <p className={ "partner_content_desc" }>{ this.props.info.description }</p>
        </figcaption>
      </figure>
    );
  }
}

export default Partner;
