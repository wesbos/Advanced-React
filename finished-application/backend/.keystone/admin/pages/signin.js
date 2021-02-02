import React from 'react';
import { gql } from '@keystone-next/admin-ui/apollo';
import { SigninPage } from '@keystone-next/auth/pages/SigninPage';

export default function Signin() {
  return (
    <SigninPage
      identityField="email"
      secretField="password"
      mutationName="authenticateUserWithPassword"
      successTypename="UserAuthenticationWithPasswordSuccess"
      failureTypename="UserAuthenticationWithPasswordFailure"
    />
  );
}
