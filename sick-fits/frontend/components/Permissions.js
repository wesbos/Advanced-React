import React, { useState } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Error from './ErrorMessage';
import Table from './styles/Table';
import SickButton from './styles/SickButton';

const PERMISSIONS_QUERY = gql`
  query {
    users {
      id
      name
      email
      permissions
    }
  }
`;
const usersPermissions = [
  'ADMIN',
  'USER',
  'ITEMCREATE',
  'ITEMUPDATE',
  'ITEMDELETE',
  'PERMISSIONUPDATE'
];

const PermissionsComp = props => (
  <Query query={PERMISSIONS_QUERY}>
    {({ data, loading, error }) => (
      <div>
        <Error error={error} />
        <>
          <p>Management permissions</p>
          <Table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                {usersPermissions.map(usersPermission => {
                  return <th>{usersPermission}</th>;
                })}
                <th>🖕</th>
              </tr>
            </thead>
            <tbody>
              {data.users.map(user => (
                <User user={user} />
              ))}
            </tbody>
          </Table>
        </>
      </div>
    )}
  </Query>
);

class User extends React.Component {
  render() {
    const user = this.props.user;
    return (
      <tr>
        <td>{user.name}</td>
        <td>{user.email}</td>
        {usersPermissions.map(permission => (
          <td>
            <label htmlFor={`${user.id}-permission-${permission}`}>
            <input type="checkbox"/>
            </label>
          </td>
        ))}
        <td><SickButton>Update</SickButton></td>
      </tr>
    );
  }
}

export default PermissionsComp;
