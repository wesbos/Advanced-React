import React from 'react';
import PropTypes from 'prop-types';
import Items from '../components/Items';
import Page from '../components/Page';

class Home extends React.Component {
  render() {
    const page = parseInt(this.props.query.page) || 1;
    return (
      <Page>
        <Items page={page} />
      </Page>
    );
  }
}

export default Home;
