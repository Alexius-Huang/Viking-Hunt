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
    'Conversation I - Greetings',
    'Conversation II - Common Phrases',
    'Conversation III - Blessings',
    'Personal Pronouns (Pronomen)',
    'Nouns I - Substantiv',
    'Verbs (Presens & Infinitiv)',
    'Forming Sentences',
    'Asking Questions',
    'Conversation IV - Languages',
    'Numbers I',
    'Vocabulary I - Family (en familie)',
    'Modal Verb',
    'Conversation V - Professions',
    'Conjunctions (Konjuksjoner)',
    'Number II',
    'Vocabulary II',
    'Nouns II - Plurals',
    'Negative Sentences',
    'Sentence Circumstance'
  ]
}

export default Aside;
