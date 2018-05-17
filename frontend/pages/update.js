import { Component } from 'react';
import UpdateItem from '../components/UpdateItem';
import PleaseSignIn from '../components/PleaseSignIn';

class Home extends Component {
  render() {
    return (
      <PleaseSignIn>
        <UpdateItem id={this.props.query.id} />
      </PleaseSignIn>
    );
  }
}

export default Home;
