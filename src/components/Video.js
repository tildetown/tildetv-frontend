import * as React from 'react';
import * as PropTypes from 'prop-types';
import styled from 'styled-components';

import YouTube from 'react-youtube';
import MediaWrapper from './MediaWrapper';
import ContentWarningBlock from './ContentWarningBlock';

const VideoItem = styled.article`
  position: relative;
  margin: 2rem 0;

  @supports (display: grid) {
    display: grid;
    grid-template-areas: "video"
                         "meta";
    grid-gap: 1rem;

    @media (min-width: 768px) {
      grid-template-columns: 2fr 1fr;
      grid-template-areas: "video meta";
    }
  }
`;

const VideoWrapper = styled(MediaWrapper)`
  grid-area: video;
`;

const VideoMetadata = styled.section`
  grid-area: meta;
`;

const VideoTitle = styled.h4`
  margin-top: 0;
  font-weight: 600;
`;

const VideoTagWrapper = styled.div`
  margin: 1rem 0;
`;

const VideoTagLabel = styled.span`
  margin-right: .5rem;
  padding: .125rem .25rem;
  font-size: 85%;
  color: inherit;
  background-color: var(--label-color);

  &:last-of-type {
    margin-right: 0;
  }

  a {
    text-decoration: none;
  }
`;

const VideoTagFooter = styled.footer`
  margin: 1rem 0;

  p {
    margin: 0;
  }
`;

const Video = ({ video }) => (
  <VideoItem>
    <VideoWrapper>
      <YouTube
        videoId={video.id.v[0]}
        onReady={e => e.target.pauseVideo()}
      />
      {video.contentWarnings.length !== 0 ? <ContentWarningBlock warnings={video.contentWarnings} /> : null}
    </VideoWrapper>
    <VideoMetadata>
      {video.title ? <VideoTitle>{video.title}</VideoTitle> : null}
      {video.description ? <p>{video.description}</p> : null}
      <VideoTagWrapper>
        {video.tags.map(w => <VideoTagLabel key={w}>{w}</VideoTagLabel>)}
      </VideoTagWrapper>
      <VideoTagFooter>
        <p>
          Posted by{' '}
          <a href={`https://tilde.town/~${video.user}`} target="_blank" rel="noopener noreferrer">
            ~{video.user}
          </a>{' '}
          at{' '}
          {new Date(video.addedtime * 1000).toLocaleDateString()}{' '}
          {new Date(video.addedtime * 1000).toLocaleTimeString()}
        </p>
      </VideoTagFooter>
    </VideoMetadata>
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
