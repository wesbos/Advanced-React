import { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { graphql, compose } from 'react-apollo';
import { CREATE_ORDER_MUTATION, CURRENT_USER_QUERY } from '../queries';
import formatMoney from '../lib/formatMoney';

class TakeMyMoney extends Component {
  onToken = async res => {
    console.log('We got a toooken!');
    console.log(res);
    const order = await this.props.createOrder({
      variables: {
        token: res.id,
      },
    });
    console.log(order);
    // const token = res.id;
    // const userId = this.props.currentUserQuery.user.id;
    // const itemId = this.props.id;
    // console.log(`Going to make a purchase with ${token}`);
    // console.log(`THe person that bought this was ${userId}`);
    // console.log(`The item id is ${itemId}`);
    // const charge = await this.props.createOrder({ variables: { token, userId, itemId } });
    // alert(`Back from the charge! ${charge.id}`);
    // console.log(charge);
  };

  render() {
    const { me } = this.props.currentUserQuery;
    if (!me.cart.length) return null;
    const total = me.cart.reduce((tally, cartItem) => tally + cartItem.item.price * cartItem.quantity, 0);
    const totalItems = me.cart.reduce((tally, cartItem) => tally + cartItem.quantity, 0);
    return (
      <div>
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
          {formatMoney(total)}
          {this.props.children}
        </StripeCheckout>
      </div>
    );
  }
}

const userEnhancer = graphql(CURRENT_USER_QUERY, { name: 'currentUserQuery' });
const createOrderEnhancer = graphql(CREATE_ORDER_MUTATION, { name: 'createOrder' });
export default compose(userEnhancer, createOrderEnhancer)(TakeMyMoney);
