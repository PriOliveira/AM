import React, {Component} from 'react';
import './App.css';

import LogIn from './components/LogIn';
import HomePage from './components/views/HomePage';


class App extends Component{
  render() {
    return (
        <div className="App">
          <HomePage />
          <LogIn />
        </div>
    );
  }
}

export default App;
