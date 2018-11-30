import React, { Component } from 'react';
import './Form-search.scss';

// Components
import Title from '../Title/Title';

class FormSearch extends Component {
  render() {
    return (
      <form className="formSearch">
        <Title text={ "Crate your holiday activity" }/>

        <div className="formSearch_group">
          <label className="formSearch_title"
                 htmlFor="formSearch_input">Hi! What are your holiday interests?</label>

          <input aria-label="Enter your insterests"
                 className="formSearch_input"
                 id="formSearch_input"
                 name="formSearch_input"
                 placeholder="Enter your insterests"
                 type="text"/>
          <button className="btn formSearch_btn" type="submit">Search partners</button>
        </div>
      </form>
    );
  }
}

export default FormSearch;
