import React, { Component } from 'react';
import './Aside.css';

class Aside extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(id) {
    document.querySelector(id).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }

  render() {
    const { content } = this.props;
    return (
      <aside className="Aside">
        {
          content.map((item, i) => (
            <a
              key={i}
              onClick={(e) => {
                e.preventDefault();
                this.handleClick(`#section-${i + 1}`)
              }}
            >
              {item}
            </a>
          ))
        }
      </aside>
    );
  }
}

Aside.defaultProps = {
  content: [
    'Norwegian Alphabets',
    'Conversation I - Greetings & Common Phrases',
    'Personal Pronouns (Pronomen)',
    'Nouns (Substantiv)',
    'Verbs',
    'Forming Sentences'
  ]
}

export default Aside;
