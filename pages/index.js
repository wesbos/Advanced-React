import { Component } from 'react';
import Items from '../components/Items';
import CreateItem from '../components/CreateItem';
import Count from '../components/Count';
import LoginAuth0 from '../components/LoginAuth0';
import Header from '../components/Header';
import Page from '../components/Page';

class Home extends Component {
  render() {
    return (
      <Page>
        <LoginAuth0 />
        <Count/>
        <CreateItem />
        <Items></Items>
      </Page>
    )
  }
}

export default Home;
