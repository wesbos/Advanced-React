import React from 'react';
import Form from './styles/Form';
import { userEnhancer, updateUserEnhancer } from '../enhancers/enhancers';
import { compose } from 'react-apollo';

class EditUser extends React.Component {
  state = {
    changes: {},
  };
  handleChange = e => {
    const { name, value } = e.target;
    const { me } = this.props.currentUser;
    const changes = {
      ...this.state.changes,
      [name]: value,
    };
    if (value === me[e.target.name]) {
      delete changes[name];
    }
    this.setState({ changes });
  };

  handleSubmit = async e => {
    e.preventDefault();
    const user = await this.props.updateUser({
      variables: this.state.changes,
    });
    this.props.currentUser.refetch();
    this.setState({ changes: {} });
  };

  render() {
    const { me } = this.props.currentUser;
    if (!me) return <p>You must be logged in</p>;
    return (
      <Form onSubmit={this.handleSubmit}>
        <label htmlFor="name">
          Name:
          <input type="text" name="name" defaultValue={me.name} onChange={this.handleChange} />
        </label>
        <button type="submit">Update</button>
        <strong>me:</strong>
        <pre>{JSON.stringify(me.name)}</pre>
        <strong>Change:</strong>
        <pre>{JSON.stringify(this.state.changes)}</pre>
      </Form>
    );
  }
}

export default compose(userEnhancer, updateUserEnhancer)(EditUser);
