import React from 'react';
import { mount } from 'enzyme';

import Header from './Header';
import HeaderLink from './header-link';

describe('Header', () => {
  let header;

  beforeEach(() => {
    header = mount(<Header />);
  });

  it('should render three <HeaderLink />', () => {
    header.find('button').simulate('click');
    expect(header.find(HeaderLink).length).toBe(3);
    expect(header).toMatchSnapshot();
  });

  it('should render one <HeaderLink />', () => {
    header.find('button').simulate('click');
    header
      .find('button')
      .last()
      .simulate('click');
    expect(header.find(HeaderLink).length).toBe(1);
    expect(header).toMatchSnapshot();
  });
});
