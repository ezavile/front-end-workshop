import React from 'react';

import { MainLayout } from '../../layouts';
import { Cover, ListPets } from '../../components';

import './landingPage.scss';

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

const LandingPage = () => (
  <MainLayout>
    <Cover />
    <section className="yta_Landing-recentPets">
      <h2 className="yta_Landing-recentPets-title">Busco un hogar ¿me adoptas?</h2>
      <ListPets pets={pets} />
    </section>
  </MainLayout>
);

export default LandingPage;
