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
      <aside className="Aside" ref={(c) => { this.wrapper = c; }}>
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
    'Conversation I - Greetings',
    'Conversation II - Common Phrases',
    'Conversation III - Blessings',
    'Personal Pronouns (Pronomen)',
    'Nouns I - Substantiv',
    'Vocabulary I - Family (en familie)',
    'Verbs (Presens & Infinitiv)',
    'Forming Sentences I - Basics',
    'Forming Sentences II - Asking Questions',
    'Conversation IV - Languages',
    'Vocabulary II - Professions (et yrke)',
    'Numbers I',
    'Modal Verb',
    'Conjunctions (Konjuksjoner)',
    'Number II',
    'Vocabulary II',
    'Nouns II - Plurals',
    'Negative Sentences',
    'Sentence Circumstance',
    'Adjective I - Rules',
    'Adjective II - Exceptions',
    'Forming Sentences III - "det" Sentences'
  ]
}

export default Aside;
