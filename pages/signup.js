import { Component } from 'react';
import withData from '../lib/withData';
import Items from '../components/Items';
import CreateItem from '../components/CreateItem';
import Signup from '../components/Signup';
import LoginAuth0 from '../components/LoginAuth0';
import Page from '../components/Page';

class SignUpPage extends Component {
  render() {
    return (
      <Page>
        <p>I'm the signup url!</p>
        <LoginAuth0></LoginAuth0>
        <Signup />
      </Page>
    )
  }
}

export default withData(SignUpPage);
