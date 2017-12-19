import * as React from 'react';
import * as PropTypes from 'prop-types';

const Video = ({ video }) => (
  <div>{JSON.stringify(video)}</div>
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
