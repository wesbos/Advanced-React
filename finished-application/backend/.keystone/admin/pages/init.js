import { InitPage } from '@keystone-next/auth/pages/InitPage';
import React from 'react';
import { gql } from '@keystone-next/admin-ui/apollo';

const fieldPaths = ['name', 'email', 'password'];

export default function Init() {
  return (
    <InitPage
      listKey="User"
      fieldPaths={fieldPaths}
      showKeystoneSignup={true}
    />
  );
}
