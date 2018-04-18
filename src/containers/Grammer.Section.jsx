import React, { Component } from 'react';
import './Grammer.Section.css';

class Section extends Component {
  constructor(props) {
    super(props);
    this.state = { hide: false };
    this.toggleHide = this.toggleHide.bind(this);
  }

  toggleHide() {
    this.setState({ hide: !this.state.hide });
  }

  render() {
    const { caption, children } = this.props;
    const { hide } = this.state;

    return (
      <section className={`grammer-section ${hide ? 'hide' : ''}`}>
        <div className="label-header" onClick={this.toggleHide}>
          <span className="label-number" />
          <h2 className="caption">{caption}</h2>
        </div>

        <article>{children}</article>
      </section>
    );
  }
};

export default Section;