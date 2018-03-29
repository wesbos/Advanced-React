import withApollo from 'next-with-apollo';
import ApolloClient from 'apollo-boost';

// can also be a function that accepts a `headers` object (SSR only) and returns a config

export default withApollo({
  client: new ApolloClient({
    uri: 'http://localhost:4444',
    // cache: new InMemoryCache().restore(initialState || {}),
    // ssrMode: !process.browser, // Disables forceFetch on the server (so queries are only run once)
    request: operation => {
      console.log('hey');
      if (typeof localStorage !== 'undefined' && localStorage.getItem('token')) {
        console.log('heyyy');
        console.log(`Bearer ${localStorage.getItem('token')}`);
        operation.setContext({
          headers: {
            authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
      }
    },
  }),
});

// OPTION 2

// import { withData } from 'next-apollo';
// import { HttpLink } from 'apollo-link-http';
// import { ApolloLink } from 'apollo-link';

// // can also be a function that accepts a `headers` object (SSR only) and returns a config
// const networkLink = new HttpLink({
//   uri: 'http://localhost:4444', // Server URL (must be absolute)
//   opts: {
//     credentials: 'same-origin', // Additional fetch() options like `credentials` or `headers`
//   },
// });

// const middlewareLink = new ApolloLink((operation, forward) => {
//   if (typeof localStorage !== 'undefined' && localStorage.getItem('token')) {
//     console.log('heyyy');
//     console.log(`Bearer ${localStorage.getItem('token')}`);
//     operation.setContext({
//       headers: {
//         authorization: `Bearer ${localStorage.getItem('token')}`,
//       },
//     });
//   }
//   return forward(operation);
// });

// const link = middlewareLink.concat(networkLink);

// export default withData({ link });
