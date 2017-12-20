import * as React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const SiteNavigation = styled.nav`
  a,
  a:hover,
  a:focus {
    line-height: 40px;
    text-decoration: none;
  }

  @media (min-width: 576px) {
    display: flex;
    flex-grow: 1;
  }
`;

const SiteNavigationLink = styled(NavLink)`
  display: inline-block;
  padding: 0 1rem;

  &.router-link--active {
    color: inherit;
  }
`;

const Navigation = () => (
  <SiteNavigation>
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
);

export default Navigation;
