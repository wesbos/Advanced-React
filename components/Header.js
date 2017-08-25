import { Component } from 'react'
import { graphql, compose } from 'react-apollo'
import { CURRENT_USER_QUERY } from '../queries';

class Header extends Component {

  componentDidMount() {
    // This fetches the new data, but doesn't populate the user via props
    // this.props.currentUserQuery.refetch();
    // This fetches the new data, and populates the user via props
    setTimeout(this.props.currentUserQuery.refetch, 1);
  }

  render() {
    console.log(this.props.currentUserQuery.user);
    const user = this.props.currentUserQuery.user || {};
    const { email = '' } = user;

    return (
      <div>
        <p>{email} I'm the header!</p>
      </div>
    )
  }
}

const userEnhancer = graphql(CURRENT_USER_QUERY, { name: 'currentUserQuery' });
export default compose(userEnhancer)(Header)
