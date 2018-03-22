import { Component } from 'react';
import styled from 'styled-components';
import withData from '../lib/withData';
import Signup from '../components/Signup';
import Signin from '../components/Signin';
import Page from '../components/Page';
import ResetRequest from '../components/ResetRequest';

const Columns = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 50px;
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

export default withData(SignUpPage);
