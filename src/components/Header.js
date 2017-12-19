import * as React from 'react';
import { NavLink } from 'react-router-dom';
import Media from 'react-media';
import styled from 'styled-components';

const SiteHeader = styled.header`
  display: flex;
  flex-direction: row;
  height: 40px;
  padding: 0 1rem;
  line-height: 1;
  background-color: #000;
`;

const SiteNavigation = styled.nav`
  display: flex;
  flex-grow: 1;

  a,
  a:hover,
  a:focus {
    line-height: 40px;
    text-decoration: none;
  }
`;

const SiteBrand = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  margin: 0;
  padding-right: 1rem;
  font-weight: 300;

  a,
  a:hover,
  a:focus {
    margin: 0;
    color: inherit;
    text-decoration: none;
  }

  span {
    font-weight: 600;
  }

  small {
    font-size: 1rem;
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

const Home = () => (
  <SiteHeader>
    <SiteBrand>
      <NavLink exact to="/" className="router-link" activeClassName="router-link--active">
        tilde<span>tv</span>
      </NavLink>
    </SiteBrand>
    <Media query="(min-width: 576px)" render={Navigation} />
  </SiteHeader>
);

export default Home;
