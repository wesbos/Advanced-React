import { Component } from 'react';
import { compose } from 'react-apollo';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { removeFromCartEnhancer } from '../enhancers/enhancers';

const BigButton = styled.button`
  font-size: 3rem;
  background: none;
  border: 0;
  &:hover {
    color: ${props => props.theme.red};
    cursor: pointer;
  }
`;

class RemoveFromCart extends Component {
  static propTypes = {
    removeFromCart: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
  };

  handleRemoveFromCart = async () => {
    await this.props.removeFromCart({
      variables: {
        id: this.props.id,
      },
    });
  };

  render() {
    return (
      <BigButton title="Remove From Cart" onClick={this.handleRemoveFromCart}>
        &times;
      </BigButton>
    );
  }
}

export default compose(removeFromCartEnhancer)(RemoveFromCart);
export { RemoveFromCart };
