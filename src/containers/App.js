import * as React from 'react';
import * as PropTypes from 'prop-types';
import styled from 'styled-components';

import Header from '../components/Header';
import Footer from '../components/Footer';

const Wrapper = styled.div`
  height: 100%;
`;

const AppContainer = ({ children }) => (
  <Wrapper>
    <Header />
    {children}
    <Footer />
  </Wrapper>
);

AppContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppContainer;
