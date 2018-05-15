import React from 'react';
import Page from '../components/Page';
import SingleItem from '../components/SingleItem';

class ItemPage extends React.Component {
  render() {
    return (
      <Page>
        <SingleItem id={this.props.query.id} />
      </Page>
    );
  }
}

export default ItemPage;
