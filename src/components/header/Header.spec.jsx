import React from 'react';
import { mount } from 'enzyme';

import Header from './Header';
import HeaderLink from './header-link';

describe('Header', () => {
  let header;

  beforeEach(() => {
    header = mount(<Header />);
  });

  it('should render login form', () => {
    expect(header).toMatchSnapshot();
  });

  it('should render three <HeaderLink />', () => {
    header.setState({ loggedIn: true });
    expect(header.find(HeaderLink).length).toBe(3);
    expect(header).toMatchSnapshot();
  });
});
