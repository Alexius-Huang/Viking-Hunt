import React, { Component } from 'react';
import Section from './Grammer.Section';
import Checkbox from '../components/Checkbox';
import Table from '../components/Table';
import List from '../components/List';
import Audio from '../components/Audio';
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
        <p key={2}>A B C D E F G H I J K L M N O P Q R S T U V W X Y Z Æ Å Ø</p>,
        <Audio key={3} />
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
          'Ja takk, gjerne det. (Yes, thank you! / Pleasure. / Gladly.)',
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
      'Nouns I - Substantiv', [
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
      'Vocabulary I - Family (en familie)', [
        <p key={1}>Younger ages member:</p>,
        <List key={2} items={[
          'baby (m.) baby',
          'barn (n. / pl.) child / children',
          'sønn (m.) son',
          'datter (f.) daughter',
          'bror (m.) brother',
          'søster (f.) sister',
          'søsken (n.) siblings',
          'nevø (m.) nephew',
          'neise (f.) neice',
          'kusine (f.) / fetter (m.) cousin',
          'søskenbarn (n.) cousins',
          'kjæreste (m.) boyfriend / girlfriend',
          'barnebarn (n.) grandchild / grandchildren / grandson / granddaughter',
          'oldebarn (n.) great grandchild ...etc',
          'tipp oldebarn (n.) great great grandchild ...etc',
          'tipp tipp oldebarn (n.) great great great grandchild ...etc'
        ]} />,
        <p key={3}>Adult member:</p>,
        <List key={4} items={[
          'familiemedlem (n.) a family member',
          'foreldre (pl.) parents',
          'en far, pappa (m.) father',
          'en mor, mamma (f.) mother',
          'ektemann / mann (m.) husband',
          'kone (f.) wife',
          'onkel (m.) uncle',
          'tante (f.) aunt',
          'enkemann (m.) widower',
          'enke (f.) widow',
          'ungkar (m.) bachelor',
          'peppermø (f.) spinster',
          // 'en do (toilet)',
          // 'et kurs (a course)',
          // 'å hilse (to greet)',
          // 'å gjøre (to do) / gjør (do)',
          // 'å kunne (to be able)',
          // 'å gå (to go)',
          // 'å jobbe (to work)',
          // 'å spise (to eat)',
          // 'å sove (to sleep)',
          // 'å forstå (to understand)'
        ]} />,
        <p key={5}>Older members:</p>,
        <List key={6} items={[
          'besteforelder (pl.) grandparents',
          'bestefar (m.) grandfather',
          'oldefar (m.) great grandfather',
          'tippoldefar (m.) great great grandfather',
          'tipp-tippoldefar (m.) great great great grandfather',
          'farfar (m.) paternal grandfather',
          'morfar (m.) maternal grandfather',
          'bestemor (f.) grandmother',
          'oldemor (m.) great grandmother',
          'tippoldemor (m.) great great grandmother',
          'tipp-tippoldemor (m.) great great great grandmother',
          'farmor (f.) paternal grandmother',
          'mormor (f.) maternal grandmother'
        ]} />,
        <p key={7}>To denote that a relationship is not of blood, but of <strong>legal adoption</strong>, add <strong>adoptiv-</strong> to the beginning of a relationship word. For example, "barn" means child so "<strong>adoptiv</strong>barn" means "adopted child".</p>,
        <p key={8}>To denote that a close relationship is not of blood, but of <strong>marriage</strong>, add <strong>ste-</strong> to the beginning of a relationship word. For example, "far" means father so "<strong>ste</strong>far" means "step-father".</p>,
        <p key={9}>To denote that a <i>more distant relationship is not of blood, but of marriage</i>, add <strong>sviger-</strong> to the beginning of a relationship word. For example, "far" means father so "<strong>sviger</strong>far" means "father-in-law". But there are still exceptions:</p>,
        <List key={10} items={[
          'svoger (m.) brother-in-law',
          'svigerinne (f.) sister-in-law'
        ]} />,
        <p key={11}>State of familiy:</p>,
        renderCheckboxes([
          <span>Han er <strong>gift</strong>. (He is married.)</span>,
          <span>Hun er <strong>skilt</strong>. (She is divorced.)</span>,
          <span>Han er <strong>enkemann</strong>. (He is widowed.)</span>,
          <span>Hun er <strong>singel.</strong> (She is single.)</span>,
          <span>Vi er <strong>forlovet.</strong> (We are engaged.)</span>,
          <span>Jeg er <strong>gravid.</strong> (I am pregnant.)</span>,
          // 'Dette er dattern min. (This is my daughter.)'
        ]),
        <p key={12}>Hint: Information from <a href="http://norwayathome.info/names-for-family-relationships/">norwayathome.info - Names for Family Relationships</a></p>
      ]
    ],
    [
      'Verbs (Presens & Infinitiv)', [
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
      'Vocabulary II - Common Verbs', [
        <List
          key={1}
          items={[
            <span><strong>å se</strong> (v.) to see / watch</span>,
            <span><strong>å høre</strong> (v.) to listen</span>,
            <span><strong>å drikke</strong> (v.) to drink</span>,
            <span><strong>å spise</strong> (v.) to eat</span>,
            <span><strong>å like</strong> (v.) to like</span>,
            <span><strong>å si</strong> (v.) to tell (presens: <strong>sier</strong>)</span>,
            <span><strong>å male</strong> (v.) to paint</span>,
            <span><strong>å bake</strong> (v.) to bake</span>,
            <span><strong>å hjelpe</strong> (v.) to help</span>,
            <span><strong>å tenke</strong> (v.) to think</span>,
            <span><strong>å forstette</strong> (v.) to continue</span>,
            <span><strong>å sveise</strong> (v.) to weld</span>,
            <span><strong>å kjøre</strong> (v.) to drive</span>,
            <span><strong>å behandle</strong> (v.) to heal</span>,
            <span><strong>å ragne</strong> (v.) to count</span>,
            <span><strong>å dyrke</strong> (v.) to cultivate / grow</span>,
            <span><strong>å arbeide</strong> (v.) to work / operate</span>,
            <span><strong>å levere</strong> (v.) to deliver</span>,
            <span><strong>å studere</strong> (v.) to study</span>,
            <span><strong>å lede</strong> (v.) to lead / guide / conduct</span>,
            <span><strong>å yte</strong> (v.) to give / provide</span>,
            <span><strong>å koke</strong> (v.) to cook / boil</span>,
            <span><strong>å gjøre</strong> (v.) to do / act / make</span>,
            <span><strong>å avslutte</strong> (v.) to finish</span>
          ]}
        />,
        <p key={2}>Some common usage:</p>,
        <List
          key={3} stateless items={[
            <span>å se på norsk TV (to watch Norwegian TV shows)</span>,
            <span>å høre på norsk radio (to listen to Norwegian radio)</span>,
            <span>å høre på norske sange (to listen to Norwegian songs)</span>
          ]}
        />
      ]
    ],
    [
      'Forming Sentences I - Basics', [
        <p key={1}>Basic setence structure usually starts with a <strong>subject (subjekt)</strong>.</p>,
        <p key={2}>The second place must comes with a <strong>predicate (predikat) which describes an action</strong>.</p>,
        <p key={3}>Lastly, some sentences can have an <strong>object (objekt)</strong>. For instance:</p>,
        <List
          key={4} stateless
          items={[
            <span>Jeg <strong>står</strong> opp veldig tidlig. (I wake up early.)</span>,
            <span>Jeg <strong>bor</strong> i Oslo. (I live in Oslo.)</span>,
            <span>Nå <strong>bor</strong> jeg i Oslo. (I live in Oslo now.)</span>,
            <span>Han <strong>leser</strong> bøker. (He reads books.)</span>,
            <span>Nå <strong>leser</strong> han bøker. (Now he is reading books.)</span>
          ]}
        />,
        <p key={5}>Hint: From the examples above, you can always know that <strong>the predicate comes at the 2nd place</strong> while some sentences might have different order in subject or object.</p>
      ]
    ],
    [
      'Forming Sentences II - Asking Questions', [
        <p key={1}>There are two ways of asking questions <strong>(et spørsmål)</strong> in Norwegian: the <strong>close questions</strong> or the <strong>open questions</strong>.</p>,
        <p key={2}>The close questions, so-called the <strong>yes/no questions</strong>, have no interrogative words, simply <strong>place the predicate to the first place</strong> while didn't change the order of the other part. For instance:</p>,
        <List
          key={3} stateless
          items={[
            <span><strong>Bor</strong> du i Oslo? (Do you live in Oslo?)</span>,
            <span><strong>Kommer</strong> han fra Bergan? (Is he come from Oslo?)</span>
          ]}
        />,
        <p key={4}>Another type of questions are close questions, in Norwegian it is also known as the <strong>HV-questions</strong>. Usually begins with <strong>interrogative words</strong> which starts with <strong>hv-</strong>, after which a predicate or the first verb of the predicate comes. The HV-interrogative words are listed below:</p>,
        <List
          key={5}
          items={[
            <span>Hva? {icon('long-arrow-right')} What?</span>,
            <span>Hvem? {icon('long-arrow-right')} Who?</span>,
            <span>Hvor? {icon('long-arrow-right')} Where?</span>,
            <span>Hvorfor? {icon('long-arrow-right')} Why?</span>,
            <span>Hvordan? {icon('long-arrow-right')} How?</span>,
            <span>Når? {icon('long-arrow-right')} When?</span>,
            <span>Hvilk<strong>en</strong> (Masculine + Feminine) / Hvilk<strong>et</strong> (Neuter) / Hvilk<strong>e</strong> (Plural) {icon('long-arrow-right')} Which?</span>
          ]}
        />,
        <p key={6}>Some useful question starter:</p>,
        <List
          key={7}
          items={[
            <span>Hvor mange? {icon('long-arrow-right')} How many? (Countable nouns)</span>,
            <span>Hvor mye? {icon('long-arrow-right')} How much? (Uncountable nouns)</span>,
            <span>Hvor gammel? {icon('long-arrow-right')} How old?</span>,
            <span>Hvor lang? / Hvor lang tid? / Hvor lenge? {icon('long-arrow-right')} How long? / How much time?</span>,
            <span>Hvor ofte? {icon('long-arrow-right')} How often?</span>
          ]}
        />,
        <p key={8}>For example:</p>,
        <List
          key={9} stateless
          items={[
            <span><strong>Hvor gammel</strong> er du? (How old are you?)</span>,
            <span><strong>Hva</strong> skal du kjøpe? (What will you buy?)</span>,
            <span><strong>Hva</strong> er det? (What is it?)</span>,
            <span><strong>Hvem</strong> er det? (Who is it?)</span>
          ]}
        />
      ]
    ],
    [
      'Conversation IV - Languages', [
        <p key={1}>Asking someone who able to speak particular language (et språk):</p>,
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
      'Vocabulary III - Professions (et yrke)', [
        <p key={1}>Asking people's profession:</p>,
        renderCheckboxes([
          <span><strong>Hva er ditt yrke?</strong> (What is your profession?)</span>,
          'Jeg er norsk lærer. (I am Norwegian teacher.)'
        ]),
        <p key={2}>List of professions:</p>,
        <List
          key={3}
          items={[
            'lærer (m./f.) teacher',
            'maler (m./f.) painter',
            'kokk (m.) / kokke (f.) cook',
            'ingeniør (m./f.) engineer',
            'mekaniker (m./f.) mechanic',
            'fabrikkarbeider (m./f.) factory worker',
            'sveiser (m./f.) welder',
            'daglig leder (m./f.) director / CEO',
            'sjåfør (m./f.) driver',
            'bussjåfør (m./f.) bus driver',
            'lastebilsjåfør (m./f.) truck driver',
            'truckfører (m./f.) fork-lift driver',
            'sykepleier (m./f.) nurse',
            'lege (m./f.) doctor',
            'tannlege (m./f.) dentist',
            'regnskapsfører (m./f.) accountant',
            'rengjøringsarbeider / renholder (m./f.) cleaner',
            'elektriker (m./f.) electrician',
            'prosjektleder (m./f.) project manager',
            'jurist (m./f.) lawyer',
            'bonde (m./f.) farmer',
            'fisker (m./f.) fisher',
            'oljearbeider (m./f.) oil worker',
            'postmann (m./f.) postman',
            'student (m./f.) student',
            'politi (m./f.) police',
            'prest (m./f.) priest',
            'frisør (m./f.) hair dresser',
            'servitør (m./f.) waiter',
            'skredder (m./f.) tailor',
            'snekker (m./f.) carpenter',
            'kasserer (m.) / kassadame (f.) cashier'
          ]}
        />,
        <p key={4}>Hint: "Truck" in Norwegian is fork-lift instead of "truck"</p>,
        <p key={5}>List of working places:</p>,
        <List
          key={6}
          items={[
            'utdanning (m.) education',
            'søknad	(m.) application',
            'arbeidsplass (m.) workplace',
            'kontor (n.) office',
            'sykehus (n.) hospital',
            'sykehjem (n.) nursing home',
            'politistasjon (m.) police station',
            'frisørsalong (m.) hair dressing salon',
            'hotell (n.) hotel',
            'restaurant (m.) restaurant',
            'gård (n.) farm',
            'verksted (n.) workshop',
            'fabrikk (m.) factory',
            'systue (f.) sewing place',
            'kirke (f.) church'
          ]}
        />
      ]
    ],
    [
      'Numbers I', [
        <p key={1}>Counting numbers (<i>et tall</i>) in Norwegian from 0 ~ 10.</p>,
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
      'Modal Verb', [
        <p key={1}>Modal verb (modale verb), in Norwegian is known as <strong>hjelpeverb</strong>, subsidiary verb which helps describe the state or the action of the successive verb. The modal verbs in Norwegian are listed below:</p>,
        <List
          key={2}
          items={[
            <span>å <strong>kunne</strong> (to be able / can) {icon('long-arrow-right')} <strong>kan</strong> (can)</span>,
            <span>å <strong>ville</strong> (to want) {icon('long-arrow-right')} <strong>vil</strong></span>,
            <span>å <strong>skulle</strong> (will) {icon('long-arrow-right')} <strong>skal</strong></span>,
            <span>å <strong>måtte</strong> (must / have to) {icon('long-arrow-right')} <strong>må</strong></span>,
            <span>å <strong>burde</strong> (should) {icon('long-arrow-right')} <strong>bør</strong></span>
          ]}
        />,
        <p key={3}>Hint: <strong>"å skulle"</strong> is a kind of subsidiary verb in making the <strong>future tense</strong> in Norwegian, like the word "will" in English</p>,
        <p key={4}>Making sentence with modal verbs in Norwegian:</p>,
        <List
          key={5} stateless
          items={[
            <span>Jeg <strong>kan</strong> snakke norsk.</span>,
            <span><strong>Kan</strong> du hjelpe oss med modale verb?</span>,
            <span>Han <strong>kan</strong> male.</span>,
            <span>Hun <strong>kan</strong> hjelpe.</span>,
            <span>Jeg <strong>vil</strong> se på TV.</span>,
            <span>Jeg <strong>skal</strong> male.</span>,
            <span>Du <strong>skal</strong> gå.</span>,
            <span>Jeg <strong>skal</strong> hjelpe.</span>,
            <span>Jeg <strong>må</strong> tenke litt. (I have to think a little.)</span>,
            <span>Vel, vi <strong>må</strong> fortsette videre. (Well, we must continue further.)</span>,
            <span>Jeg <strong>bør</strong> snakke norsk.</span>,
            <span>Jeg <strong>bør</strong> hjelpe.</span>
          ]}
        />
      ]
    ],
    [
      'Conjunctions (Konjuksjoner)', [
        <p key={1}>Conjunctions are <strong>words that link other words, phrases, or clauses together</strong>. List of the conjunctions in Norwegian:</p>,
        <List
          key={2}
          items={[
            <span><strong>og</strong> (and)</span>,
            <span><strong>at</strong> (that, in order to)</span>,
            <span><strong>men</strong> (but)</span>,
            <span><strong>eller</strong> (or)</span>,
            <span><strong>for</strong> (because)</span>,
            <span><strong>fordi</strong> (for / because)</span>,
            <span><strong>hvis</strong> (if)</span>,
            <span><strong>da</strong> (whereas)</span>,
            <span><strong>som</strong> (which)</span>,
            <span><strong>silk at</strong>, <strong>så at</strong> (such that)</span>,
            <span><strong>så lenge</strong> (as long as)</span>,
            <span><strong>siden</strong> (since then)</span>,
            <span><strong>om</strong> (or, if)</span>,
            <span><strong>enda</strong> / <strong>selv om</strong> (though / although)</span>,
            <span><strong>når</strong> (as, while)</span>,
            <span><strong>etter at</strong> (after)</span>,
            <span><strong>før</strong> (before)</span>,
            <span><strong>mens</strong> (while)</span>
          ]}
        />,
        <p key={3}>For instance:</p>,
        <List
          key={4} stateless
          items={[
            <span>De danset <strong>og</strong> de sang. (They danced <strong>and</strong> they sang.)</span>,
            <span>De danset ikke <strong>men</strong> de sang. (They didn't dance <strong>but</strong> they sang.)</span>,
            <span>De ville ikke danse <strong>for</strong> de ville synge. (They wouldn't dangce because they would sing.)</span>,
            <span>Vil du danse <strong>eller</strong> vil du synge? (Will you dance or will you sing?)</span>,
            <span>Hun sa <strong>at</strong> hun skulle komme. (She said <strong>that</strong> she would come.)</span>,
            <span>Hun spurte <strong>om</strong> hun skulle komme. (She asked <strong>if</strong> she would come.)</span>,
            <span>Lunsj hadde begynt <strong>da</strong> han kom. (Lunch has began <strong>when</strong> he came.)</span>,
            <span>Han vet ikke <strong>når</strong> hun kommer. (He doesn't know <strong>when</strong> she will come.)</span>,
            <span>De spiste <strong>etter at</strong> de hadde danset. (They ate <strong>after</strong> they had dance.)</span>,
            <span>Du kan komme <strong>hvis</strong> du vil. (You can come <strong>if</strong> you come.)</span>,
            <span><strong>Selv om</strong> han var syk, ville han på arbeid. (<strong>Although</strong> he was sick, he would go to work.)</span>,
            <span>Du kan spise <strong>mens</strong> vi snakker. (You can eat <strong>while</strong> we talk.)</span>,
            <span>Du må vaske opp <strong>før</strong> du kan spise. (You must wash up <strong>before</strong> you can eat.)</span>,
            <span>Han ventet <strong>siden</strong> det regnet. (He waited <strong>since</strong> it rained.)</span>,
            <span>Du kan ikke komme <strong>fordi</strong> du er sent. (You cannot come <strong>because</strong> you can late.)</span>,
            <span>Du kan vente <strong>så lenge</strong> du vil. (You can wait <strong>as long as</strong> you want.)</span>,
          ]}
        />
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
        <p key={5}>Counting the hundreds in Norwegian, which is the number from 1 ~ 9 combines with the word <strong>hundre</strong>.</p>,
        <Table
          key={6}
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
        <p key={7}>Combound number <strong>combines the hundreds with the number ranged in 0 ~ 99</strong> with the word <strong>og</strong> (<i>"and"</i> in Norwegian) which forms the number ranged from 100 ~ 999, for instance:</p>,
        <Table
          key={8}
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
      'Vocabulary IV - Food & Drinks', [
        <p key={1}>List of Drinks</p>,
        <List
          key={2}
          items={[
            <span><strong>drikke</strong> (n.) drink</span>,
            <span><strong>vann</strong> (n.) water</span>,
            <span><strong>melk</strong> (m.) milk</span>,
            <span><strong>jus / juice</strong> (m.) juice (without sugar)</span>,
            <span><strong>saft</strong> (m./f.) juice (with sugar)</span>,
            <span><strong>brus</strong> (m.) soda</span>,
            <span><strong>kaffe</strong> (m.) coffee</span>,
            <span><strong>te</strong> (m.) tea</span>,
            <span><strong>øl</strong> (n.) beer</span>,
            <span><strong>vin</strong> (m.) wine</span>,
          ]}
        />,
        <p key={3}>List of Foods</p>,
        <List
          key={4}
          items={[
            <span><strong>brød</strong> (n.) bread</span>,
            <span><strong>sjokoladeplate</strong> (m./f.) chocolate bar</span>,
            <span><strong>agurk</strong> (m.) cucumber</span>,
            <span><strong>bønne</strong> (m./f.) bean</span>,
            <span><strong>kjøtt</strong> (n.) meat</span>,
            <span><strong>svinekjøtt</strong> (n.) pork</span>,
            <span><strong>kyllingkjøtt</strong> (n.) chicken meat</span>,
            <span><strong>oksekjøtt / storfekjøtt</strong> (n.) beef</span>,
            <span><strong>kalkunkjøtt</strong> (n.) turkey meat</span>,
            <span><strong>grønnsak</strong> (m.) vegatable</span>,
            <span><strong>kål</strong> (m.) cabbage</span>,
            <span><strong>hodekål</strong> (m.) head of cabbage</span>,
            <span><strong>gulrot</strong> (m.) carrot (gulrøtter <i>(pl.)</i>)</span>,
            <span><strong>brokkoli</strong> (m.) broccoli (brokkoler <i>(pl.)</i>)</span>,
            <span><strong>paprika</strong> (m.) pepper</span>,
            <span><strong>potet</strong> (m.) potato</span>,
            <span><strong>løk</strong> (m.) onion</span>,
            <span><strong>hvitløk</strong> (m.) garlic</span>,
            <span><strong>frukt</strong> (m.) fruit</span>,
            <span><strong>ananas</strong> (m.) pineapple</span>,
            <span><strong>pære</strong> (m./f.) pear</span>,
            <span><strong>banan</strong> (m.) banana</span>,
            <span><strong>sitron</strong> (m.) lemon</span>,
            <span><strong>mango</strong> (m.) mango</span>,
            <span><strong>kiwi</strong> (m.) kiwi</span>
          ]}
        />,
        <p key={5}>Extended vocabularies:</p>,
        <List
          key={6}
          stateless items={[
            <span><strong>ett brød</strong> one loaf of bread</span>,
            <span><strong>grønn te</strong> (m.) green tea</span>,
            <span><strong>svart te</strong> (m.) black tea</span>,
            <span><strong>rødvin</strong> (m.) red wine</span>,
            <span><strong>hvitvin</strong> (m.) white wine</span>,
            <span><strong>vinmonopol</strong> (n.) wine shop / liquor store</span>,
          ]}
        />
      ]
    ],
    [
      'Nouns II - Plural', [
        <p key={1}>Plurals of nouns</p>
      ]
    ],
    [
      'Negative Sentences', [
        <p key={1}>Negative Sentences</p>
      ]
    ],
    [
      'Sentence Circumstance', [
        <p key={1}>Sentence Circumstance (setningsadverbial)</p>
      ]
    ],
    [
      'Adjective I - Rules', [
        <p key={1}>Adjective I - Rules</p>
      ]
    ],
    [
      'Adjective II - Exceptions', [
        <p key={1}>Adjective II - Exceptions</p>
      ]
    ],
    [
      'Forming Sentences III - "det" Sentences', [
        <p key={1}>Forming Sentences III - "det" Sentences</p>
      ]
    ],
    [
      'Vocabulary V - Weather (et vær)', [
        <p key={1}>Vocabulary III - Weather (et vær)</p>
      ]
    ],
    [
      'Word Order I - Principal Sentences', [
        <p key={1}>Word Order I - Principal Sentences</p>
      ]
    ],
    [
      'Word Order II - Principal Sentences in Question', [
        <p key={1}>Word Order II - Principal Sentences in Question</p>
      ]
    ],
    [
      'Word Order III - Subordinate Sentences', [
        <p key={1}>Word Order III - Subordinate Sentences</p>
      ]
    ],
    [
      'Conversation V - Travel', [
        <p key={1}>Conversation V - Travel</p>
      ]
    ],
    [
      'Vocabulary VI - Days of the Week (ei/en uke)', [
        <p key={1}>Vocabulary IV - Days of the Week (ei/en uke)</p>
      ]
    ]
  ]
}

export default Main;
