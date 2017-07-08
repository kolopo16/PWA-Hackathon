import React, { Component } from 'react';

class Icons extends Component {
  constructor() {
    super();
    this.state = {
      atTopPage: true
    }
  }
  scrollToTop() {
    if (window.scrollY > 0) {
      window.scrollTo(0, 0);
    }
  }
  render() {
    const { atTopPage } = this.state;
    return (
      <div className={`${!atTopPage ? 'hiding' : 'showing'} levitate-bottom`}>
        <div className="arrow-up" onClick={this.scrollToTop}></div>
      </div>
    );
  }
}

export default Icons;
