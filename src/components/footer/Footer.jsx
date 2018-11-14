import React from 'react';

import SocialNetwork from './social-network';

import './Footer.scss';

const socialNetworks = ['facebook', 'twitter', 'instagram', 'youtube'];

const Footer = () => (
  <footer className="yta_Footer">
    <h2 className="yta_u-onlyRead">Redes sociales</h2>
    <ul className="yta_Footer-socialNetwork">
      {
        socialNetworks.map(socialNetwork => <SocialNetwork key={socialNetwork} site={socialNetwork} />)
      }
    </ul>
    <p className="yta_Footer-copyright">Copyright © 2018 Yo te adopto.</p>
  </footer>
);

export default Footer;
