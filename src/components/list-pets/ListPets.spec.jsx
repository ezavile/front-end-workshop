import React from 'react';
import { shallow } from 'enzyme';

import PetCard from '../pet-card';
import ListPets from './ListPets';

describe('ListPets', () => {
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
  const listPets = shallow(<ListPets pets={pets} />);

  it('should render', () => {
    expect(listPets).toMatchSnapshot();
  });

  it('should render two <PetCard />', () => {
    expect(listPets.find(PetCard).length).toBe(2);
  });
});
