import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import './style/main.css';
import Icons from './components/Icons';
import SearchBox from './components/SearchBox';
import HamburgerMenu from './components/HamburgerMenu';
import Home from './Home';
import Detail from './Detail';
import GoogleServices from './googleConfig';

class App extends Component {
  componentDidMount() {
    const services = new GoogleServices().service;
    console.log(services);
  }
  getValue(v) {
    console.log(v, 'value');
  }
  render() {
    return (
      <Router>
        <div className="container">
          <div className="topbar">
            <SearchBox onInputChange={v => this.getValue(v)}/>
            <HamburgerMenu />
          </div>
          <Icons />
          <Route exact path="/" component={Home} />
          <Route exact path="/detail/:id" component={Detail} />
        </div>
      </Router>
    );
  }
}

export default App;
