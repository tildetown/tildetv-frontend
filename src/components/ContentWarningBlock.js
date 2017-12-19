import * as React from 'react';
import * as PropTypes from 'prop-types';
import styled from 'styled-components';

import Button from './Button';

const Overlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
  background-color: var(--base01-background);
  z-index: 9;
`;

class ContentWarningBlock extends React.Component {
  static propTypes = {
    warnings: PropTypes.arrayOf(PropTypes.string).isRequired,
    className: PropTypes.string,
  };

  static defaultProps = {
    className: null,
  };

  constructor(props) {
    super(props);

    this.state = {
      visible: true,
    };
  }

  render() {
    const { warnings, className } = this.props;
    const { visible } = this.state;
    return (
      <React.Fragment>
        {visible &&
          <Overlay className={className}>
            {warnings.map(w => <p>{w}</p>)}
            <Button kind="primary" onClick={() => this.setState({ visible: false })}>Click to continue</Button>
          </Overlay>}
      </React.Fragment>
    );
  }
}

export default ContentWarningBlock;
