import * as React from 'react';
import { Link } from 'react-router-dom';

import Page from '../containers/Page';
import PageHeader from '../components/PageHeader';
import Container from '../components/Container';

const Home = () => (
  <Page>
    <Container fluid>
      <PageHeader>welcome to tildetv</PageHeader>
    </Container>
    <Container>
      <p>
        tildetv is an alternative way to enjoy visual media on the internet. it&apos;s a playlist of YouTube videos{' '}
        discovered and curated by{' '}
        <a href="https://tilde.town" target="_blank" rel="noopener noreferrer">
          tilde.town members
        </a>{' '}
        from a variety of different categories across the site, and are available here for everyone&apos;s viewing{' '}
        pleasure.
      </p>

      <h2>features</h2>
      <ul>
        <li>simple, intuitive <Link href="/videos" to="/videos">web viewer</Link> (with tags &amp; content warnings)</li>
        <li><Link href="/howto" to="/howto">add videos to the playlist</Link> using a simple command line</li>
        <li>
          <a href="https://tilde.town/~karlen/tv/videos.json" target="_blank" rel="noopener noreferrer">
            JSON datadump
          </a>, for ~town members who want to develop their own, in-console client
        </li>
        <li>videos are reset every week, so you&apos;re bound to see something fresh!</li>
      </ul>
    </Container>
  </Page>
);

export default Home;
