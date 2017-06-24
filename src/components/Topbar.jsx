import React, { Component } from 'react';
import SearchBox from './SearchBox.jsx';

class Topbar extends Component {
  render() {
    return (
      <div className="topbar">
        <SearchBox />
      </div>
    );
  }
}

export default Topbar;
