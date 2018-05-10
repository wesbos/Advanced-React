import React from 'react';
import { Query, Mutation } from 'react-apollo';
import Form from './styles/Form';
import { CURRENT_USER_QUERY, UPDATE_USER_MUTATION } from '../queries/queries';
import Error from './ErrorMessage';

class EditUser extends React.Component {
  state = {
    changes: {},
  };

  handleChange = e => {
    const { name, value } = e.target;
    const changes = {
      ...this.state.changes,
      [name]: value,
    };
    this.setState({ changes });
  };

  handleSubmit = async (e, updateUser) => {
    e.preventDefault();
    // only submit if there are real changes
    if (Object.keys(this.state.changes).length === 0) return;
    await updateUser();
    this.setState({ changes: {} });
  };

  render() {
    return (
      <Query query={CURRENT_USER_QUERY}>
        {({ data: { me }, loading }) => {
          if (loading) return <p>Loading...</p>;
          return (
            <Mutation
              mutation={UPDATE_USER_MUTATION}
              refetchQueries={[{ query: CURRENT_USER_QUERY }]}
              variables={this.state.changes}
            >
              {(updateUser, { error, called }) => (
                <Form onSubmit={e => this.handleSubmit(e, updateUser)}>
                  <Error error={error} />
                  <fieldset disabled={loading} aria-busy={loading}>
                    {called && !error && <p data-test="updated">Updated!</p>}
                    <label htmlFor="name">
                      Name:
                      <input
                        type="text"
                        name="name"
                        defaultValue={me.name}
                        onChange={this.handleChange}
                      />
                    </label>
                    <button type="submit">Update</button>
                    <strong>me:</strong>
                    <pre>{JSON.stringify(me.name)}</pre>
                    <strong>Change:</strong>
                    <pre data-test="change">{JSON.stringify(this.state.changes)}</pre>
                  </fieldset>
                </Form>
              )}
            </Mutation>
          );
        }}
      </Query>
    );
  }
}

export default EditUser;
