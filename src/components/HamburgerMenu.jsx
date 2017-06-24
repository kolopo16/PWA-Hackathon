import React, { Component } from 'react';
import FirebaseConfig from '../firebaseConfig';

class HamburgerMenu extends Component {
  constructor() {
    super();
    this.state = {
      isOpened: false,
      email: null,
    }
  }
  toggleMenus() {
    this.setState({ isOpened: !this.state.isOpened })
  }
  componentDidMount() {
    const firebaseObj = new FirebaseConfig();
    const currentUser = firebaseObj.GetCurrentUser();
    currentUser.then((user) => {
      this.setState({email: user.email})
    })
  }
  render() {
    const { isOpened, email } = this.state;
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
            <li>
              <button className={`${email ? 'hiding' : 'showing'}`}
                  onClick={() => new FirebaseConfig().FacebookAuth()}>
                Login with Facebook
              </button>
              <button className={`${email ? 'showing' : 'hiding'}`}
                  onClick={() => {new FirebaseConfig().SignOut(); this.setState({email: null})}}>
                Log out
              </button>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default HamburgerMenu;
