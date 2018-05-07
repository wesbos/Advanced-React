import { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { Mutation, Query } from 'react-apollo';
import Router from 'next/router';
import NProgress from 'nprogress';
import { CREATE_ORDER_MUTATION, CURRENT_USER_QUERY } from '../queries/queries';
import calcTotalPrice from '../lib/calcTotalPrice';
import Error from './ErrorMessage';

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
    // Route them to that order page
    const { id } = order.data.createOrder;
    Router.push({
      pathname: `/order`,
      query: { id },
    });
  };
  // TODO - refetchQueries after an order is created
  render() {
    return (
      <Query query={CURRENT_USER_QUERY}>
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
      </Query>
    );
  }
}

export default TakeMyMoney;
