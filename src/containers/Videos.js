import * as React from 'react';
import * as axios from 'axios';
// import styled from 'styled-components';

import Video from '../components/Video';

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
    <div>Loading...</div>
  );

  renderVideos = videos => (
    <div>
      <h2>we have {videos.length} video(s) for you this week</h2>
      {videos.map(video => <Video key={video.id.v[0]} video={video} />)}
    </div>
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
