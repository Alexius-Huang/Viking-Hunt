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
        <Section number={0} caption="Norwegian Alphabets">
          <p>Norwegian consists of 29 alphebet, with 26 common Latin alphabets and 3 special characters.</p>
          <p>A B C D E F G H I J K L M N O P Q R S T U V W X Y Z Æ Å Ø</p>
        </Section>

        <Section number={1} caption="Greetings & Common Phrases">
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
      </main>
    );
  }
}

export default Main;
