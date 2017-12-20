import * as React from 'react';
import styled from 'styled-components';

import Navigation from './Navigation';

const MobileNavWrapper = styled.div`
  display: flex;
  flex-direction: row;
  line-height: 1;
  background-color: #000;
`;

const MobileNav = () => (
  <MobileNavWrapper>
    <Navigation />
  </MobileNavWrapper>
);

export default MobileNav;
