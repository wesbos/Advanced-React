import { Component } from 'react';
import withData from '../lib/withData';
import Items from '../components/Items';
import Signup from '../components/Signup';
import LoginAuth0 from '../components/LoginAuth0';
import Page from '../components/Page';
import { USER_ORDERS_QUERY } from '../queries';
import { graphql, compose } from 'react-apollo';
import has from 'lodash.has';
import get from 'lodash.get';
import styled from 'styled-components';
import formatMoney from '../lib/formatMoney';
import makeImage from '../lib/image';
import TakeMyMoney from './TakeMyMoney';
import { removeFromCartEnhancer } from '../enhancers';
import { CURRENT_USER_QUERY } from '../queries';

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
  state = {
    open: false,
  };

  componentDidMount() {
    setTimeout(this.props.currentUserQuery.refetch, 1);
  }

  toggleOpen = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    if (this.props.loading) {
      return <p>Loading...</p>;
    }

    if (this.props.error) {
      return <p>Error...</p>;
    }

    if (!has(this.props, 'currentUserQuery.user.cart')) {
      return <p>Don't have it yet!</p>;
    }

    const cart = this.props.currentUserQuery.user.cart;
    const userId = this.props.currentUserQuery.user.id;

    const total = cart.reduce((a, b) => a + b.price, 0);
    return (
      <CartStyles open={this.state.open}>
        <button className="toggleOpen" onClick={this.toggleOpen}>
          Open Cart
        </button>
        <h1>{cart.length} Items</h1>
        <h1>Cart Status: {this.state.open.toString()}</h1>
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

const userEnhancer = graphql(CURRENT_USER_QUERY, { name: 'currentUserQuery' });
export default compose(userEnhancer, removeFromCartEnhancer)(CartList);
