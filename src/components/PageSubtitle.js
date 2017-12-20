import * as React from 'react';
import * as PropTypes from 'prop-types';
import styled from 'styled-components';

const Subtitle = styled.p`
  margin: 1rem 0 2rem;
  position: relative;
  text-align: center;
  font-size: 1.25rem;
  font-weight: 300;
`;

const PageSubtitle = ({ children }) => (
  <Subtitle><span>{children}</span></Subtitle>
);

PageSubtitle.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageSubtitle;
