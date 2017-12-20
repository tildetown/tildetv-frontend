import * as React from 'react';
import styled from 'styled-components';

import Button from '../components/Button';
import Container from '../components/Container';
import Page from '../containers/Page';
import PageHeader from '../components/PageHeader';

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

const Playground = () => (
  <Page>
    <Container fluid>
      <h2>Button</h2>
      <PreviewBox>
        <Button>Click here</Button>{' '}
        <Button kind="primary">Click here</Button>
      </PreviewBox>
      <Divider />
      <h2>PageHeader</h2>
      <p>With subtitle:</p>
      <PreviewBox>
        <PageHeader title="welcome to tildetv" subtitle="sit back and relax" />
      </PreviewBox>
      <p>Without subtitle:</p>
      <PreviewBox>
        <PageHeader title="this week&apos;s playlist" />
      </PreviewBox>
    </Container>
  </Page>
);

export default Playground;
