import React from 'react';
import { Mutation } from 'react-apollo';
import { REQUEST_RESET_MUTATION } from '../queries';
import Form from './styles/Form';
import Error from './ErrorMessage';

class ResetRequest extends React.Component {
  state = {
    email: '',
  };

  render() {
    return (
      <Mutation mutation={REQUEST_RESET_MUTATION} variables={this.state}>
        {(resetMutation, { loading, error }) => (
          <Form
            onSubmit={async e => {
              e.preventDefault();
              const res = await resetMutation();
              console.log(res);
            }}
          >
            <Error error={error} />
            <fieldset disabled={loading} aria-busy={loading}>
              <label htmlFor="email">
                Email
                <input
                  value={this.state.email}
                  onChange={e => this.setState({ email: e.target.value })}
                  name="email"
                  type="text"
                  placeholder="email"
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

export default ResetRequest;
