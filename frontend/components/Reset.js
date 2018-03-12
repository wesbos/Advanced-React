import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import { RESET_MUTATION, CURRENT_USER_QUERY } from '../queries';
import Form from './styles/Form';

class Reset extends Component {
  state = {
    confirmPassword: '',
    password: '',
    errors: [],
  };

  saveToState = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  resetPassword = async e => {
    console.log(e);
    e.preventDefault();

    if (this.state.password !== this.state.confirmPassword) {
      this.setState({ errors: [{ message: 'Passwords Must Match!' }] });
    }

    const res = await this.props.resetPassword({
      variables: {
        resetToken: this.props.resetToken,
        password: this.state.password,
        confirmPassword: this.state.confirmPassword,
      },
    });

    if (res.errors) {
      this.setState({ errors: res.errors });
      return;
    }
    console.log('Back!');
    console.log(res);
    // sign them in!
    localStorage.setItem('token', res.data.resetPassword.token);
    // refresh the current user query
    this.props.currentUser.refetch();
  };

  render() {
    return (
      <div>
        {this.state.loading ? 'LOADING...' : 'Ready!'}

        {this.state.errors ? this.state.errors.map((err, i) => <p key={i}>{err.message}</p>) : null}

        <Form onSubmit={this.resetPassword}>
          <label htmlFor="password">
            password
            <input
              value={this.state.password}
              onChange={this.saveToState}
              name="password"
              type="password"
              id="password"
            />
          </label>
          <label htmlFor="confirm">
            Confirm:
            <input
              value={this.state.confirmPassword}
              onChange={this.saveToState}
              name="confirmPassword"
              type="password"
              id="confirmPassword"
            />
          </label>

          <button type="submit">Request Reset!</button>
        </Form>
      </div>
    );
  }
}

// When we submit this mutation, we need to update our store - we have a few ways to do that:
// One - we can go nucular and run refetchQueries() which will just go get everything - this is easy, but at the cost of efficiency.

const restEnahncer = graphql(RESET_MUTATION, { name: 'resetPassword' });
const userEnhancer = graphql(CURRENT_USER_QUERY, { name: 'currentUser' });

export default compose(restEnahncer, userEnhancer)(Reset);
