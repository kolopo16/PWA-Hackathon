import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import './style/main.css';
import Home from './components/Home';
import Detail from './components/Detail';

class App extends Component {
  constructor() {
    super();
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
