import { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { CREATE_ORDER_MUTATION, CURRENT_USER_QUERY } from '../queries';
import { graphql, compose } from 'react-apollo';


class TakeMyMoney extends Component {
  onToken = async (res) => {
    const token = res.id;
    const userId = this.props.currentUserQuery.user.id;
    const itemId = this.props.id;
    console.log(`Going to make a purchase with ${token}`);
    console.log(`THe person that bought this was ${userId}`)
    console.log(`The item id is ${itemId}`)
    const charge = await this.props.createOrder({ variables: { token, userId, itemId }});
    alert(`Back from the charge! ${charge.id}`);
    console.log(charge);

  }
  render() {
    const user = this.props.currentUserQuery.user || {};
    const email = user.email || '';
    return (
      <div>
        <StripeCheckout
          amount={this.props.amount}
          name={this.props.name}
          description={this.props.description}
          token={this.onToken}
          stripeKey="pk_lclTtThFp8CnO3QtEZSd8HA9mFUps"
          currency="USD"
          email={email}
        >
          {this.props.children}
        </StripeCheckout>
      </div>
    )
  }
}

const userEnhancer = graphql(CURRENT_USER_QUERY, { name: 'currentUserQuery' });
const createOrderEnhancer = graphql(CREATE_ORDER_MUTATION, { name: 'createOrder' });
export default compose(userEnhancer, createOrderEnhancer)(TakeMyMoney);
