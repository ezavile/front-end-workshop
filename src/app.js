import 'evil-icons/assets/evil-icons.js';
import React from 'react';
import ReactDOM from 'react-dom';

import './scss/app';

import Header from './components/header';
import Cover from './components/cover';
import Footer from './components/footer';

const App = () => <React.Fragment><Header /><main><Cover /></main><Footer /></React.Fragment>;

ReactDOM.render(<App />, document.getElementById('root'));
