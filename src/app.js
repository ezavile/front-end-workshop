import 'evil-icons/assets/evil-icons';
import React from 'react';
import ReactDOM from 'react-dom';

import './scss/app.scss';

import { LandingPage } from './pages';

/* eslint-disable */
const App = () => <LandingPage />;
/* eslint-enable */

ReactDOM.render(<App />, document.getElementById('root'));
