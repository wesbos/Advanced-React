import React, { Component } from 'react';
import { Query, Mutation } from 'react-apollo';
import { CURRENT_USER_QUERY, SIGN_OUT_MUTATION } from '../queries/queries.graphql';

class Signout extends Component {
  render() {
    return (
      <Mutation mutation={SIGN_OUT_MUTATION} refetchQueries={[{ query: CURRENT_USER_QUERY }]}>
        {signout => <button onClick={signout}>Sign Out</button>}
      </Mutation>
    );
  }
}

export default Signout;
