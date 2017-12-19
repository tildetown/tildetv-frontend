import * as React from 'react';
import * as PropTypes from 'prop-types';
import styled from 'styled-components';

const VideoWrapper = ({ children, className }) => (
  <div className={className}>{children}</div>
);

VideoWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

VideoWrapper.defaultProps = {
  className: null,
};

export default styled(VideoWrapper)`
  display: block;
  position: relative;
  width: 100%;
  padding: 0;
  overflow: hidden;

  &:before {
    display: block;
    padding-top: 56.25%; /* 16:9 */
    content: "";
  }

  iframe {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0;
  }
`;
