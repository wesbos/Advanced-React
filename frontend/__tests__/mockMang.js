import { importSchema } from 'graphql-import';
import { makeExecutableSchema } from 'graphql-tools';
import MockClient from 'graphql-mock';
import casual from 'casual';
import PropTypes from 'prop-types';
import { ApolloProvider } from 'react-apollo';
import { mount } from 'enzyme';

// seed it so we get consistent results
casual.seed(777);

// By default graphql-mock will generate random numbers, IDs, and Strings of "Hello World"
// We can overwrite any of those if we need to

const mocks = {
  ID: () => casual.uuid,
  Node: () => casual.uuid,
  DateTime: () => new Date(1400000000000),
  Int: () => casual.integer(400, 5500),
  OrderItem: () => ({
    quantity: casual.integer(1, 10),
    image: 'dog.jpg',
    title: casual.title,
    description: casual.description,
    price: () => 50000,
  }),
  Item: () => ({
    title: casual.title,
    description: casual.description,
    price: () => 50000,
    image: 'dog.jpg',
    largeImage: 'large-dog.jpg',
  }),
  User: () => ({
    email: casual.email,
    name: casual.name,
  }),
};

const fakeItem = () => ({
  __typename: 'Item',
  id: '123',
  price: 5000,
  user: null,
  image: 'dog-small.jpg',
  title: 'dogs are best',
  description: 'dogs',
  largeImage: 'dog.jpg',
});

const resolvers = {
  // Query: {
  //   cartOpen: () => true,
  // },
};

const typeDefs = importSchema('../backend/src/schema.graphql');

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
  resolverValidationOptions: { requireResolversForResolveType: false },
});

// Creates a mocked client
const mocked = new MockClient(schema, mocks);

const mountOptions = {
  context: {
    client: mocked.client,
  },
  childContextTypes: {
    client: PropTypes.object,
  },
};

const mountWithApollo = Component => {
  const wrapper = mount(<ApolloProvider client={mocked.client}>{Component}</ApolloProvider>);
  return { wrapper, component: wrapper.children() };
};

export default mountOptions;

export { mocked, mountWithApollo, fakeItem };
