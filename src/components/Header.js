import * as React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const SiteHeader = styled.header`
  padding: 1rem 0;
  margin-bottom: 2rem;
  text-align: center;
`;

const SiteNavigation = styled.nav`
  margin: 1.5rem 0;

  a,
  a:hover,
  a:focus {
    text-decoration: none;
  }
`;

const SiteBrand = styled.h1`
  margin-top: 0;
  margin-bottom: 0;
  font-weight: 300;
  font-size: 2.5rem;

  span {
    font-weight: 600;
  }

  small {
    font-size: 1rem;
  }
`;

const SiteTagline = styled.span`
  font-size: 1.25rem;
  font-weight: 300;
`;

const SiteNavigationLink = styled(NavLink)`
  display: inline-block;
  margin: 0 1rem;

  &.router-link--active {
    color: inherit;
  }
`;

const Home = () => (
  <SiteHeader>
    <SiteBrand>tilde<span>tv</span></SiteBrand>
    <SiteTagline>sit back and relax</SiteTagline>
    <SiteNavigation>
      <SiteNavigationLink exact to="/" className="router-link" activeClassName="router-link--active">
        about
      </SiteNavigationLink>
      <SiteNavigationLink to="/videos" className="router-link" activeClassName="router-link--active">
        {'this week\'s playlist'}
      </SiteNavigationLink>
      <SiteNavigationLink to="/howto" className="router-link" activeClassName="router-link--active">
        add videos
      </SiteNavigationLink>
      {process.env.NODE_ENV !== 'production' &&
        <SiteNavigationLink to="/playground" className="router-link" activeClassName="router-link--active">
          component playground
        </SiteNavigationLink>}
    </SiteNavigation>
  </SiteHeader>
);

export default Home;
