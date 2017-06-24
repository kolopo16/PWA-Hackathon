import React, { Component } from 'react';
import SearchBox from './SearchBox.jsx';
import HamburgerMenu from './HamburgerMenu';

class Topbar extends Component {
  render() {
    return (
      <div className="topbar">
        <SearchBox />
        <HamburgerMenu />
      </div>
    );
  }
}

export default Topbar;
