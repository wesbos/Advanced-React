import React from 'react';
import { Query, Mutation } from 'react-apollo';
import PropTypes from 'prop-types';
import { ALL_USERS_QUERY, UPDATE_PERMISSIONS_MUTATION } from '../queries/queries';
import Error from './ErrorMessage';
import SickButton from './styles/SickButton';
import Table from './styles/Table';

const possiblePermissions = [
  'ADMIN',
  'USER',
  'ITEMCREATE',
  'ITEMUPDATE',
  'ITEMDELETE',
  'PERMISSIONUPDATE',
];

class User extends React.Component {
  static propTypes = {
    user: PropTypes.shape({
      permissions: PropTypes.array.isRequired,
      id: PropTypes.string.isRequired,
    }).isRequired,
  };
  state = {
    permissions: this.props.user.permissions,
  };
  handlePermissionsChange = e => {
    const checkbox = e.target;
    let updatedPermissions = [...this.state.permissions];
    if (checkbox.checked) {
      // add it in
      updatedPermissions.push(checkbox.value);
    } else {
      updatedPermissions = updatedPermissions.filter(permission => permission !== checkbox.value);
    }
    this.setState({ permissions: updatedPermissions });
  };
  render() {
    const { user } = this.props;
    return (
      <Mutation mutation={UPDATE_PERMISSIONS_MUTATION}>
        {(updatePermissions, { loading, error }) => (
          <tr key={user.id} className="user">
            <Error error={error} />
            <td>{user.name}</td>
            <td>{user.email}</td>
            {possiblePermissions.map(permission => (
              <td>
                <label key={permission} htmlFor={`${user.id}-permission-${permission}`}>
                  <input
                    type="checkbox"
                    checked={this.state.permissions.includes(permission)}
                    name={`permission-${permission}`}
                    id={`${user.id}-permission-${permission}`}
                    onChange={this.handlePermissionsChange}
                    value={permission}
                  />
                </label>
              </td>
            ))}
            <td>
              <SickButton
                type="button"
                disabled={loading}
                onClick={async () => {
                  await updatePermissions({
                    variables: {
                      permissions: this.state.permissions,
                      userId: this.props.user.id,
                    },
                  });
                }}
              >
                Updat{loading ? 'ing' : 'e'}
              </SickButton>
            </td>
          </tr>
        )}
      </Mutation>
    );
  }
}

const Permissions = () => (
  <Query query={ALL_USERS_QUERY}>
    {({ data, error, loading }) => {
      if (loading) return <div>Loading</div>;
      if (error) return <Error error={error} />;
      return (
        <div>
          <h1>Manage User Permissions</h1>
          <Table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                {possiblePermissions.map(p => <th>{p}</th>)}
                <th>👇🏻</th>
              </tr>
            </thead>
            <tbody>{data.users.map(user => <User key={user.id} user={user} />)}</tbody>
          </Table>
        </div>
      );
    }}
  </Query>
);

export default Permissions;
