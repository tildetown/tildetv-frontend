import * as React from 'react';
import * as PropTypes from 'prop-types';
import Media from 'react-media';
import styled from 'styled-components';

import Header from '../components/Header';
import Footer from '../components/Footer';
import MobileNav from '../components/MobileNav';

const Wrapper = styled.div`
  height: 100%;
`;

const AppContainer = ({ children }) => (
  <Wrapper>
    <Header />
    <Media query="(max-width: 575px)" render={MobileNav} />
    {children}
    <Footer />
  </Wrapper>
);

AppContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppContainer;
