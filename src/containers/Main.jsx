import React, { Component } from 'react';
import Section from './Grammer.Section';
import Checkbox from '../components/Checkbox';
import Table from '../components/Table';
import './Main.css';

function renderCheckboxes(arr) {
  return arr.map((item, i) => <Checkbox key={i}>{item}</Checkbox>);
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
          <p>Personal pronouns are pronouns that are associated primarily with a particular grammatical person – 1st person (as I), 2nd person (as you), or 3rd person (as he, she, it, they).</p>
          <p>Personal pronouns may also take different forms depending on number (usually <strong>singular</strong> or <strong>plural</strong>), grammatical or natural gender, case, and formality. The term "personal" is used here purely to signify the grammatical sense; personal pronouns <i>are not limited to people and can also refer to animals and objects</i> (In Norwegian, the <i>pronomen</i> <strong>det</strong> gives us the sense).</p>
          <Table
            caption="Norwegian Personal Pronouns"
            data={[
              ['Singular Pronomen', 'Singular Pronoun', 'Plural Pronomen', 'Plural Pronoun'],
              ['jeg', 'I', 'vi', 'we'],
              ['tu', 'you', 'dere', 'you'],
              ['han', 'he', 'de', 'they'],
              ['hun', 'she', '-', '-'],
              ['det', 'it', '-', '-']
            ]}
          />
        </Section>

        <Section caption="Nouns (Substantiv)">
          <p>Nouns in Norwegian have different types of gender (which are also called the <strong>articles</strong>).</p>
          <Table
            caption="Norwegian Article of Noun"
            data={[
              ['-', 'hankjønn (masculine)', 'hunkjønn (feminine)', 'intetkjønn (neuter)'],
              ['Article', 'en', 'ei', 'et'],
              ['Example', 'en bil (a car)', 'ei jente (a girl)', 'et hus (a house)'],
              ['', 'en gut (a boy)', 'ei dør (a door)', 'et barn (a child)']
            ]}
          />
          <p>If a noun is <strong>uncountable</strong>, for instance, milk, air, or water, an indefinite article is not used, and <strong>the uncountable words won't have plural</strong>.</p>
          <p>In some Norwegian dialects <strong>the feminine gender is extinct</strong>. Because of this, <strong>almost all the adjectives of feminine gender can be used with articles of masculine gender</strong>.</p>
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
