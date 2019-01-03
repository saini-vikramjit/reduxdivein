import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ButtonGroup from './component/ButtonGroup';

import store from './store';

class App extends Component {
  
  constructor(props){
    super(props);
    this.state = store.getState();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hello World { store.getState().tech }
          </p>
          <ButtonGroup technologies = {["Redux", "Mobi X", "Flux"]} />
        </header>
      </div>
    );
  }
}

export default App;
