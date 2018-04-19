import React, { Component } from 'react';
import './Grammer.Section.css';

class Section extends Component {
  constructor(props) {
    super(props);
    this.state = { hide: false, completed: false };
    this.toggleHide = this.toggleHide.bind(this);
    this.toggleComplete = this.toggleComplete.bind(this);
  }

  toggleHide() {
    this.setState({ hide: !this.state.hide });
  }

  toggleComplete(event) {
    event.stopPropagation();
    this.setState({ completed: !this.state.completed });
  }

  render() {
    const { caption, children } = this.props;
    const { hide, completed } = this.state;

    return (
      <section className={`grammer-section ${hide ? 'hide' : ''} ${completed ? 'completed' : ''}`}>
        <div className="label-header" onClick={this.toggleHide}>
          <span className="label-number" />
          <h2 className="caption">
            {caption}
            <button className="complete-btn" onClick={this.toggleComplete}>
              {completed ? 'Completed' : 'Mark Complete'}
            </button>
          </h2>
        </div>

        <article>{children}</article>
      </section>
    );
  }
};

export default Section;