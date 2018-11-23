import React from 'react';
import { shallow } from 'enzyme';

import MainLayout from './MainLayout';
import LandingPage from '../../pages/landing-page';

describe('MainLayout', () => {
  const mainLayout = shallow(
    <MainLayout>
      <LandingPage />
    </MainLayout>
  );

  it('should render', () => {
    expect(mainLayout).toMatchSnapshot();
  });
});
