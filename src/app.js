import React from 'react';
import ReactDOM from 'react-dom';

import './scss/app';

import Header from './components/header';
import Cover from './components/cover';

const App = () => <React.Fragment><Header /><main><Cover /></main></React.Fragment>;

ReactDOM.render(<App />, document.getElementById('root'));
