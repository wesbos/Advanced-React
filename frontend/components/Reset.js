import React from 'react';
import { Mutation } from 'react-apollo';
import PropTypes from 'prop-types';
import Form from './styles/Form';
import Error from './ErrorMessage';
import { RESET_MUTATION, CURRENT_USER_QUERY } from '../queries';

class Reset extends React.Component {
  static propTypes = {
    resetToken: PropTypes.string.isRequired,
  };

  state = {
    confirmPassword: '',
    password: '',
  };

  saveToState = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  resetPassword = async (e, resetMutation) => {
    e.preventDefault();
    const res = await resetMutation();
    console.log(res);
    // sign them in!
    localStorage.setItem('token', res.data.resetPassword.token);
    // TODO: Manually call refresh on a Query
  };

  render() {
    return (
      <Mutation
        mutation={RESET_MUTATION}
        variables={{
          resetToken: this.props.resetToken,
          password: this.state.password,
          confirmPassword: this.state.confirmPassword,
        }}
        refetchQueries={[{ query: CURRENT_USER_QUERY }]}
      >
        {(resetMutation, { error, loading }) => (
          <Form onSubmit={e => this.resetPassword(e, resetMutation)}>
            <Error error={error} />
            <fieldset disabled={loading} aria-busy={loading}>
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
            </fieldset>
          </Form>
        )}
      </Mutation>
    );
  }
}

export default Reset;
