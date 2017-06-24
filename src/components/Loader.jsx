import React, { Component } from 'react';

class Loader extends Component {
  render() {
    return (
      <div className="loader-container">
          <div className="loader">
            <div className="dot dot_1"></div>
            <div className="dot dot_2"></div>
            <div className="dot dot_3"></div>
            <div className="dot dot_4"></div>
          </div>
      </div>
    );
  }
}

export default Loader;
