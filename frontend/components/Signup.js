import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import { SIGNUP_MUTATION, CURRENT_USER_QUERY } from '../queries';
import Form from './styles/Form';

class Signup extends Component {
  state = {
    email: `wesbos+${Date.now()}@gmail.com`,
    name: 'Wes Bos',
    password: 'abc123',
    error: undefined,
  };

  createUser = async e => {
    e.preventDefault();
    // pull the values from state
    const { email, name, password } = this.state;
    // create a mutation
    // TODO: handle any errors
    // turn loading on
    this.setState({ loading: true });
    console.log({ name, email, password });
    try {
      const res = await this.props.signup({
        // pass in those variables from state
        variables: { name, email, password },
      });
      localStorage.setItem('token', res.data.signup.token);
      // TODO refetch current user query
      this.props.currentUser.refetch();
    } catch (error) {
      this.setState({ error });
      console.dir(error);
    }
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

        {this.state.error ? <p>{this.state.error.message}</p> : null}

        <Form onSubmit={this.createUser}>
          <label htmlFor="email">
            Email
            <input value={this.state.email} onChange={this.saveToState} name="email" type="text" placeholder="email" />
          </label>

          <label htmlFor="name">
            Name
            <input type="text" name="name" placeholder="name" value={this.state.name} onChange={this.saveToState} />
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

          <button type="submit">Submit</button>
        </Form>
      </div>
    );
  }
}

// When we submit this mutation, we need to update our store - we have a few ways to do that:
// One - we can go nucular and run refetchQueries() which will just go get everything - this is easy, but at the cost of efficiency.

const userEnhancer = graphql(CURRENT_USER_QUERY, { name: 'currentUser' });

const signupEnhancer = graphql(SIGNUP_MUTATION, {
  name: 'signup',
  options: {
    refetchQueries: ['currentUser'],
  },
});

export default compose(userEnhancer, signupEnhancer)(Signup);
