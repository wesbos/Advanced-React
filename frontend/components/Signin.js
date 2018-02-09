import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import { SIGNIN_MUTATION, CURRENT_USER_QUERY } from '../queries';

class Signin extends Component {
  state = {
    email: `wesbos@gmail.com`,
    password: 'abc123',
    errors: [],
  };

  loginUser = async e => {
    e.preventDefault();
    // pull the values from state
    const { email, password } = this.state;
    this.setState({ loading: true, errors: [] });
    const res = await this.props.signin({
      // pass in those variables from state
      variables: { name, email, password },
    });
    if (res.errors) {
      this.setState({ errors: res.errors });
      return;
    }
    localStorage.setItem('token', res.data.signin.token);
    // TODO refetch current user query
    this.props.currentUser.refetch();

    this.setState({ loading: false });
  };

  saveToState = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div>
        {this.state.loading ? 'LOADING...' : null}

        {this.state.errors ? this.state.errors.map(err => <p>{err.message}</p>) : null}

        <form onSubmit={this.loginUser}>
          <label htmlFor="email">
            Email
            <input value={this.state.email} onChange={this.saveToState} name="email" type="text" placeholder="email" />
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
        </form>
      </div>
    );
  }
}

// When we submit this mutation, we need to update our store - we have a few ways to do that:
// One - we can go nucular and run refetchQueries() which will just go get everything - this is easy, but at the cost of efficiency.

const userEnhancer = graphql(CURRENT_USER_QUERY, { name: 'currentUser' });
const signinEnhancer = graphql(SIGNIN_MUTATION, { name: 'signin' });

export default compose(signinEnhancer, userEnhancer)(Signin);
