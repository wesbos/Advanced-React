import { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { compose, Mutation, Query } from 'react-apollo';
import Router from 'next/router';
import NProgress from 'nprogress';
import PropTypes from 'prop-types';
import { CREATE_ORDER_MUTATION, CURRENT_USER_QUERY } from '../queries';

function totalItems(cart) {
  return cart.reduce((tally, cartItem) => tally + cartItem.quantity, 0);
}

function total(cart) {
  return cart.reduce((tally, cartItem) => tally + cartItem.item.price * cartItem.quantity, 0);
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
        {({ data: { me } }) => (
          <Mutation mutation={CREATE_ORDER_MUTATION}>
            {createOrder => (
              <StripeCheckout
                amount={total(me.cart)}
                name="Sick Fits Haul"
                description={`Order of ${totalItems(me.cart)} Items From Sick Fits`}
                image={me.cart[0].item.image}
                token={res => this.onToken(res, createOrder)}
                stripeKey="pk_lclTtThFp8CnO3QtEZSd8HA9mFUps"
                currency="USD"
                email={me.email}
              >
                {this.props.children}
              </StripeCheckout>
            )}
          </Mutation>
        )}
      </Query>
    );
  }
}

TakeMyMoney.propTypes = {
  currentUser: PropTypes.object.isRequired,
  createOrder: PropTypes.func.isRequired,
};

// export default compose(userEnhancer, createOrderEnhancer)(TakeMyMoney);
// export { TakeMyMoney };

export default TakeMyMoney;
