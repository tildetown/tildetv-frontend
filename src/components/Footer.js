import * as React from 'react';
import styled from 'styled-components';
import Container from './Container';

const FooterWrapper = styled.footer`
  margin-top: 2rem;
  padding: 1rem 0;
  border-top: 1px solid var(--base02);
  text-align: center;

  p {
    margin: 0;
  }
`;

const Footer = () => (
  <FooterWrapper>
    <Container fluid>
      <p>
        <small>
          designed by{' '}
          <a href="https://tilde.town/~resir014" target="_blank" rel="noopener noreferrer">
            ~resir014
          </a>.{' '}
          backend work by ~karlen.
        </small>
      </p>
      <p>
        <small>
          <a href="https://github.com/tildetown/tildetv-frontend" target="_blank" rel="noopener noreferrer">
            view the code
          </a>
        </small>
      </p>
    </Container>
  </FooterWrapper>
);

export default Footer;
