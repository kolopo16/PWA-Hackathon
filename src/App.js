import React, { Component } from 'react';
import './style/main.css';
import Topbar from './components/Topbar';
import Card from './components/Card';

class App extends Component {
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
