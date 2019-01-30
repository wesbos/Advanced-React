// expose high order component of Apollo (essentially front-end DB) via a prop
// for server-side rendering to work
import withApollo from 'next-with-apollo';
// apollo-boost is a package that contains many boilerplate packages of Apollo.. 1 stop shop essentially
import ApolloClient from 'apollo-boost';
import { endpoint } from '../config';

function createClient({ headers }) {
  return new ApolloClient({
    uri: process.env.NODE_ENV === 'development' ? endpoint : endpoint,
    // on every request... include the credentials -> if any logged-in cookies.. it'll be brought along
    request: operation => {
      operation.setContext({
        fetchOptions: {
          credentials: 'include',
        },
        headers,
      });
    },
  });
}
// createClient -> done in App.js
export default withApollo(createClient);
