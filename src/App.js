import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import './style/main.css';
import Topbar from './components/Topbar';
// import Card from './components/Card';
import Home from './Home';
import Detail from './Detail';
import GoogleServices from './googleConfig';


class App extends Component {
  componentDidMount() {
    const services = new GoogleServices().service;
    console.log(services);

    // service.textSearch({
    //   query: 'อุทยานแห่งชาติ'
    // }, function (places, status) {
    //   console.log('Place search:', places);
    // });
  }

  render() {
    return (
      <Router>
        <div>
          <Topbar />
          <Route exact path="/" component={Home} />
          <Route exact path="/detail/:id" component={Detail} />
        </div>
      </Router>
    );
  }
}

export default App;
