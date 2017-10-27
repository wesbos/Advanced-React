import { Component, PropTypes } from 'react';
import Auth0Lock from 'auth0-lock';
import { graphql, compose } from 'react-apollo';
import { CURRENT_USER_QUERY } from '../queries/index';

class LoginAuth0 extends Component {
  constructor(props) {
    super(props);
    if (typeof window === 'undefined') return;
    const redirectUrl = `http://localhost:3000/signup`;
    this._lock = new Auth0Lock('r6D64Waoq7roAnv8GT04dnn1tpq9PAqu', 'wesbos.auth0.com', {
      auth: {
        redirect: false,
      },
    });
  }

  componentDidMount() {
    this._lock.on('authenticated', authResult => {
      console.log(authResult);
      window.localStorage.setItem('auth0IdToken', authResult.idToken);
      console.log('Im baaaack!');
      this.props.currentUserQuery.refetch();
    });

    this._lock.on('authorization_error', err => {
      console.error(err);
    });

    // refech on page load because of the server render
    this.props.currentUserQuery.refetch();
  }

  logout = () => {
    window.localStorage.removeItem('auth0IdToken');
    this.props.currentUserQuery.refetch();
  };

  createUser = async () => {
    const variables = {
      idToken: window.localStorage.getItem('auth0IdToken'),
      emailAddress: 'wesbos@gmail.com',
      name: 'Hardcoded Wes',
    };
    // TODO - make a createUser function
    this.props
      .createUser({ variables })
      .then(response => {
        // this.props.currentUserQuery.refetch();
        this.props.history.replace('/');
      })
      .catch(e => {
        console.error(e);
        this.props.history.replace('/');
      });
  };

  _showLogin = () => {
    this._lock.show();
  };

  render() {
    const { user } = this.props.currentUserQuery;
    if (user) {
      return <button onClick={this.logout}>Log out 👋</button>;
    }
    return (
      <div>
        <button onClick={this._showLogin}>Log in with Auth0 </button>
      </div>
    );
  }
}

const userEnhancer = graphql(CURRENT_USER_QUERY, { name: 'currentUserQuery' });
export default compose(userEnhancer)(LoginAuth0);
