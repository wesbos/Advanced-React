import { Component } from 'react';
import { Mutation } from 'react-apollo';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { REMOVE_FROM_CART_MUTATION, CURRENT_USER_QUERY } from '../queries/queries';

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
    id: PropTypes.string.isRequired,
  };

  update = (proxy, payload) => {
    const data = proxy.readQuery({ query: CURRENT_USER_QUERY });
    // console.log(data.me.cart[0]);
    const cartItemId = payload.data.removeFromCart.id;
    data.me.cart = data.me.cart.filter(cartItem => cartItem.id !== cartItemId);
    proxy.writeQuery({ query: CURRENT_USER_QUERY, data });
  };

  render() {
    return (
      <Mutation
        mutation={REMOVE_FROM_CART_MUTATION}
        variables={{ id: this.props.id }}
        update={this.update}
      // TODO - we should be able to remove this because we remove the item above
      // refetchQueries={[{ query: CURRENT_USER_QUERY }]}
      >
        {removeFromCart => (
          <BigButton title="Remove From Cart" onClick={removeFromCart}>
            &times;
          </BigButton>
        )}
      </Mutation>
    );
  }
}

export default RemoveFromCart;
