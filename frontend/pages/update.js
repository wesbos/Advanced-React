import { Component } from 'react';
import UpdateItem from '../components/UpdateItem';
import Page from '../components/Page';
import PleaseSignIn from '../components/PleaseSignIn';

class Home extends Component {
  render() {
    return (
      <Page>
        <PleaseSignIn>
          <UpdateItem id={this.props.router.query.id} />
        </PleaseSignIn>
      </Page>
    );
  }
}

export default Home;
