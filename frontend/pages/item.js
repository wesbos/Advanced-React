import React from 'react';
import Page from '../components/Page';
import SingleItem from '../components/SingleItem';

const ItemPage = props => (
  <Page>
    <SingleItem id={props.router.query.id} />
  </Page>
);

export default ItemPage;
