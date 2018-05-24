import React from 'react';
import { Mutation } from 'react-apollo';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import Form from './styles/Form';
import Error from './ErrorMessage';
import { CURRENT_USER_QUERY } from './User';

const RESET_MUTATION = gql`
  mutation RESET_MUTATION($resetToken: String!, $password: String!, $confirmPassword: String!) {
    resetPassword(resetToken: $resetToken, password: $password, confirmPassword: $confirmPassword) {
      id
      email
      name
    }
  }
`;

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
    await resetMutation();
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
export { RESET_MUTATION };
