import React, { Component } from 'react';
import './Header.scss';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="header_content">
          <h1 className="header_content_title">Dreamshare</h1>

          <div className="boxLogin">
            <button className="btn--log">Log in</button>
            <button className="btn--signUp">Sign up</button>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
