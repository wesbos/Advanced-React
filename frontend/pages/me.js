import { Component } from 'react';
import withData from '../lib/withData';
import Page from '../components/Page';
import EditUser from '../components/EditUser';

class Orders extends Component {
  render() {
    return (
      <Page>
        <h2>My Account</h2>
        <EditUser />
      </Page>
    );
  }
}

export default withData(Orders);
