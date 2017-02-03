import React, { Component } from 'react';
// import logo from './logo.svg';
/*import logo from '../img/logo.png';*/
import './App.css';

import LogIn from './components/LogIn'
import HomePage from './components/HomePage'



/*import InputText from './components/Input/InputText'
import Button from './components/Button/Button'*/

class App extends Component {

  render() {
    return (
        <div className="App">
          {/*<div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Neutron</h2>
          </div>*/}
          
          <HomePage />
          <LogIn />

          {/*<div className="container">
            <InputText />
            <br />
            <Button type="Submit" name="Test" 
                text="Test" classType="primary"/>
          </div>
          */}

        </div>        
    );
  }
}

export default App;
