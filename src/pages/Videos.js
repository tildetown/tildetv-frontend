import * as React from 'react';
import Page from '../containers/Page';

import VideosContainer from '../containers/Videos';
import Container from '../components/Container';
import PageHeader from '../components/PageHeader';

const Videos = () => (
  <Page>
    <Container fluid>
      <PageHeader>this week&apos;s playlist</PageHeader>
    </Container>
    <VideosContainer />
  </Page>
);

export default Videos;
