import * as React from 'react';
import * as PropTypes from 'prop-types';
import styled from 'styled-components';

import Button from './Button';

const Overlay = styled.div`
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  top: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
  background-color: var(--base01-background);
  z-index: 9;
`;

const OverlayInner = styled.div`
  text-align: center;

  h2 {
    margin-top: 0;
  }
`;

const CWLabelWrapper = styled.div`
  margin: 1rem 0;
`;

const CWLabel = styled.span`
  margin-right: .5rem;
  padding: .125rem .25rem;
  font-size: 85%;
  color: var(--content-warning-label-color);
  background-color: var(--content-warning-label-background);

  &:last-of-type {
    margin-right: 0;
  }

  a {
    text-decoration: none;
  }
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
            <OverlayInner>
              <h2>content warning</h2>
              <p>hey, this video contains the following:</p>
              <CWLabelWrapper>
                {warnings.map(w => <CWLabel key={w}>{w}</CWLabel>)}
              </CWLabelWrapper>
              <Button size="small" kind="primary" onClick={() => this.setState({ visible: false })}>
                click to continue
              </Button>
            </OverlayInner>
          </Overlay>}
      </React.Fragment>
    );
  }
}

export default ContentWarningBlock;
