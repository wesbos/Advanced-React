import { Component } from 'react';
import Items from '../components/Items';
import CreateItem from '../components/CreateItem';
import Count from '../components/Count';
import LoginAuth0 from '../components/LoginAuth0';
import Header from '../components/Header';
import Page from '../components/Page';
import withData from '../lib/withData';

class Home extends Component {
  render() {
    const page = parseInt(this.props.url.query.page) || 1;
    return (
      <Page>

        <Count/>
        <CreateItem />
        <Items page={page}></Items>
      </Page>
    )
  }
}

export default withData(Home);
