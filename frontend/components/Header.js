import { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import { userEnhancer } from '../enhancers/enhancers';
import Cart from './Cart';
import Login from './LoginAuth0';
import Search from './Search';
import NProgress from 'nprogress';
import Router from 'next/router';
import Signout from './Signout';

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
    console.log(this.props.currentUser);
  }

  render() {
    return (
      <div>
        {this.props.currentUser.me ? this.props.currentUser.me.email : 'Not Signed in'}
        <Signout />
        <Cart />
        {/* <Search /> */}
      </div>
    );
  }
}

export default compose(userEnhancer)(Header);
// export default Header;
