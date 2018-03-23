import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import { SIGNUP_MUTATION } from '../queries';
import Form from './styles/Form';
import Error from './ErrorMessage';

class Signup extends Component {
  state = {
    email: `wesbos@gmail.com`,
    name: 'Wes Bos',
    password: 'wes',
  };

  saveToState = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <Mutation mutation={SIGNUP_MUTATION} variables={this.state}>
        {(signup, { loading, error }) => (
          <Form
            onSubmit={e => {
              e.preventDefault();
              signup();
            }}
          >
            <fieldset disabled={loading} aria-busy={loading}>
              <Error error={error} />
              <h2>Sign Up for an Account</h2>
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

              <label htmlFor="name">
                Name
                <input type="text" name="name" placeholder="name" value={this.state.name} onChange={this.saveToState} />
              </label>

              <label htmlFor="signupPassword">
                Password
                <input
                  type="password"
                  name="password"
                  id="signupPassword"
                  className="password"
                  placeholder="password"
                  value={this.state.password}
                  onChange={this.saveToState}
                />
              </label>

              <button type="submit">Submit</button>
            </fieldset>
          </Form>
        )}
      </Mutation>
    );
  }
}

export default Signup;
