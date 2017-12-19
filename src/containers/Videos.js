import * as React from 'react';
import * as axios from 'axios';
import styled from 'styled-components';

import Container from '../components/Container';
import Video from '../components/Video';

const LoadingText = styled.p`
  margin: 2rem 0;
  text-align: center;
`;

class VideosContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fetched: false,
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

  renderLoading = () => (
    <Container>
      <LoadingText>Loading...</LoadingText>
    </Container>
  );

  renderVideos = videos => (
    <Container>
      {videos.map(video => <Video key={video.id.v[0]} video={video} />)}
    </Container>
  );

  render() {
    if (this.state.fetched) {
      return this.state.errors.length === 0
        ? this.renderVideos(this.state.videos)
        : null;
    }
    return this.renderLoading();
  }
}

export default VideosContainer;
