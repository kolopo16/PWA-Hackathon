import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import './style/main.css';
import Home from './Home';
import Detail from './Detail';
// import GoogleServices from './googleConfig';

class App extends Component {
  componentDidMount() {
    // const services = new GoogleServices().service;
    // console.log(services);
  }
  render() {
    return (
      <Router>
        <div className="container">
          <Route exact path="/" component={Home} />
          <Route exact path="/detail/:id" component={Detail} />
        </div>
      </Router>
    );
  }
}

export default App;
