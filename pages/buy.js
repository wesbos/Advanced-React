import { Component } from 'react';
import withData from '../lib/withData';
import TakeMyMoney from '../components/TakeMyMoney';

class Buy extends Component {
  render() {
    return (
      <div>
        <p>Buy</p>
        <TakeMyMoney />
      </div>
    )
  }
}

export default withData(Buy);
