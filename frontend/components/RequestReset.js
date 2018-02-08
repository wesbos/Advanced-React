import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import { REQUEST_RESET_MUTATION } from '../queries';

class ResetRequest extends Component {
  state = {
    email: `wesbos@gmail.com`,
    password: 'abc123',
    errors: [],
  };

  requestReset = async e => {
    e.preventDefault();
    console.log(this.state.email);
    const res = await this.props.requestReset({
      variables: {
        email: this.state.email,
      },
    });
    if (res.errors) {
      this.setState({ errors: res.errors });
    }
    console.log(res);
    // // pull the values from state
    // const { email, password } = this.state;
    // this.setState({ loading: true, errors: [] });
    // const res = await this.props.signin({
    //   // pass in those variables from state
    //   variables: { name, email, password },
    // });
    // if (res.errors) {
    //   this.setState({ errors: res.errors });
    //   return;
    // }
    // localStorage.setItem('token', res.data.signin.token);
    // // TODO refetch current user query
    // this.props.currentUser.refetch();
    // this.setState({ loading: false });
  };

  saveToState = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div>
        {this.state.loading ? 'LOADING...' : 'Ready!'}

        {this.state.errors ? this.state.errors.map(err => <p>{err.message}</p>) : null}
        <h2>Request a Reset</h2>
        <form onSubmit={this.requestReset}>
          <label htmlFor="email">
            Email
            <input value={this.state.email} onChange={this.saveToState} name="email" type="text" placeholder="email" />
          </label>

          <button type="submit">Request Reset!</button>
        </form>
      </div>
    );
  }
}

// When we submit this mutation, we need to update our store - we have a few ways to do that:
// One - we can go nucular and run refetchQueries() which will just go get everything - this is easy, but at the cost of efficiency.

const requestResetEnhancer = graphql(REQUEST_RESET_MUTATION, { name: 'requestReset' });

export default compose(requestResetEnhancer)(ResetRequest);
