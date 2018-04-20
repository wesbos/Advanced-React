import gql from 'graphql-tag';
import { perPage } from '../config';

const itemDetails = gql`
  fragment itemDetails on Item {
    __typename
    id
    title
    price
    description
    image
    largeImage
  }
`;

export const CREATE_ITEM_MUTATION = gql`
  ${itemDetails}
  mutation createItem($description: String!, $title: String!, $price: Int!, $image: String, $largeImage: String) {
    createItem(description: $description, title: $title, price: $price, image: $image, largeImage: $largeImage) {
      ...itemDetails
    }
  }
`;

export const SIGNUP_MUTATION = gql`
  mutation signup($email: String!, $name: String!, $password: String!) {
    signup(email: $email, name: $name, password: $password) {
      token
      user {
        id
        email
        name
      }
    }
  }
`;

export const SIGNIN_MUTATION = gql`
  mutation signup($email: String!, $password: String!) {
    signin(email: $email, password: $password) {
      token
      user {
        id
        email
        name
      }
    }
  }
`;

export const REQUEST_RESET_MUTATION = gql`
  mutation requestReset($email: String!) {
    requestReset(email: $email) {
      id
    }
  }
`;

export const RESET_MUTATION = gql`
  mutation resetPassword($resetToken: String!, $password: String!, $confirmPassword: String!) {
    resetPassword(resetToken: $resetToken, password: $password, confirmPassword: $confirmPassword) {
      token
      user {
        id
        email
        name
      }
    }
  }
`;

export const CREATE_ORDER_MUTATION = gql`
  mutation CreateOrderMutation($token: String!) {
    createOrder(token: $token) {
      id
      charge
      total
      items {
        id
        title
      }
    }
  }
`;

export const ALL_ITEMS_QUERY = gql`
  # Import the Fragment
  ${itemDetails}
  query AllItemsQuery($skip: Int = 0, $first: Int = ${perPage}) {
    itemsConnection(orderBy: createdAt_DESC, first: $first, skip: $skip) @connection(key: "itemsConnection") {
      aggregate {
        count
      }
    }
    items(orderBy: createdAt_DESC, first: $first, skip: $skip) @connection(key: "items") {
      ...itemDetails
    }
  }
`;

export const SINGLE_ITEM_QUERY = gql`
  ${itemDetails}
  query FindItem($id: ID!) {
    items(where: { id: $id }) {
      user {
        id
        email
        name
      }
      # TODO Swap with fragment once apollo is fixed
      id
      title
      price
      description
      image
      largeImage
    }
  }
`;

export const SINGLE_ORDER_QUERY = gql`
  query order($id: ID!) {
    order(id: $id) {
      id
      charge
      total
      createdAt
      user {
        id
      }
      items {
        id
        title
        price
        description
        image
        quantity
      }
    }
  }
`;

export const SEARCH_ITEMS_QUERY = gql`
  ${itemDetails}
  query SearchItems($searchTerm: String!) {
    items(
      where: {
        OR: [
          { title_contains: $searchTerm }
          { description_contains: $searchTerm }
        ]
      }
    ) {
      ...itemDetails
    }
  }
`;

export const REMOVE_ITEM_MUTATION = gql`
  mutation RemoveItem($id: ID!) {
    deleteItem(id: $id) {
      id
      title
      description
    }
  }
`;

export const UPDATE_ITEM_MUTATION = gql`
  ${itemDetails}
  mutation UpdateItem(
    $id: ID!
    $title: String
    $description: String
    $price: Int
  ) {
    updateItem(
      id: $id
      description: $description
      title: $title
      price: $price
    ) {
      ...itemDetails
    }
  }
`;

export const UPDATE_USER_MUTATION = gql`
  mutation UpdateUser($name: String!) {
    updateUser(name: $name) {
      name
    }
  }
`;

export const CURRENT_USER_QUERY = gql`
  ${itemDetails}
  query userQuery {
    me {
      id
      email
      name
      permissions
      orders {
        charge
        id
        total
      }
      cart {
        id
        quantity
        item {
          ...itemDetails
        }
      }
    }
  }
`;

export const USER_ORDERS_QUERY = gql`
  query orders {
    orders(orderBy: createdAt_DESC) {
      id
      total
      createdAt
      updatedAt
      items {
        id
        title
        price
        description
        quantity
        image
      }
    }
  }
`;

export const ADD_TO_CART_MUTATION = gql`
  mutation addToCart($id: ID!) {
    addToCart(id: $id) {
      id
      quantity
      item {
        id
        price
        description
        image
        title
      }
    }
  }
`;

export const REMOVE_FROM_CART_MUTATION = gql`
  mutation removeFromCart($id: ID!) {
    removeFromCart(id: $id) {
      id
    }
  }
`;

export const ALL_USERS_QUERY = gql`
  query Users {
    users {
      id
      name
      email
      permissions
    }
  }
`;

export const UPDATE_PERMISSIONS_MUTATION = gql`
  mutation updatePermissions($permissions: [Permission], $userId: ID!) {
    updatePermissions(permissions: $permissions, userId: $userId) {
      id
      permissions
      name
      email
    }
  }
`;

export const LOCAL_STATE_QUERY = gql`
  {
    cartOpen @client
  }
`;
export const TOGGLE_CART_MUTATION = gql`
  mutation toggleCart {
    toggleCart @client
  }
`;
