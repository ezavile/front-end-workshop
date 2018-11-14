import React from 'react';
import { shallow } from 'enzyme';

import SocialNetwork from './SocialNetwork';

describe('SocialNetwork', () => {
  const socialNetwork = shallow(<SocialNetwork site="facebook" />);

  it('should render', () => {
    expect(socialNetwork).toMatchSnapshot();
  });
});
