import React from 'react';
import ReactDOM from 'react-dom';

import './scss/app';

import Header from './components/header';

const App = () => <Header />;

ReactDOM.render(<App />, document.getElementById('root'));
