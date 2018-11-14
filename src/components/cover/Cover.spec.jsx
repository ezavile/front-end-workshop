import React from 'react';
import { shallow } from 'enzyme';

import Cover from './Cover';

jest.mock('./images/logo.svg', () => './images/logo.svg');
jest.mock('./video/puppiness.ogv', () => './video/puppiness.ogv');
jest.mock('./video/puppiness.webm', () => './video/puppiness.webm');
jest.mock('./video/puppiness.mp4', () => './video/puppiness.mp4');

describe('Cover', () => {
  const cover = shallow(<Cover />);

  it('should render', () => {
    expect(cover).toMatchSnapshot();
  });
});
