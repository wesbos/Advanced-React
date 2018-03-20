import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import PropTypes from 'prop-types';
import { REQUEST_RESET_MUTATION } from '../queries';
import Form from './styles/Form';

class ResetRequest extends Component {
  static propTypes = {
    requestReset: PropTypes.func.isRequired,
  };

  state = {
    email: '',
    errors: [],
  };

  requestReset = async e => {
    e.preventDefault();
    const res = await this.props.requestReset({
      variables: {
        email: this.state.email,
      },
    });
    if (res.errors) {
      this.setState({ errors: res.errors });
    }
  };

  saveToState = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <Form onSubmit={this.requestReset}>
        {this.state.errors ? this.state.errors.map((err, i) => <p key={i}>{err.message}</p>) : null}
        <label htmlFor="email">
          Email
          <input value={this.state.email} onChange={this.saveToState} name="email" type="text" placeholder="email" />
        </label>

        <button type="submit">Request Reset!</button>
      </Form>
    );
  }
}

const requestResetEnhancer = graphql(REQUEST_RESET_MUTATION, { name: 'requestReset' });

export default compose(requestResetEnhancer)(ResetRequest);
export { ResetRequest };
