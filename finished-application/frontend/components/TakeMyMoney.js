import { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { Mutation, Query } from 'react-apollo';
import Router from 'next/router';
import NProgress from 'nprogress';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import calcTotalPrice from '../lib/calcTotalPrice';
import Error from './ErrorMessage';
import User, { CURRENT_USER_QUERY } from './User';

const CREATE_ORDER_MUTATION = gql`
  mutation createOrder($token: String!) {
    createOrder(token: $token) {
      id
      charge
      total
      items {
        id
        title
      }
    }
  }
`;

function totalItems(cart) {
  return cart.reduce((tally, cartItem) => tally + cartItem.quantity, 0);
}

class TakeMyMoney extends Component {
  onToken = async (res, createOrder) => {
    NProgress.start();
    const order = await createOrder({
      variables: {
        token: res.id,
      },
    });
    console.log(order);
    // Route them to that order page
    const { id } = order.data.createOrder;
    Router.push({
      pathname: `/order`,
      query: { id },
    });
  };
  render() {
    return (
      <User>
        {({ data: { me }, error }) => {
          if (!me || !me.cart.length) return null;
          if (error) return <Error error={error} />;
          return (
            <Mutation
              mutation={CREATE_ORDER_MUTATION}
              refetchQueries={[{ query: CURRENT_USER_QUERY }]}
            >
              {createOrder => (
                <StripeCheckout
                  amount={calcTotalPrice(me.cart)}
                  name="Sick Fits Haul"
                  description={`Order of ${totalItems(me.cart)} Items From Sick Fits`}
                  image={me.cart[0].item && me.cart[0].item.image}
                  token={res => this.onToken(res, createOrder)}
                  stripeKey="pk_lclTtThFp8CnO3QtEZSd8HA9mFUps"
                  currency="USD"
                  email={me.email}
                >
                  {this.props.children}
                </StripeCheckout>
              )}
            </Mutation>
          );
        }}
      </User>
    );
  }
}

TakeMyMoney.propTypes = {
  children: PropTypes.any,
};

export default TakeMyMoney;
