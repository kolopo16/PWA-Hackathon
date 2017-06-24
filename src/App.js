import React, { Component } from 'react';
import './style/main.css';
import BackToTopButton from './components/BackToTopButton';
import googleServices from './googleConfig';

class App extends Component {

  componentDidMount() {

    const services = new googleServices().service;
    console.log(services,'app');
    
    // service.textSearch({
    //   query: 'อุทยานแห่งชาติ'
    // }, function (places, status) {
    //   console.log('Place search:', places);
    // });

  }

  googleServiceFunction() {
    console.log(this.service, 'google');
  }

  render() {
    
    
    return (
      <div>
        <h1>Hello World!</h1>
      </div>
    );
  }
}

export default App;
