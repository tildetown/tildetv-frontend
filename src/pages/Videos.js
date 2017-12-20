import * as React from 'react';
import Page from '../containers/Page';

import VideosContainer from '../containers/Videos';
import PageHeader from '../components/PageHeader';

const Videos = () => (
  <Page>
    <PageHeader title="this week&apos;s playlist" />
    <VideosContainer />
  </Page>
);

export default Videos;
