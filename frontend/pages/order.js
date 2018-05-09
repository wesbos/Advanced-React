import { Component } from 'react';
import withData from '../lib/withData';
import Page from '../components/Page';
import Order from '../components/Order';

const OrderPage = props => (
  <Page>
    <Order id={props.router.query.id} />
  </Page>
);

export default withData(OrderPage);
