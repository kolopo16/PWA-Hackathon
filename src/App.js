import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import './style/main.css';
import Topbar from './components/Topbar';
import Icons from './components/Icons';
import Home from './Home';
import Detail from './Detail';
import GoogleServices from './googleConfig';

class App extends Component {
  componentDidMount() {
    const services = new GoogleServices().service;
    console.log(services);
  }

  render() {
    return (
      <Router>
        <div className="container">
          <Topbar />
          <Icons />
          <Route exact path="/" component={Home} />
          <Route exact path="/detail/:id" component={Detail} />
        </div>
      </Router>
    );
  }
}

export default App;
