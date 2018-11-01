import withApollo from "next-with-apollo";
// combines all of the apollo tools like apollo-error into one batch
import ApolloClient from "apollo-boost";
import { endpoint } from "../config";

function createClient({ headers }) {
  return new ApolloClient({
    uri: process.env.NODE_ENV === "development" ? endpoint : endpoint,
    request: operation => {
      // middleware
      operation.setContext({
        fetchOptions: {
          credentials: "include"
        },
        headers
      });
    }
  });
}

// make a HOC available
export default withApollo(createClient);
