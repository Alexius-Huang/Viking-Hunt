import React, { Component } from 'react';
import Section from './Grammer.Section';
import Checkbox from '../components/Checkbox';
import Table from '../components/Table';
import List from '../components/List';
import './Main.css';

function renderCheckboxes(arr) {
  return arr.map((item, i) => <Checkbox key={i}>{item}</Checkbox>);
}

function icon(name) {
  return <span className={`fa fa-${name}`} />;
}

class Main extends Component {
  constructor(props) {
    super(props);
    this.sections = [];
  }

  // componentDidMount() {
  //   this.sections.map((section) => section.getBoundingClientRect().top)
  //   this.updateScrollPositions = section.getBoundingClientRect
  // }

  render() {
    const { content } = this.props;

    return (
      <main>
        {
          content.map(([title, elements], i) => (
            <Section
              key={i}
              id={`section-${i + 1}`}
              ref={(c) => { this.sections.push(c); }}
              caption={title}
            >
              {elements}
            </Section>
          ))
        }
      </main>
    );
  }
}

Main.defaultProps = {
  content: [
    [
      'Norwegian Alphabets', [
        <p key={1}>Norwegian consists of 29 alphebet, with 26 common Latin alphabets and 3 special characters.</p>,
        <p key={2}>A B C D E F G H I J K L M N O P Q R S T U V W X Y Z Æ Å Ø</p>
      ]
    ],
    [
      'Conversation I - Greetings & Common Phrases', [
        <p key={1}>Simple ways of saying <b>"Hello"</b></p>,
        <Checkbox key={2}>Halo! Hei!</Checkbox>,
        <p key={3}>Asking someone <b>"How are you?"</b></p>,
        renderCheckboxes([
          'Hvordan går det?',
          'Hvordan har du det?',
          'Hvordan står det til?',
          'Hvordan går det med dere?'
        ]),
        <p key={4}>Asking someone <b>"Is everything Okay?"</b></p>,
        renderCheckboxes([
          'Går det bra?',
          'Har du det bra?',
          'Står det bra til?'
        ])
      ]
    ],
    [
      'Personal Pronouns (Pronomen)', [
        <p key={1}>Personal pronouns are pronouns that are associated primarily with a particular grammatical person – 1st person (as I), 2nd person (as you), or 3rd person (as he, she, it, they).</p>,
        <p key={2}>Personal pronouns may also take different forms depending on number (usually <strong>singular</strong> or <strong>plural</strong>), grammatical or natural gender, case, and formality. The term "personal" is used here purely to signify the grammatical sense; personal pronouns <i>are not limited to people and can also refer to animals and objects</i> (In Norwegian, the <i>pronomen</i> <strong>det</strong> gives us the sense).</p>,
        <Table
          key={3}
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
      ]
    ],
    [
      'Nouns (Substantiv)', [
        <p key={1}>Nouns in Norwegian have different types of gender (which are also called the <strong>articles</strong>).</p>,
        <Table
          key={2}
          caption="Norwegian Article of Noun"
          data={[
            ['-', 'hankjønn (masculine)', 'hunkjønn (feminine)', 'intetkjønn (neuter)'],
            ['Article', 'en', 'ei', 'et'],
            ['Example', 'en bil (a car)', 'ei jente (a girl)', 'et hus (a house)'],
            ['', 'en gut (a boy)', 'ei dør (a door)', 'et barn (a child)']
          ]}
        />,
        <p key={3}>If a noun is <strong>uncountable</strong>, for instance, milk, air, or water, an indefinite article is not used, and <strong>the uncountable words won't have plural</strong>.</p>,
        <p key={4}>In some Norwegian dialects <strong>the feminine gender is extinct</strong>. Because of this, <strong>almost all the adjectives of feminine gender can be used with articles of masculine gender</strong>.</p>
      ]
    ],
    [
      'Verbs', [
        <p key={1}>Most of the verb in present tense (presens) adds <strong>r</strong> in the end of the word. For instance:</p>,
        <List
          key={2}
          items={[
            <span>snakke {icon('long-arrow-right')} snakke<strong>r</strong> (speak)</span>,
            <span>lese {icon('long-arrow-right')} lese<strong>r</strong> (read)</span>,
            <span>bo {icon('long-arrow-right')} bo<strong>r</strong> (live)</span>,
            <span>ha {icon('long-arrow-right')} ha<strong>r</strong> (have)</span>
          ]}
        />,
        <p key={3}>For instance: Jeg <strong>bor</strong> i Oslo. (I live in Oslo.)</p>,
        <p key={4}><strong>Infinitives</strong> have the word <strong>å</strong> at the beginning:</p>,
        <List
          key={5}
          items={[
            <span>snakke {icon('long-arrow-right')} <strong>å</strong> snakke (to speak)</span>,
            <span>lese {icon('long-arrow-right')} <strong>å</strong> lese (to read)</span>,
            <span>bo {icon('long-arrow-right')} <strong>å</strong> bo (to live)</span>,
            <span>ha {icon('long-arrow-right')} <strong>å</strong> ha (to have)</span>
          ]}
        />,
        <p key={6}>However, some of the verbs in Norwegian is irregular, for instance:</p>,
        <List
          key={7}
          items={[
            <span>å vite (to know) {icon('long-arrow-right')} vet / veit (know)</span>,
            <span>å gjøre (to do) {icon('long-arrow-right')} gjør (do)</span>,
            <span>å si (to say) {icon('long-arrow-right')} sier (say)</span>,
            <span>å spørre (to ask) {icon('long-arrow-right')} spør (ask)</span>,
            <span>å være (to be) {icon('long-arrow-right')} er (be)</span>
          ]}
        />
      ]
    ],
    [
      'Forming Sentences', [
        <p key={1}>Forming Sentences</p>
      ]
    ],
    [
      'Asking Questions', [
        <p key={1}>Asking Questions</p>
      ]
    ],
    [
      'Conversation II - Languages', [
        <p key={1}>Conversation II - Languages</p>
      ]
    ],
    [
      'Numbers I (et tall)', [
        <p key={1}>Counting in Norwegian from 0 ~ 10.</p>,
        <Table
          key={2}
          caption="Number from 0 ~ 10"
          data={[
            ['Number', 'Norwegian', 'Number', 'Norwegian'],
            ['0', 'null', '6', 'seks'],
            ['1', 'én / éi / et', '7', 'sju / syv'],
            ['2', 'to', '8', 'åtte'],
            ['3', 'tre', '9', 'ni'],
            ['4', 'fire', '10', 'ti'],
            ['5', 'fem', '', '']
          ]}
        />,
        <p key={3}>Counting in Norwegian from 11 ~ 20.</p>,
        <Table
          key={4}
          caption="Number from 11 ~ 20"
          data={[
            ['Number', 'Norwegian', 'Number', 'Norwegian'],
            ['11', 'elleve', '16', 'seksten'],
            ['12', 'tolv', '17', 'sytten'],
            ['13', 'tretten', '18', 'åtten'],
            ['14', 'fjorten', '19', 'nitten'],
            ['15', 'femten', '20', 'tjue / tyve']
          ]}
        />
      ]
    ],
    [
      'Vocabulary I', [
        <p key={1}>Vocabulary I</p>
      ]
    ],
    [
      'Modal Verb', [
        <p key={1}>Modal Verb</p>
      ]
    ],
    [
      'Conversation III - Professions', [
        <p key={1}>Conversation III - Professions</p>
      ]
    ],
    [
      'Conjunctions (Konjuksjoner)', [
        <p key={1}>Conjunctions (Konjuksjoner)</p>
      ]
    ],
    [
      'Number II (et tall)', [
        <p key={1}>Counting the tens in Norwegian.</p>,
        <Table
          key={2}
          caption="Tens of Number in Norwegian"
          data={[
            ['Number', 'Norwegian', 'Number', 'Norwegian'],
            ['10', 'ti', '60', 'seksti'],
            ['20', 'tjue / tyve', '70', 'sytti'],
            ['30', 'tretti', '80', 'åtti'],
            ['40', 'førti', '90', 'nitti'],
            ['50', 'femti', '100', 'et/en hundre']
          ]}
        />,
        <p key={3}>Compound number <strong>combines the tens part and the number 0 ~ 9 part</strong>, for instance, to count from 21 ~ 30:</p>,
        <Table
          key={4}
          caption="Counting from 21 ~ 30"
          data={[
            ['Number', 'Norwegian', 'Number', 'Norwegian'],
            ['21', 'tjueen', '26', 'tjueseks'],
            ['22', 'tjueto', '27', 'tjuesju / tjuesyv'],
            ['23', 'tjuetre', '28', 'tjueåtte'],
            ['24', 'tjuefire', '29', 'tjueni'],
            ['25', 'tjuefem', '30', 'tretti']
          ]}
        />
      ]
    ],
    [
      'Vocabulary II', [
        <p key={1}>Vocabulary II</p>
      ]
    ],
  ]
}

export default Main;
