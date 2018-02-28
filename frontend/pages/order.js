import { Component } from 'react';
import withData from '../lib/withData';
import Page from '../components/Page';
import Order from '../components/Order';

const OrderPage = props => (
  <Page>
    <h2>Single Order:</h2>
    <Order id={props.url.query.orderId} />
  </Page>
);

export default withData(OrderPage);
