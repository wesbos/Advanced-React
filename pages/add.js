import { Component } from 'react';
import Page from '../components/Page';
import withData from '../lib/withData';
import CreateItem from '../components/CreateItem';

const Home = props => {
  const page = parseInt(props.url.query.page) || 1;
  return (
    <Page>
      <h2>Add an Item</h2>
      <CreateItem />
    </Page>
  );
};

export default withData(Home);
