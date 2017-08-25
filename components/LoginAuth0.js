import { Component, PropTypes } from 'react'
import Auth0Lock from 'auth0-lock'

class LoginAuth0 extends Component {

  constructor (props) {
    super(props)
    if(typeof window === 'undefined') return;
    const redirectUrl = `http://localhost:3000/signup`;
    console.log(redirectUrl);
    this._lock = new Auth0Lock('l851ev2q8X48wf56eGLjIWFbMwwbvWPE', 'wesbos.auth0.com', {
      auth: {
        redirect: false,
      }
    });
  }

  createUser = () => {
    const variables = {
      idToken: window.localStorage.getItem("auth0IdToken"),
      emailAddress: 'wesbos@gmail.com',
      name: 'Hardcoded Wes'
    };
    // TODO - make a createUser function
    this.props
      .createUser({ variables })
      .then(response => {
        this.props.history.replace("/");
      })
      .catch(e => {
        console.error(e);
        this.props.history.replace("/");
      });
  };

  componentDidMount() {
    console.log('MOUNT');
    this._lock.on('authenticated', (authResult) => {
      console.log('HIIIIIIII')
      window.localStorage.setItem('auth0IdToken', authResult.idToken)
      console.log('Done!', authResult);
    })
  }

  _showLogin = () => {
    this._lock.show()
  }

  render() {
    return (
      <div>
        <button onClick={this._showLogin}>Log in with Auth0 </button>
      </div>
    )
  }
}

export default LoginAuth0;
