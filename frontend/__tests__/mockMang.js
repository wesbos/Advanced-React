import { importSchema } from 'graphql-import';
import GraphQLMock from 'graphql-mock';
import casual from 'casual';
import PropTypes from 'prop-types';

// seed it so we get consistent results
casual.seed(123);

const typeDefs = importSchema('../backend/src/schema.graphql');

// By default graphql-mock will generate random numbers, IDs, and Strings of "Hello World"
// We can overwrite any of those if we need to

const mocks = {
  ID: () => casual.uuid,
  Item: () => ({
    title: casual.title,
    description: casual.description,
    price: () => 50000,
  }),
  User: () => ({
    email: casual.email,
    name: casual.name,
  }),
};

// Creates a mocked client
const mocked = new GraphQLMock(typeDefs, mocks);

const mountOptions = {
  context: {
    client: mocked.client,
  },
  childContextTypes: {
    client: PropTypes.object,
  },
};

export default mountOptions;
