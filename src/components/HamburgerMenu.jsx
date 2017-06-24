import React, { Component } from 'react';

class HamburgerMenu extends Component {
  constructor() {
    super();
    this.state = {
      isOpened: false,
    }
  }
  toggleMenus() {
    this.setState({ isOpened: !this.state.isOpened })
  }
  render() {
    const { isOpened } = this.state;
    console.log(isOpened, 'isOpened');
    return (
      <div>
        <label className="hamburger-menu" htmlFor="hamburger-menu" onClick={() => this.toggleMenus()}>
          <span></span>
        </label>
        <div className={`${isOpened ? 'showing' : 'hiding'} bg-menus`}>
          <ul className={`${isOpened ? 'showing' : 'hiding'} menus-bar`}>
            <li>MENU 1</li>
            <li>MENU 2</li>
            <li>MENU 3</li>
            <li>MENU 4</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default HamburgerMenu;
