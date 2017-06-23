import React, { Component } from 'react';
import Search from '../assets/Search.png';

class BackToTopButton extends Component {
  render() {
    return (
      <div className="search">
        <img src={Search} alt='back-to-top-button' />
      </div>
    );
  }
}

export default BackToTopButton;
