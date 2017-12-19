import * as React from 'react';
import * as PropTypes from 'prop-types';
import styled from 'styled-components';

/**
 * Wrap content inside a container to wrap them inside a fixed-width or fluid container.
 */
const Container = ({ children, className }) => (
  <div className={className}>
    {children}
  </div>
);

Container.propTypes = {
  /** Child nodes of the container. */
  children: PropTypes.node.isRequired,
  /** Any additional classes to put inside the container. */
  className: PropTypes.string,
};

Container.defaultProps = {
  className: null,
};

export default styled(Container)`
  max-width: ${props => (props.fluid ? '100%' : '48em')};
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem;
  padding-right: 1rem;
`;
