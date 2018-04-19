import React, { Component } from 'react';
import { Query } from 'react-apollo';
import { CURRENT_USER_QUERY } from '../queries/queries';

class Signout extends Component {
  signout = refetch => {
    console.log(refetch);
    console.log('Signing Out');
    localStorage.removeItem('token');
    refetch();
  };

  render() {
    return (
      <Query query={CURRENT_USER_QUERY}>
        {({ refetch }) => <button onClick={() => this.signout(refetch)}>Sign Out</button>}
      </Query>
    );
  }
}

export default Signout;
