import * as React from 'react';
import * as PropTypes from 'prop-types';
import styled from 'styled-components';

import Container from '../components/Container';

const Wrapper = styled.main`
  margin: 2rem 0;
`;

const PageContainer = ({ children, isFluid }) => (
  <Wrapper role="main">
    <Container fluid={isFluid}>
      <article>{children}</article>
    </Container>
  </Wrapper>
);

PageContainer.propTypes = {
  children: PropTypes.node.isRequired,
  isFluid: PropTypes.bool,
};

PageContainer.defaultProps = {
  isFluid: false,
};

export default PageContainer;
