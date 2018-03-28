import React, { Component } from 'react';
import { Mutation, Query } from 'react-apollo';
import { SIGNIN_MUTATION, CURRENT_USER_QUERY } from '../queries';
import Error from './ErrorMessage';
import Form from './styles/Form';

class Signin extends Component {
  state = {
    email: `wesbos@gmail.com`,
    password: 'abc123',
  };

  loginUser = async (e, signin, refetchUser) => {
    e.preventDefault();
    const res = await signin();
    localStorage.setItem('token', res.data.signin.token);
    await refetchUser();
    // TODO refetch current user query
  };

  update = (proxy, payload) => {
    console.log(proxy);
    const data = proxy.readQuery({ query: CURRENT_USER_QUERY });
    data.me = payload.data.signin.user;
    proxy.writeQuery({ query: CURRENT_USER_QUERY, data });
  };

  saveToState = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    // TODO / ASK - do I really have to wrap this in a query just to access the refetch function
    return (
      <Query query={CURRENT_USER_QUERY}>
        {({ refetch }) => (
          <Mutation mutation={SIGNIN_MUTATION} variables={this.state}>
            {(signin, { data, loading, error }) => (
              <Form onSubmit={e => this.loginUser(e, signin, refetch)}>
                <Error error={error} />
                <fieldset disabled={loading} aria-busy={loading}>
                  <label htmlFor="email">
                    Email
                    <input
                      value={this.state.email}
                      onChange={this.saveToState}
                      name="email"
                      type="text"
                      placeholder="email"
                    />
                  </label>

                  <label htmlFor="password">
                    Password
                    <input
                      type="password"
                      name="password"
                      id="password"
                      className="password"
                      placeholder="password"
                      value={this.state.password}
                      onChange={this.saveToState}
                    />
                  </label>

                  <button type="submit">Sign In!</button>
                </fieldset>
              </Form>
            )}
          </Mutation>
        )}
      </Query>
    );
  }
}

export default Signin;
