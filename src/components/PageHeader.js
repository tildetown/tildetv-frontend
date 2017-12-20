import * as React from 'react';
import * as PropTypes from 'prop-types';
import styled from 'styled-components';
import Container from './Container';

const Wrapper = styled(Container)`
  margin: 2rem 0;
`;

const PageTitle = styled.h1`
  margin: 0;
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
    display: inline-block;
    position: relative;
    padding: .25rem 1rem;
    background-color: var(--body-bg);
    z-index: 2;
  }
`;

const PageSubtitle = styled.p`
  margin-top: .5rem;
  margin-bottom: 0;
  position: relative;
  text-align: center;
  font-size: 1.25rem;
  font-weight: 300;
`;

const PageHeader = ({ title, subtitle }) => (
  <Wrapper fluid>
    <PageTitle><span>{title}</span></PageTitle>
    {subtitle && <PageSubtitle>{subtitle}</PageSubtitle>}
  </Wrapper>
);

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.node,
};

PageHeader.defaultProps = {
  subtitle: null,
};

export default PageHeader;
