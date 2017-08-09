import { Component } from 'react';
import withData from '../lib/withData';
import Items from '../components/Items';
import CreateItem from '../components/CreateItem';
import Count from '../components/Count';

class Home extends Component {
  render() {
    return (
      <div>
        <Count/>
        <CreateItem />
        <Items></Items>
      </div>
    )
  }
}

export default withData(Home);
