import React from 'react';

import SocialNetwork from './social-network';

import './footer.scss';

const socialNetworks = [
  { url: 'www.facebook.com/yta', site: 'facebook' },
  { url: 'www.twitter.com/yta', site: 'twitter' },
  { url: 'www.instagram.com/yta', site: 'instagram' },
  { url: 'www.youtube.com/yta', site: 'youtube' },
];

const Footer = () => (
  <footer className="yta_Footer">
    <h2 className="yta_u-onlyRead">Redes sociales</h2>
    <ul className="yta_Footer-socialNetwork">
      {socialNetworks.map(({ url, site }) => (
        <SocialNetwork key={site} url={url} site={site} />
      ))}
    </ul>
    <p className="yta_Footer-copyright">Copyright © 2018 Yo te adopto.</p>
  </footer>
);

export default Footer;
