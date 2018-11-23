import React from 'react';
import { shallow } from 'enzyme';

import SocialNetwork from './social-network';
import Footer from './Footer';

describe('Footer', () => {
  const footer = shallow(<Footer />);

  it('should render', () => {
    expect(footer).toMatchSnapshot();
  });

  it('should render four <SocialNetwork />', () => {
    expect(footer.find(SocialNetwork).length).toBe(4);
  });
});
