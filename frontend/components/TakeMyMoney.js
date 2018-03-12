import { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { graphql, compose } from 'react-apollo';
import { CREATE_ORDER_MUTATION, CURRENT_USER_QUERY } from '../queries';
import formatMoney from '../lib/formatMoney';
import Router from 'next/router';
import NProgress from 'nprogress';

class TakeMyMoney extends Component {
  onToken = async res => {
    NProgress.start();
    const order = await this.props.createOrder({
      variables: {
        token: res.id,
      },
    });
    // Route them to that order page
    const { id } = order.data.createOrder;
    Router.push({
      pathname: `/order/${id}`,
      query: { id },
    });
  };

  render() {
    const { me } = this.props.currentUserQuery;
    if (!me || !me.cart.length) return null;
    const total = me.cart.reduce((tally, cartItem) => tally + cartItem.item.price * cartItem.quantity, 0);
    const totalItems = me.cart.reduce((tally, cartItem) => tally + cartItem.quantity, 0);
    return (
      <StripeCheckout
        amount={total}
        name="Sick Fits Haul"
        description={`Order of ${totalItems} Items From Sick Fits`}
        image={me.cart[0].item.image}
        token={this.onToken}
        stripeKey="pk_lclTtThFp8CnO3QtEZSd8HA9mFUps"
        currency="USD"
        email={me.email}
      >
        {this.props.children}
      </StripeCheckout>
    );
  }
}

const userEnhancer = graphql(CURRENT_USER_QUERY, { name: 'currentUserQuery' });
const createOrderEnhancer = graphql(CREATE_ORDER_MUTATION, { name: 'createOrder' });
export default compose(userEnhancer, createOrderEnhancer)(TakeMyMoney);
