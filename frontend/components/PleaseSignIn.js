import { Query } from 'react-apollo';
import PropTypes from 'prop-types';
import { CURRENT_USER_QUERY } from '../queries/queries.graphql';
import Signin from './Signin';

const PleaseSignIn = props => (
  <Query query={CURRENT_USER_QUERY}>
    {({ data, loading }) => {
      if (loading) return <p>Loading...</p>;
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
          !props.allowedPermissions.some(permission => data.me.permissions.includes(permission))
        ) {
          return (
            <p>
              Insufficient Permissions. You have:
              <strong>{data.me.permissions}</strong>
              and you need
              <strong>{props.allowedPermissions.join(' OR ')}</strong>
            </p>
          );
        }
      }
      return props.children;
    }}
  </Query>
);

PleaseSignIn.propTypes = {
  allowedPermissions: PropTypes.array,
  children: PropTypes.any.isRequired,
};

export default PleaseSignIn;
