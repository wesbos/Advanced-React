import { Component } from 'react';
import withData from '../lib/withData';
import StripeCheckout from 'react-stripe-checkout';

class TakeMoney extends React.Component {
  onToken = async (token) => {
    console.log(token);
    // now that we have the token, create an "order"

    // const res = await fetch('/save-stripe-token', {
    //   method: 'POST',
    //   body: JSON.stringify(token),
    // })
    // const data = await res.json();
    // console.log(data);
  }

  // ...

  render() {
    return (
      // ...
      <StripeCheckout
        token={this.onToken}
        stripeKey="pk_lclTtThFp8CnO3QtEZSd8HA9mFUps"
        amount={1000000} // cents
        currency="USD"
      />
    )
  }
}

class Buy extends Component {
  render() {
    return (
      <div>
        <p>Buy</p>
        <TakeMoney></TakeMoney>
      </div>
    )
  }
}

export default withData(Buy);
