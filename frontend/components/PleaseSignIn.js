import { Query } from 'react-apollo';
import { CURRENT_USER_QUERY } from '../queries/index';
import Signin from './Signin';
import Dump from './Dump';

const PleaseSignIn = props => (
  <Query query={CURRENT_USER_QUERY}>
    {({ data }) => {
      // check if they are signed in
      if (!data.me) {
        return (
          <div>
            <p>Please sign in before continuing!</p>
            <Signin />
          </div>
        );
      }
      // check if they need permissions
      if (props.allowedPermissions) {
        // check if they NO permissions, or they don't meet the requmrenets
        if (
          !data.me.permissions ||
          !props.allowedPermissions.some(permission => data.me.permissions.contains(permission))
        ) {
          return <p>Insufficient Permissions to Manage Permissions</p>;
        }
      }
      return props.children;
    }}
  </Query>
);

export default PleaseSignIn;
