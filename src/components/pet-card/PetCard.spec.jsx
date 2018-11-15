import React from 'react';
import { shallow } from 'enzyme';

import PetCard from './PetCard';

describe('PetCard', () => {
  const petCard = shallow(
    <PetCard id="abc-def" img="benito.png" name="Benito" details="some details about benito el perrito" />
  );

  it('should render', () => {
    expect(petCard).toMatchSnapshot();
  });
});
