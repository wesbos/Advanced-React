import React, { Component } from 'react';
import { Mutation, ApolloConsumer } from 'react-apollo';
import { SIGNIN_MUTATION, CURRENT_USER_QUERY } from '../queries/queries';
import Error from './ErrorMessage';
import Form from './styles/Form';

class Signin extends Component {
  state = {
    email: `wesbos@gmail.com`,
    password: 'abc123',
  };

  loginUser = async (e, signin, client) => {
    e.preventDefault();
    const res = await signin();
    localStorage.setItem('token', res.data.signin.token);
    client.query({ query: CURRENT_USER_QUERY, fetchPolicy: 'network-only' });
  };

  saveToState = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    // TODO / ASK - do I really have to wrap this in a query just to access the refetch function
    return (
      <ApolloConsumer>
        {client => (
          <Mutation mutation={SIGNIN_MUTATION} variables={this.state}>
            {(signin, { loading, error }) => (
              <Form onSubmit={e => this.loginUser(e, signin, client)}>
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
      </ApolloConsumer>
    );
  }
}

export default Signin;
