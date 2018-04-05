import { Component } from 'react';
import withData from '../../lib/withData';
import UpdateItem from '../../components/UpdateItem';
import Page from '../../components/Page';
import PleaseSignIn from '../../components/PleaseSignIn';

class Home extends Component {
  render() {
    return (
      <Page>
        <PleaseSignIn>
          <UpdateItem id={this.props.url.query.id} />
        </PleaseSignIn>
      </Page>
    );
  }
}

export default withData(Home);
