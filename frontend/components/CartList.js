// I THINK THIS CAN BE DELETED
import { Component } from 'react';
import { compose } from 'react-apollo';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import formatMoney from '../lib/formatMoney';
import TakeMyMoney from './TakeMyMoney';
import { removeFromCartEnhancer, userEnhancer, uiEnhancer } from '../enhancers/enhancers';

const CartStyles = styled.div`
  padding: 20px;
  position: relative;
  background: white;
  position: fixed;
  height: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  transform: translateX(100%);
  transition: all 0.3s;
  box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.2);
  z-index: 5;
  ${props => props.open && `transform: translateX(0);`};
  .toggleOpen {
    position: absolute;
    top: 0;
    left: 0;
    transform: translateX(-100%);
  }
`;

class CartList extends Component {
  static contextTypes = {
    client: PropTypes.object,
  };

  toggleOpen = () => {
    this.props.uiQuery.updateQuery(() => ({ ui: { isCartOpen: false, __typename: 'Network' } }));
  };

  render() {
    if (this.props.loading) {
      return <p>Loading....</p>;
    }

    if (this.props.error) {
      return <p>Error....</p>;
    }

    //   return <p>Don't have it yet!</p>;
    // }
    // OMG Clean this up

    if (!user) user = {};
    const cart = user.cart || [];
    const userId = user.id;

    const total = cart.reduce((a, b) => a + b.price, 0);
    return (
      <CartStyles open>
        <button className="toggleOpen" onClick={this.toggleOpen}>
          Open Cart
        </button>
        <h1>{cart.length} Items</h1>
        <ul>
          {cart.map(item => (
            <li key={item.id}>
              {item.title}
              <button
                onClick={() =>
                  this.props.removeFromCart({
                    variables: {
                      userId,
                      itemId: item.id,
                    },
                  })}
              >
                &times; Delete
              </button>
            </li>
          ))}
        </ul>
        <TakeMyMoney amount={total} name="Testing 123" description="Test test 123">
          <button>Buy for {formatMoney(total)}</button>
        </TakeMyMoney>
      </CartStyles>
    );
  }
}

export default compose(userEnhancer, removeFromCartEnhancer, uiEnhancer)(CartList);
