import React from 'react';
import Page from '../components/Page';
import Order from '../components/Order';

const OrderPage = props => (
  <Page>
    <Order id={props.router.query.id} />
  </Page>
);

export default OrderPage;
