import { Component } from 'react';
import withData from '../lib/withData';
import Items from '../components/Items';
import CreateItem from '../components/CreateItem';
import Signup from '../components/Signup';
import LoginAuth0 from '../components/LoginAuth0';
import Page from '../components/Page';
import Item from '../components/Item';

class ItemPage extends Component {
  render() {
    return (
      <Page>
        <p>I'm the item url!</p>
        <Item id={this.props.url.query.itemId}></Item>
      </Page>
    )
  }
}

export default withData(ItemPage);
