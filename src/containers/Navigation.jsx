import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

class Navigation extends Component {
  render() {
    return (
      <nav>
        <Link to="/main">Main</Link>
        <Link to="/grammer">Grammer</Link>
        <Link to="/vocabulary">Vocabulary</Link>
      </nav>
    );
  }
}

export default Navigation;
