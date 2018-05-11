import React from 'react';
import Page from '../components/Page';
import EditUser from '../components/EditUser';

class MyAccount extends React.Component {
  render() {
    return (
      <Page>
        <h2>My Account</h2>
        <EditUser />
      </Page>
    );
  }
}

export default MyAccount;
