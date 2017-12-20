/* eslint-env node, jest */

import React from 'react';
import { shallow } from 'enzyme';
import Root from './Root';

describe('Root', () => {
  it('renders without crashing', () => {
    shallow(<Root />);
  });
});
