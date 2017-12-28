import * as React from 'react';
import * as PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const Button = ({
  id,
  className,
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
  onClick: null,
  type: 'button',
};

export default styled(Button)`
  display: inline-block;
  border-radius: 3px;
  padding: .5rem 1rem;
  background: transparent;
  color: var(--base07);
  border: 2px solid white;
  font-family: var(--root-font-family);
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: rgba(0, 0, 0, .25)
  }

  ${props => props.size === 'small' && css`
    padding: .25rem .5rem;
    font-size: 90%;
  `}

  ${props => props.kind === 'primary' && css`
    color: var(--link-color);
    border-color: var(--link-color);
  `}
`;
