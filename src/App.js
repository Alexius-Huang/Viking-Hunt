import React, { Component } from 'react';
import Main from './containers/Main';
import Aside from './containers/Aside';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Aside />
        <Main />
      </div>
    );
  }
}

export default App;
