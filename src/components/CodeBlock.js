import * as React from 'react';
import * as PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.section`
  padding: 1rem;
  margin-bottom: 1rem;
  font-size: .8rem;
  line-height: 1.4;
  background-color: var(--code-background-color);
  border-radius: .25rem;

  pre {
    margin: 0;
    overflow-x: auto;
  }
`;

/**
 * Wrap a code block inside a React component.
 */
const CodeBlock = ({ code }) => (
  <Wrapper>
    <pre>{code}</pre>
  </Wrapper>
);

CodeBlock.propTypes = {
  /** A template string containing the code we want to include. */
  code: PropTypes.string.isRequired,
};

export default CodeBlock;
