import React, { Component } from 'react';
import { graphql, gql } from 'react-apollo';
import { CREATE_USER_MUTATION } from '../queries';

class Signup extends Component {
  constructor() {
    super();
    const idToken = typeof window !== 'undefined' ? localStorage.getItem('auth0IdToken') || '' : '';
    this.state = {
      email: '',
      name: '',
      idToken,
      error: undefined,
    };
  }

  render() {
    return (
      <div>
        {this.state.loading ? 'LOADING...' : 'Ready!'}

        {this.state.error ? <p>{this.state.error.message}</p> : ''}

        <form onSubmit={this._createUser}>
          <p>
            Email
            <input
              value={this.state.email}
              onChange={e => this.setState({ email: e.target.value })}
              type="text"
              placeholder="email"
            />
          </p>

          <p>
            Name
            <input
              value={this.state.name}
              onChange={e => this.setState({ name: e.target.value })}
              type="text"
              placeholder="name"
            />
          </p>

          <p>
            idToken
            <input
              disabled
              value={this.state.idToken}
              onChange={e => this.setState({ idToken: e.target.value })}
              type="text"
              placeholder="name"
            />
          </p>

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }

  _createUser = async e => {
    e.preventDefault();
    // pull the values from state
    const { email, name, idToken } = this.state;
    // create a mutation
    // TODO: handle any errors
    // turn loading on
    this.setState({ loading: true });
    console.log(name, email, idToken);
    try {
      const res = await this.props.createUserMutation({
        // pass in those variables from state
        variables: { name, email, idToken },
      });
    } catch (error) {
      this.setState({ error });
      console.dir(error);
    }
    this.setState({ loading: false });
  };
}
// When we submit this mutation, we need to update our store - we have a few ways to do that:
// One - we can go nucular and run refetchQueries() which will just go get everything - this is easy, but at the cost of efficiency.

export default graphql(CREATE_USER_MUTATION, {
  name: 'createUserMutation',
  options: {
    // Easy, but slow
    // refetchQueries: ['AllLinksQuery']
    // This is much Better / efficient
    // Notice how the variable is called createItem - that is because createItem is the name of the query!
  },
})(Signup);
