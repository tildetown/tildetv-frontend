import * as React from 'react';
import * as PropTypes from 'prop-types';
import styled from 'styled-components';

import YouTube from 'react-youtube';
import MediaWrapper from './MediaWrapper';
import ContentWarningBlock from './ContentWarningBlock';

const VideoItem = styled.article`
  position: relative;
  margin: 2rem 0;
`;

const Video = ({ video }) => (
  <VideoItem>
    <MediaWrapper>
      <YouTube
        videoId={video.id.v[0]}
        onReady={e => e.target.pauseVideo()}
      />
    </MediaWrapper>
    {video.contentWarnings.length !== 0 && <ContentWarningBlock warnings={video.contentWarnings} />}
  </VideoItem>
);

Video.propTypes = {
  video: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    user: PropTypes.string,
    addedtime: PropTypes.number,
    tags: PropTypes.arrayOf(PropTypes.string),
    youtubelink: PropTypes.string,
    id: PropTypes.object,
    contentWarnings: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default Video;
