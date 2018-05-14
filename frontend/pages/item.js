import React from 'react';
import Page from '../components/Page';
import SingleItem from '../components/SingleItem';

class ItemPage extends React.Component {
  static async getInitialProps({ query }) {
    return { query };
  }
  render() {
    return (
      <Page>
        <SingleItem id={this.props.query.id} />
      </Page>
    );
  }
}

export default ItemPage;
