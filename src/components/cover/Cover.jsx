import React from 'react';

import './cover.scss';

import logo from './images/logo.svg';
import puppinessOGV from './video/puppiness.ogv';
import puppinessWEBM from './video/puppiness.webm';
import puppinessMP4 from './video/puppiness.mp4';

const Cover = () => (
  <div className="yta_Cover">
    <img src={logo} className="yta_Cover-logo" alt="Hogares para nuestros amigos" />
    <video autoPlay muted loop className="yta_Cover-video">
      <source src={puppinessOGV} type="video/ogg" />
      <source src={puppinessWEBM} type="video/webm" />
      <source src={puppinessMP4} type="video/mp4" />
    </video>
  </div>
)

export default Cover;