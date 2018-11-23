import React from 'react';
import { shallow } from 'enzyme';

import HeaderLink from './HeaderLink';

describe('HeaderLink', () => {
  const fakeEvent = jest.fn();
  const headerLink = shallow(<HeaderLink onClick={fakeEvent} label="fake link" />);

  it('should render', () => {
    expect(headerLink).toMatchSnapshot();
  });

  it('should have been fakeEvent called', () => {
    headerLink.find('button').simulate('click');
    expect(fakeEvent).toHaveBeenCalled();
  });
});
