import React from 'react';
import { shallow } from 'enzyme';

import LandingPage from './LandingPage';

describe('LandingPage', () => {
  const landingPage = shallow(<LandingPage />);

  it('should render', () => {
    expect(landingPage).toMatchSnapshot();
  });
});
