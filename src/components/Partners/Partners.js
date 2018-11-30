import React, { Component } from 'react';
import './Partners.scss';
import partnersData from '../../values/Partners-data';

// Components
import Partner from '../Partner/Partner';
import Title from '../Title/Title';

class Partners extends Component {
  render() {
    return (
      <div className="partners">
        <Title text={ "Meet a partner for your best holiday" }/>

        <div className={ "partners_grid" }>
          { partnersData.map((res) => (
            <div className="partners_grid_item" key={ res.id }>
              <Partner info={ res } />
            </div>
          )) }
        </div>

        <button className="btn--partners">See other partners</button>
      </div>
    );
  }
}

export default Partners;
