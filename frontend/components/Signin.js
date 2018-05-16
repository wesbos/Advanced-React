import React, { Component } from 'react';
import { Mutation, ApolloConsumer } from 'react-apollo';
import { SIGNIN_MUTATION, CURRENT_USER_QUERY } from '../queries/queries.graphql';
import Error from './ErrorMessage';
import Form from './styles/Form';

class Signin extends Component {
  state = {
    email: `wesbos@gmail.com`,
    password: 'abc123',
  };
  saveToState = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <Mutation
        mutation={SIGNIN_MUTATION}
        variables={this.state}
        refetchQueries={[{ query: CURRENT_USER_QUERY }]}
      >
        {(signin, { loading, error }) => (
          <Form
            onSubmit={e => {
              e.preventDefault();
              signin();
            }}
          >
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
    );
  }
}

export default Signin;
