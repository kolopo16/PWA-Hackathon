import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import './style/main.css';
import Home from './components/Home';
// import Detail from './components/Detail';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
        </div>
      </Router>
    );
  }
}

export default App;
