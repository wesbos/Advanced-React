import { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import { CURRENT_USER_QUERY } from '../queries';
import Cart from './Cart';
import Login from './LoginAuth0';
import Search from './Search';
import NProgress from 'nprogress';
import Router from 'next/router';

Router.onRouteChangeStart = url => {
  console.log(`Loading: ${url}`);
  NProgress.start();
};
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

class Header extends Component {
  componentDidMount() {
    // This fetches the new data, but doesn't populate the user via props
    // this.props.currentUserQuery.refetch();
    // This fetches the new data, and populates the user via props
    // setTimeout(this.props.currentUserQuery.refetch, 1);
  }

  render() {
    // const user = this.props.currentUserQuery.user || {};
    // const { email = '' } = user;
    return (
      <div>
        {/* <p>
          Signed in as <strong>{email}</strong>
        </p> */}
        {/* <Cart /> */}
        <Search />
      </div>
    );
  }
}

const userEnhancer = graphql(CURRENT_USER_QUERY, { name: 'currentUserQuery' });
// export default compose(userEnhancer)(Header);
export default Header;
