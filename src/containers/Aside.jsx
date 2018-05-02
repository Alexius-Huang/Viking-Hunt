import React, { Component } from 'react';
import './Aside.css';

class Aside extends Component {
  constructor(props) {
    super(props);
    this.state = { showAside: false };
    this.handleClick = this.handleClick.bind(this);
    this.handleToggleAside = this.handleToggleAside.bind(this);
  }

  handleClick(id) {
    document.querySelector(id).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }

  handleToggleAside() {
    this.setState({ showAside: !this.state.showAside });
  }

  render() {
    const { content } = this.props;
    const { showAside } = this.state;

    return (
      <aside
        className={`Aside ${showAside ? 'mobile-show-aside' : ''}`}
        ref={(c) => { this.wrapper = c; }}
      >
        <h5>
          Hunting Route
          <span className="toggler" onClick={this.handleToggleAside}>
            <span />
            <span />
            <span />
          </span>
        </h5>
        
        <div className="aside-content">
          {
            content.map((item, i) => (
              <a
                key={i}
                onClick={(e) => {
                  e.preventDefault();
                  this.handleClick(`#section-${i + 1}`);
                  if (showAside) { this.setState({ showAside: false }); }
                }}
              >
                {item}
              </a>
            ))
          }
        </div>
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
    'Vocabulary II - Common Verbs',
    'Forming Sentences I - Basics',
    'Forming Sentences II - Asking Questions',
    'Conversation IV - Languages',
    'Vocabulary III - Professions (et yrke)',
    'Numbers I',
    'Modal Verb',
    'Conjunctions (Konjuksjoner)',
    'Number II',
    'Vocabulary IV - Food & Drinks',
    'Nouns II - Plurals',
    'Vocabulary V - Irregular Plural Form',
    'Nouns III - Countable & Uncountable',
    'Conversation V - Negative Sentences',
    'Sentence Circumstance',
    'Adjective I - Rules',
    'Adjective II - Exceptions',
    'Forming Sentences III - "det" Sentences',
    'Vocabulary VI - Weather (et vær)',
    'Word Order I - Principal Sentences',
    'Word Order II - Principal Sentences in Question',
    'Word Order III - Subordinate Sentences',
    'Conversation VI - Travel',
    'Vocabulary VII - Days of the Week (ei/en uke)',
  ]
}

export default Aside;
