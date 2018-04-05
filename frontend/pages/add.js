import { Component } from 'react';
import Page from '../components/Page';
import withData from '../lib/withData';
import CreateItem from '../components/CreateItem';
import PleaseSignIn from '../components/PleaseSignIn';

const Home = props => {
  const page = parseInt(props.url.query.page) || 1;
  return (
    <Page>
      <PleaseSignIn>
        <CreateItem />
      </PleaseSignIn>
    </Page>
  );
};

export default withData(Home);
