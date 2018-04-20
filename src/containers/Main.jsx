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
        <p key={1}>Simple ways of saying <strong>"Hello"</strong></p>,
        <Checkbox key={2}>Halo! Hei!</Checkbox>,
        <p key={3}>Asking someone <strong>"How are you?"</strong></p>,
        renderCheckboxes([
          'Hvordan går det?',
          'Hvordan har du det?',
          'Hvordan står det til?',
          'Hvordan går det med dere?'
        ]),
        <p key={4}>Asking someone <strong>"Is everything Okay?"</strong></p>,
        renderCheckboxes([
          'Går det bra?',
          'Har du det bra?',
          'Står det bra til?'
        ]),
        <p key={5}>Responding to someone's greeting:</p>,
        renderCheckboxes([
          'Bra! (Good!)',
          'Veldig bra! (Very good!)',
          'Fint! (Great!)',
          'Ja takk, bare bra. Og du? (Yes, thank you. And you?)'
        ]),
        <p key={6}>Saying <strong>"Nice to meet you."</strong></p>,
        renderCheckboxes([
          'Hyggelig å møte deg.',
          'Hyggelig å hilse på deg.',
          'Artig å treffe deg.',
          'I like måte. (Nice to meet you also.)'
        ]),
        <p key={7}>Saying <strong>"Goodbye."</strong></p>,
        renderCheckboxes([
          'Ha det bra. (When response, using "Ha det." only)',
          'Vi sees / høres / møtes.',
          'På gjensyn.',
          'Adjø.',
          'Farvel.'
        ])
      ]
    ],
    [
      'Conversation II - Common Phrases', [
        <p key={1}>Asking <strong>name</strong> & responses:</p>,
        renderCheckboxes([
          'Hva heter du? (What is your name?)',
          'Jeg heter Maxwell. (My name is Maxwell.)'
        ]),
        <p key={2}>Asking somebody from somewhere & responses:</p>,
        renderCheckboxes([
          'Hvor er du fra? (Where are you from?)',
          'Hvor kommer du fra? (Where do you come from?)',
          'Jeg er fra Norsk. (I am from Norway.)',
          'Jeg kommer fra Norsk. (I come from Norway)'
        ]),
        <p key={3}>Positive / Negative / Neuter:</p>,
        renderCheckboxes([
          'Ja. (Yes)',
          'Nei. (No)',
          'Kanskje. (Maybe / Probably)',
          'Ja, litt. (Yes, a little.)'
        ]),
        <p key={4}>Appreciations & Saying <strong>"Your welcome."</strong></p>,
        renderCheckboxes([
          'Takk. (Thanks.)',
          'Tusen takk. (Many thanks.)',
          'Mange takk. (Many thanks.)',
          'Takk skal du ha. (Thanks to you.)',
          'Være så god. (You\'re welcome. / No problem.)'
        ]),
        <p key={5}>Hint: <i>"Takk skal du ha."</i> normally is written as <i>"Du skal ha takk."</i> which means <strong>"You shall have my thanks."</strong>.</p>,
        <p key={6}>Excuse or saying sorry:</p>,
        renderCheckboxes([
          'Unnskyld! / Unnskyld meg! (Sorry! / Excuse me!)',
          'Beklager. (Sorry.)'
        ]),
        <p key={7}>Saying <strong>"Welcome"</strong></p>,
        renderCheckboxes(['Velkommen!']),
        <p key={8}>Confession:</p>,
        renderCheckboxes([
          'Jeg elsker deg! (I love you!)',
          'Jeg er glad i deg! (I\'m fond of you!)'
        ]),
        <p key={9}>Saying <strong>"Please"</strong></p>,
        renderCheckboxes([
          'Være så snill. (Would you be so kind. / Please)',
          'Ja, takk. (Yes, please.)',
          'Vennligst. (Please. [Formal])'
        ]),
        <p key={10}>Hint: Norwegians simply aren’t used to modifying every imperative with such an explicit, tacked-on “politeness particle”. You would (hopefully) just convey your friendliness and politeness with your general tone and attitude instead. (According to the question <a href="https://www.quora.com/How-do-you-say-please-in-Norwegian">"How do you say "please" in Norwegian?" in Quora</a>.)</p>
      ]
    ],
    [
      'Conversation III - Blessings', [
        <p key={1}><strong>Congratulation</strong> to someone:</p>,
        renderCheckboxes(['Gratulerer med dagen!']),
        <p key={2}>Common blessings:</p>,
        renderCheckboxes([
          'Lykke til! (Good luck!)',
          'God tur! / God reise! (Good trip!)',
          'God sommer! (Good summer!)',
          'God helg! (Nice weekend!)',
          'Ha en fin dag! (Have a nice day!)',
          'Skål! (Cheers)',
          'God appetitt! / Vel bekomme! (Nice meal!)'
        ]),
        <p key={3}>Holiday:</p>,
        renderCheckboxes([
          'God ferie! (Good holiday!)',
          'God ju! (Merry Christmas!)',
          'God påske! (Happy Easter!)',
          'Godt nyttår! (Happy new year!)',
        ]),
        <p key={4}>Grief:</p>,
        renderCheckboxes(['Kondolerer. (My condolence.)']),
        <p key={5}>Sickness improvement:</p>,
        renderCheckboxes(['God bedring. (Get well soon.)'])
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
      'Conversation IV - Languages', [
        <p key={1}>Asking someone who able to speak particular language:</p>,
        renderCheckboxes([
          'Kan du tysk? (Can you speak German?)',
          'Snakke du fransk? (Can you speak French?)'
        ]),
        <p key={2}>Response:</p>,
        renderCheckboxes([
          'Jeg kan russisk. (I can speak Russian.)',
          'Jeg kan snakke norsk. (I can speak Norwegian.)'
        ]),
        <p key={3}><strong>Don't know</strong> or <strong>don't understand</strong>:</p>,
        renderCheckboxes([
          'Jeg vet ikke. (I don\'t know.)',
          'Jeg forstår / skjønner ikke. (I don\'t understand.)',
        ]),
        <p key={4}>Hint: <strong>"ikke"</strong> is one of the <i>sentence circumstance</i> which represent <strong>negativity</strong>. You can skip to this section. (WIP)</p>,
        <p key={5}>Asking to <strong>repeat</strong> or repeat in specific circumstance:</p>,
        renderCheckboxes([
          'Hva sier du? (What did you say?)',
          'Kan du si det igjen? (Can you say that again?)',
          'Vær vennlig og snakke saktere? (Please speak more slowly.)',
          // 'Kan du være så snill å snakke litt saktere? ',
          'Kan du være så snill å skrive det ned? (Can you write it down?)'
        ]),
        <p key={6}>List of languages:</p>,
        <List
          key={7}
          items={[
            'Norsk (Norwegian)',
            'Fransk (French)',
            'Tysk (German)',
            'Engelsk (English)',
            'Russisk (Russian)',
            'Polsk (Polish)'
          ]}
        />
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
        <p key={3}>Counting in Norwegian from 11 ~ 20, most of them have ending of <strong>-en</strong></p>,
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
      'Conversation V - Professions', [
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
        <p key={1}>Counting the tens in Norwegian, most of them have ending <strong>-ti</strong>.</p>,
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
        <p key={3}>Compound number <strong>combines the tens part and the number 0 ~ 9 part</strong> which forms the number ranged from 21 ~ 99, for instance, to count from 21 ~ 30:</p>,
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
        />,
        <p key={4}>Counting the hundreds in Norwegian, which is the number from 1 ~ 9 combines with the word <strong>hundre</strong>.</p>,
        <Table
          key={5}
          caption="Hundreds of Number in Norwegian"
          data={[
            ['Number', 'Norwegian', 'Number', 'Norwegian'],
            ['100', 'en / ett hundre', '600', 'seks hundre'],
            ['200', 'to hundre', '700', 'sju hundre'],
            ['300', 'tre hundre', '800', 'åtte hundre'],
            ['400', 'fire hundre', '900', 'ni hundre'],
            ['500', 'fem hundre', '1000', 'en / ett tusen']
          ]}
        />,
        <p key={6}>Combound number <strong>combines the hundreds with the number ranged in 0 ~ 99</strong> with the word <strong>og</strong> (<i>"and"</i> in Norwegian) which forms the number ranged from 100 ~ 999, for instance:</p>,
        <Table
          key={7}
          caption="Example Compound Number from 1 ~ 1000 in Norwegian"
          data={[
            ['Number', 'Norwegian', 'Number', 'Norwegian'],
            ['252', 'to hundre og femtito', '105', 'hundre og fem'],
            ['303', 'tre hundre og tre', '670', 'seks hundre og sytti'],
            ['106', 'hundre og seks', '171', 'hundre og syttien'],
            ['201', 'to hundre og en', '297', 'to hundre og nittisju'],
            ['345', 'tre hundre og førtifem', '867', 'åtte hundre og sekstisju']
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
