import * as React from 'react';
import * as axios from 'axios';
import styled from 'styled-components';

import Container from '../components/Container';
import Video from '../components/Video';
import Button from '../components/Button';

const LoadingText = styled.p`
  margin: 2rem 0;
  text-align: center;
`;

const PaginationWrapper = styled.div`
  margin: 1rem 0;
  text-align: center;
`;

class VideosContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fetched: false,
      currentPage: 1,
      videos: [],
      errors: [],
    };
  }

  componentWillMount() {
    this.fetchVideos();
  }

  fetchVideos() {
    const baseUrl = process.env.NODE_ENV !== 'production'
      ? '/sample-api'
      : '/~karlen/tv';

    const api = axios.create({
      baseURL: baseUrl,
      timeout: 10000,
      headers: {
        Accept: 'application/json',
        'Cache-Control': 'no-cache',
      },
    });

    api.get('/videos.json').then((res) => {
      this.setState({
        fetched: true,
        videos: res.data,
      });
    }).catch((e) => {
      this.setState({
        fetched: true,
        errors: e,
      });
    });
  }

  prevPage() {
    const { currentPage } = this.state;

    if (currentPage > 1) {
      this.setState({
        currentPage: currentPage - 1,
      });
    }
  }

  nextPage() {
    const { currentPage, videos } = this.state;

    if (currentPage < videos.length) {
      this.setState({
        currentPage: currentPage + 1,
      });
    }
  }

  renderLoading = () => (
    <Container>
      <LoadingText>Loading...</LoadingText>
    </Container>
  );

  renderVideos(videos) {
    const { currentPage } = this.state;
    const lastIndex = currentPage * 1;
    const firstIndex = lastIndex - 1;
    const currentIndexes = videos.slice(firstIndex, lastIndex);

    return (
      <Container fluid>
        {currentIndexes.map(video => <Video key={video.id.v[0]} video={video} />)}
        <PaginationWrapper>
          {currentPage > 1 ? <Button onClick={() => this.prevPage()}>&lt;&lt;</Button> : null}{' '}
          {currentPage < videos.length ? <Button onClick={() => this.nextPage()}>&gt;&gt;</Button> : null}
        </PaginationWrapper>
      </Container>
    );
  }

  render() {
    if (this.state.fetched) {
      return this.state.errors.length === 0
        ? this.renderVideos(this.state.videos.reverse())
        : null;
    }
    return this.renderLoading();
  }
}

export default VideosContainer;
