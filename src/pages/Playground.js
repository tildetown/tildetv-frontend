import * as React from 'react';
import styled from 'styled-components';

import Button from '../components/Button';
import Container from '../components/Container';
import Page from '../containers/Page';
import PageHeader from '../components/PageHeader';
import Video from '../components/Video';

const Divider = styled.hr`
  margin: 2rem 0;
  border: 0;
  border-top: 1px solid var(--base02);
`;

const PreviewBox = styled.div`
  padding: 1rem;
  border: 1px solid var(--base02);
  border-radius: 3px;
`;

const sampleVideo = {
  contentWarnings: [],
  description: `A must watch even if you don't like sports. Jon Bois from SB Nation uses some neat statistics to figure
  out if baseballer Barry Bonds would still do well, even without carrying a bat.`,
  title: 'What if Barry Bonds had played without a baseball bat? | Chart Party',
  addedtime: 1492256083,
  tags: [
    'sports',
    'statistics',
  ],
  youtubelink: 'https://www.youtube.com/watch?v=JwMfT2cZGHg',
  id: {
    v: [
      'JwMfT2cZGHg',
    ],
  },
  user: 'resir014',
};

const sampleVideoWithCW = {
  description: '',
  tags: [
    'interview',
  ],
  title: 'Thats the homie',
  youtubelink: 'https://www.youtube.com/watch?v=9Pq9pRuO8ds',
  contentWarnings: [
    'swears',
    'N-word',
    'objectification',
  ],
  user: 'karlen',
  addedtime: 1512644530,
  id: {
    v: [
      '9Pq9pRuO8ds',
    ],
  },
};

const Playground = () => (
  <Page>
    <Container fluid>
      <h2>Button</h2>
      <h3>Default size</h3>
      <PreviewBox>
        <Button>Default button</Button>{' '}
        <Button kind="primary">Primary button</Button>
      </PreviewBox>
      <h3>Small size</h3>
      <PreviewBox>
        <Button size="small">Default button</Button>{' '}
        <Button size="small" kind="primary">Primary button</Button>
      </PreviewBox>

      <Divider />

      <h2>PageHeader</h2>
      <h3>With subtitle</h3>
      <PreviewBox>
        <PageHeader title="welcome to tildetv" subtitle="sit back and relax" />
      </PreviewBox>
      <h3>Without subtitle</h3>
      <PreviewBox>
        <PageHeader title="this week&apos;s playlist" />
      </PreviewBox>

      <Divider />

      <h2>Video</h2>
      <h3>Basic example</h3>
      <PreviewBox>
        <Video video={sampleVideo} />
      </PreviewBox>
      <h3>With content warnings</h3>
      <PreviewBox>
        <Video video={sampleVideoWithCW} />
      </PreviewBox>
    </Container>
  </Page>
);

export default Playground;
