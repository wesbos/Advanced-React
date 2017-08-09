import { Component } from 'react';
import withData from '../../lib/withData';
import UpdateItem from '../../components/UpdateItem';

class Home extends Component {
  render() {
    return (
      <div>
        <p>Update You Item!</p>
        <UpdateItem id={this.props.url.query.id} />
      </div>
    )
  }
}

export default withData(Home);
