import 'evil-icons/assets/evil-icons';
import React from 'react';
import ReactDOM from 'react-dom';

import './scss/app.scss';

import Header from './components/header';
import Cover from './components/cover';
import Footer from './components/footer';

/* eslint-disable */
const App = () => (
  <React.Fragment>
    <Header />
    <main>
      <Cover />
    </main>
    <Footer />
  </React.Fragment>
);
/* eslint-enable */

ReactDOM.render(<App />, document.getElementById('root'));
