import { Component } from 'react';
import PropTypes from 'prop-types';
import Items from '../components/Items';
import Header from '../components/Header';
import Page from '../components/Page';
import withData from '../lib/withData';

const Home = props => {
  const page = parseInt(props.url.query.page) || 1;
  return (
    <Page>
      <Items page={page} />
    </Page>
  );
};

Home.propTypes = {
  url: PropTypes.object,
};

export default withData(Home);
