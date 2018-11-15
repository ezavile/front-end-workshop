import 'evil-icons/assets/evil-icons';
import React from 'react';
import ReactDOM from 'react-dom';

import './scss/app.scss';

import Header from './components/header';
import Cover from './components/cover';
import Footer from './components/footer';
import ListPets from './components/list-pets';

const pets = [
  {
    id: 'abc',
    img: 'https://duaw26jehqd4r.cloudfront.net/items/1M0C3r3X2t0x2q342A2A/benito.png?v=933367f2',
    name: 'Benito',
    details:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.',
  },
  {
    id: 'def',
    img: 'https://duaw26jehqd4r.cloudfront.net/items/0O3b091L2O3N3x1l2Q3Q/remmy.png?v=69c651fc',
    name: 'Remmy',
    details:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.',
  },
];

/* eslint-disable */
const App = () => (
  <React.Fragment>
    <Header />
    <main>
      <Cover />
      <ListPets pets={pets} />
    </main>
    <Footer />
  </React.Fragment>
);
/* eslint-enable */

ReactDOM.render(<App />, document.getElementById('root'));
