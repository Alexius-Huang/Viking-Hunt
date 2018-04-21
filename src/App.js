import React, { Component } from 'react';
import Main from './containers/Main';
import Aside from './containers/Aside';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <section className="main-page">
          <div className="main-page-wrapper">
            <h1>Viking Hunt</h1>
            <h2>Hei alle sammen! La oss lære norsk.</h2>
            <h3>Hi all! Let's learn Norwegian.</h3>
          </div>

          <div className="main-page-navlinks">
            <h4>Created by Maxwell Alexius</h4>
            <div className="navlinks">
              <a href="https://www.linkedin.com/in/huang-alexius-a95258a4/">
                <span className="fa fa-linkedin-square" />
              </a>
              <a href="https://github.com/Maxwell-Alexius">
                <span className="fa fa-github" />
              </a>
              <a href="https://medium.com/@maximilianhuang">
                <span className="fa fa-medium" />
              </a>
            </div>
          </div>
        </section>
        <Aside />
        <Main />
      </div>
    );
  }
}

export default App;
