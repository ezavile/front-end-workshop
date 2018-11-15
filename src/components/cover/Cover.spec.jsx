import React from 'react';
import { shallow } from 'enzyme';

import Cover from './Cover';

describe('Cover', () => {
  const cover = shallow(<Cover />);

  it('should render', () => {
    expect(cover).toMatchSnapshot();
  });
});
