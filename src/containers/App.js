import * as React from 'react';
import * as PropTypes from 'prop-types';
import styled from 'styled-components';

import Header from '../components/Header';

const Wrapper = styled.div`
  height: 100%;
`;

const AppContainer = ({ children }) => (
  <Wrapper>
    <Header />
    {children}
  </Wrapper>
);

AppContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppContainer;
