import * as React from 'react';
import * as PropTypes from 'prop-types';
import YouTube from 'react-youtube';
import MediaWrapper from './MediaWrapper';

const Video = ({ video }) => (
  <div>
    <MediaWrapper>
      <YouTube
        videoId={video.id.v[0]}
        onReady={e => e.target.pauseVideo()}
      />
    </MediaWrapper>
  </div>
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
