import { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import Transition from 'react-transition-group/Transition';
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
  handleRemoveFromCart = async () => {
    console.log(`gonna remove item from cart`);
    const res = await this.props.removeFromCart({
      variables: {
        id: this.props.id,
      },
    });
    console.log('This came back from removeFromCart:', res);
    // this.props.currentUserQuery.refetch();
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
