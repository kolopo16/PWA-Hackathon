import React, { Component } from 'react';
import './style/main.css';
import Topbar from './components/Topbar';
import Card from './components/Card';
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
      <div>
        <Topbar />
        <div className="container">
          <h2>Header</h2>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    );
  }
}

export default App;
