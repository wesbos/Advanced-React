import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import { CURRENT_USER_QUERY } from '../queries';

class Signout extends Component {
  signout = () => {
    console.log('Signing Out');
    localStorage.removeItem('token');
    this.props.currentUser.refetch();
  };

  render() {
    const { me, loading, error } = this.props.currentUser;
    if (!me || loading || error) return null;
    return <button onClick={this.signout}>Sign Out of {me.id}👋 🏻</button>;
  }
}

const userEnhancer = graphql(CURRENT_USER_QUERY, { name: 'currentUser' });
export default compose(userEnhancer)(Signout);
