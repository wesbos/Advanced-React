import React from 'react';
import styled from 'styled-components';
import Signup from '../components/Signup';
import Signin from '../components/Signin';
import Page from '../components/Page';
import ResetRequest from '../components/ResetRequest';

const Columns = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;
`;

const SignUpPage = () => (
  <Page>
    <Columns>
      <Signup />
      <Signin />
      <ResetRequest />
    </Columns>
  </Page>
);

export default SignUpPage;
