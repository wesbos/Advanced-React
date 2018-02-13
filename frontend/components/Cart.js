import { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import styled from 'styled-components';
import { networkEnhancer, userEnhancer, uiEnhancer } from '../enhancers/enhancers';
import RemoveFromCart from './RemoveFromCart';
import TakeMyMoney from './TakeMyMoney';

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

class Cart extends Component {
  state = {
    open: true,
  };
  componentDidMount() {
    console.log('refetching..');
    setTimeout(this.props.currentUser.refetch, 10);
  }
  toggleOpen = () => {
    this.setState({ open: !this.state.open });
  };
  handleClick = () => {
    console.log('CLICK');
    this.props.updateNetworkStatus(!this.props.ui.networkStatus.isConnected);
  };
  render() {
    if (!this.props.currentUser.me) {
      return null;
    }
    const { me } = this.props.currentUser;

    return (
      <CartStyles className="cart" open={this.state.open}>
        <button onClick={this.handleClick}>
          Toggle Network Status:: {this.props.ui.networkStatus.isConnected.toString()}
        </button>
        <button className="toggleOpen" onClick={this.toggleOpen}>
          Open Cart
        </button>

        <p>🛒: {me.cart.length} Items</p>
        <ul>
          {me.cart.map(cartItem => (
            <li key={cartItem.id}>
              <strong>
                {cartItem.quantity} of {cartItem.item.title}
              </strong>
              <RemoveFromCart id={cartItem.id} />
            </li>
          ))}
        </ul>

        <TakeMyMoney>
          <hr />
          <button>Checkout!!!</button>
        </TakeMyMoney>
        {/* Theren
        {user.cart.length === 1 ? ' is ' : 'are '}
        <ChaChing amount={user.cart.length} />
        {user.cart.length === 1 ? ' item ' : ' items '}
        in your cart totaling */}
        {/* <ChaChing amount={formatMoney(total)} /> */}
      </CartStyles>
    );
  }
}

export default compose(userEnhancer, networkEnhancer, uiEnhancer)(Cart);
