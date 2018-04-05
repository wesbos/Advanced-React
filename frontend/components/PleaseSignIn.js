import { Query } from 'react-apollo';
import { CURRENT_USER_QUERY } from '../queries/index';
import Signin from './Signin';

const PleaseSignIn = props => (
  <Query query={CURRENT_USER_QUERY}>
    {({ data }) => {
      if (data.me) {
        return props.children;
      }
      return (
        <div>
          <p>Please sign in before continuing!</p>
          <Signin />
        </div>
      );
    }}
  </Query>
);

export default PleaseSignIn;
