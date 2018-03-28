import React from 'react';
import { Query, Mutation } from 'react-apollo';
import styled from 'styled-components';
import { BarLoader } from 'react-spinners';
import { perPage } from '../config';
import { ALL_USERS_QUERY, UPDATE_PERMISSIONS_MUTATION } from '../queries/index';
import Error from './ErrorMessage';
import Form from './styles/Form';
import SickButton from './styles/SickButton';

const PermissionsBox = styled.div`
  border: 1px solid ${props => props.theme.offWhite};
  box-shadow: ${props => props.theme.bs};
  margin-bottom: 5rem;
  padding: 2rem;
  label {
    cursor: pointer;
    span {
      transition: all 0.1s;
      padding: 0 1rem;
      display: block;
      border: 1px solid ${props => props.theme.offWhite};
      border-left-width: 20px;
    }
    input {
      display: none;
    }
    input:checked + span {
      border-color: red;
    }
    margin-right: 1rem;
    margin-bottom: 1rem;
  }
  .labels {
    display: flex;
    flex-wrap: wrap;
    & > * {
      flex: 0 1 auto;
    }
  }
`;

class User extends React.Component {
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
          <PermissionsBox key={user.id} className="user">
            <BarLoader className="barLoader" width="100%" height={5} color="red" loading={loading} />
            <Error error={error} />
            <h2>
              {user.name} -- {user.email}
            </h2>
            <div className="labels">
              {[
                'ADMIN',
                'USER',
                'ITEMCREATE',
                'ITEMUPDATE',
                'ITEMDELETE',
                'PERMISSIONUPDATE',
                'NUKE',
              ].map(permission => (
                <label key={permission} htmlFor={`${user.id}-permission-${permission}`}>
                  <input
                    type="checkbox"
                    checked={this.state.permissions.includes(permission)}
                    name={`permission-${permission}`}
                    id={`${user.id}-permission-${permission}`}
                    onChange={this.handlePermissionsChange}
                    value={permission}
                  />
                  <span>{permission}</span>
                </label>
              ))}
            </div>
            <SickButton
              type="button"
              onClick={async () => {
                const res = await updatePermissions({
                  variables: {
                    permissions: this.state.permissions,
                    userId: this.props.user.id,
                  },
                });
                console.log(res);
              }}
            >
              Update Permissions
            </SickButton>
          </PermissionsBox>
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
          {data.users.map(user => <User key={user.id} user={user} />)}
        </div>
      );
    }}
  </Query>
);

export default Permissions;
