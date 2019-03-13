import { Query } from 'react-apollo';
import Signin from './Signin';
import { CURRENT_USER_QUERY } from './User';

const PleaseSignin = props => (
  <Query query={CURRENT_USER_QUERY}>
    {({ data, loading }) => {
      if (loading) {
        return <p>Loadind...</p>
      }
      if (!data.me) {
       return <Signin />;
      }
      return props.children;
    }}
  </Query>
);

export default PleaseSignin;
// CURRENT_USER_QUERY;
