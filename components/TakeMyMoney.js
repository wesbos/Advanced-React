import { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { CREATE_ORDER_MUTATION } from '../queries';
import { graphql } from 'react-apollo';


class TakeMyMoney extends Component {
  onToken = async (res) => {
    const token = res.id;
    console.log(`Going to make a purchase with ${token}`);
    const charge = await this.props.createOrder({ variables: { token }});
    alert(`Back from the charge! ${charge.id}`);
    console.log(charge);

  }
  render() {
    return (
      // ...
      <StripeCheckout
        {...this.props}
        token={this.onToken}
        stripeKey="pk_lclTtThFp8CnO3QtEZSd8HA9mFUps"
        currency="USD"
      >
        {this.props.children}
      </StripeCheckout>
    )
  }
}

export default graphql(CREATE_ORDER_MUTATION, { name: 'createOrder' })(TakeMyMoney);
