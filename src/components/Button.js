import * as React from 'react';
import * as PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const Button = ({
  id,
  className,
  kind,
  onClick,
  type,
  children,
}) => (
  <button
    id={id}
    className={className}
    onClick={onClick}
    type={type}
  >
    {children}
  </button>
);

Button.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  kind: PropTypes.oneOf([
    'default',
    'primary',
    'success',
    'warning',
    'danger',
    'help',
    'link',
  ]),
  onClick: PropTypes.func,
  type: PropTypes.oneOf([
    'button',
    'submit',
    'reset',
  ]),
  children: PropTypes.node.isRequired,
};

Button.defaultProps = {
  id: null,
  className: null,
  kind: 'default',
  onClick: null,
  type: 'button',
};

export default styled(Button)`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 1rem;
  background: transparent;
  color: var(--base07);
  border: 2px solid white;
  cursor: pointer;

  ${props => props.kind === 'primary' && css`
    color: var(--link-color);
    border-color: var(--link-color);

    &:hover,
    &:focus {
      background-color: rgba(0, 0, 0, .2)
    }
  `}
`;
