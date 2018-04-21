import React, { Component } from 'react';
import './List.css';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = { checked: new Set() };
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle(index) {
    const { checked } = this.state;
    const newState = new Set([...checked]);

    if (checked.has(index)) {
      newState.delete(index);
    } else {
      newState.add(index);
    }

    this.setState({ checked: newState });
  }

  render() {
    const { items, stateless = false } = this.props;
    const { checked } = this.state;
    return (
      <ul className="List">
        {
          stateless ? (
            items.map((item, i) =>
              <li key={i} className="stateless">{item}</li>
            )
          ) : (
            items.map((item, i) =>
              <li
                key={i}
                className={checked.has(i) ? 'active' : ''}
                onClick={() => { this.handleToggle(i); }}
              >{item}</li>
            )
          )
        }
      </ul>
    );
  }
}

export default List;
