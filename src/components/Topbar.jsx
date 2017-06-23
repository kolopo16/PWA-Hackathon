import React, { Component } from 'react';
import SearchBox from './SearchBox';

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
