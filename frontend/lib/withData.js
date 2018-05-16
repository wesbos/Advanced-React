import withApollo from 'next-with-apollo';
import ApolloClient from 'apollo-boost';
import { LOCAL_STATE_QUERY } from '../queries/queries.graphql';
// can also be a function that accepts a `headers` object (SSR only) and returns a config

const client = new ApolloClient({
  uri: process.env.NODE_ENV === 'development' ? 'http://localhost:4444' : 'http://localhost:4444',
  // ssrMode: !process.browser, // Disables forceFetch on the server (so queries are only run once)
  // TODO this is a bug: https://github.com/apollographql/apollo-client/issues/3265
  fetchOptions: {
    credentials: 'include',
  },
  request: async (operation, forward) => {
    operation.setContext({
      fetchOptions: {
        credentials: 'include',
      },
      headers: {
        haha: `lol${Date.now()}`,
        cookie: '',
        // TODO: This cookie needs to come from the SSR
        // cookie:'token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJjamY0ZWtqcm55ZGQ0MDkxNnhweXEweGVqIiwiaWF0IjoxNTI2NDc4NzY2fQ.LJbLhKZ6j5d3ntDvaBR4V-4rFEPv_pzJiIhZ84WkO6A',
      },
    });
  },
  clientState: {
    resolvers: {
      Mutation: {
        toggleCart(_, variables, { cache }) {
          const { cartOpen } = cache.read({ query: LOCAL_STATE_QUERY });
          const data = { data: { cartOpen: !cartOpen } };
          cache.writeData(data);
          return data;
        },
      },
    },
    defaults: {
      cartOpen: false,
    },
  },
});

export default withApollo({ client });
