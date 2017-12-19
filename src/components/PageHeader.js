import * as React from 'react';
import * as PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledH1 = styled.h1`
  margin: 2rem 0;
  position: relative;
  text-align: center;

  &:before {
    position: absolute;
    z-index: 1;
    top: 50%;
    left: 0;
    height: 1px;
    width: 46%;
    background-color: var(--base03);
    content: "";
  }

  &:after {
    position: absolute;
    z-index: 1;
    top: 50%;
    right: 0;
    height: 1px;
    width: 46%;
    background-color: var(--base03);
    content: "";
  }

  > span {
    padding: .25rem 1rem;
    position: relative;
    background-color: var(--body-bg);
    z-index: 2;
  }
`;

const PageHeader = ({ children }) => (
  <StyledH1><span>{children}</span></StyledH1>
);

PageHeader.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageHeader;
