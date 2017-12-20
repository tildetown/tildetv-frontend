import * as React from 'react';
import * as PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.main`
  margin: 2rem 0;
`;

const PageContainer = ({ children }) => (
  <Wrapper role="main">
    {children}
  </Wrapper>
);

PageContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageContainer;
