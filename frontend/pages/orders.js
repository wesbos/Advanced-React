import { Component } from 'react';
import Page from '../components/Page';
import OrderList from '../components/OrderList';
import PleaseSignIn from '../components/PleaseSignIn';

class Orders extends Component {
  render() {
    return (
      <Page>
        <PleaseSignIn>
          <OrderList />
        </PleaseSignIn>
      </Page>
    );
  }
}

export default Orders;
