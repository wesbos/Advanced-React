import { Component } from 'react';
import withData from '../../lib/withData';
import UpdateItem from '../../components/UpdateItem';
import Page from '../../components/Page';

class Home extends Component {
  render() {
    return (
      <Page>
        <p>Update You Item!</p>
        <UpdateItem id={this.props.url.query.id} />
      </Page>
    );
  }
}

export default withData(Home);
