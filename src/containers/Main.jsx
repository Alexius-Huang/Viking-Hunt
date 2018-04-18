import React, { Component } from 'react';
import Section from './Grammer.Section';
import Checkbox from '../components/Checkbox';
import './Main.css';

function renderCheckboxes(arr) {
  return arr.map(item => <Checkbox>{item}</Checkbox>);
}

class Main extends Component {
  render() {
    return (
      <main>
        <Section caption="Norwegian Alphabets">
          <p>Norwegian consists of 29 alphebet, with 26 common Latin alphabets and 3 special characters.</p>
          <p>A B C D E F G H I J K L M N O P Q R S T U V W X Y Z Æ Å Ø</p>
        </Section>

        <Section caption="Conversation I - Greetings & Common Phrases">
          <p>Simple ways of saying <b>"Hello"</b></p>
          <Checkbox>Halo! Hei!</Checkbox>

          <p>Asking someone <b>"How are you?"</b></p>
          {renderCheckboxes([
            'Hvordan går det?',
            'Hvordan har du det?',
            'Hvordan står det til?',
            'Hvordan går det med dere?'
          ])}

          <p>Asking someone <b>"Is everything Okay?"</b></p>
          {renderCheckboxes([
            'Går det bra?',
            'Har du det bra?',
            'Står det bra til?'
          ])}
        </Section>

        <Section caption="Personal Pronouns (Pronomen)">
          Personal Pronouns
        </Section>

        <Section caption="Nouns (Substantiv)">
          Nouns
        </Section>

        <Section caption="Verbs">
          Verbs
        </Section>

        <Section caption="Forming Sentences">
          Forming Sentences
        </Section>
      </main>
    );
  }
}

export default Main;
