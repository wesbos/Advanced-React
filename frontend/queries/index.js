import gql from 'graphql-tag';
import { itemDetails } from './fragments';

export const CREATE_ITEM_MUTATION = gql`
  ${itemDetails}
  mutation createItem($description: String!, $title: String!, $price: Int!) {
    createItem(description: $description, title: $title, price: $price) {
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

export const CREATE_ORDER_MUTATION = gql`
  mutation CreateOrderMutation($token: String!, $userId: ID!, $itemId: ID!) {
    createOrder(token: $token, userId: $userId, itemId: $itemId) {
      id
      token
      charge
      amount
      item {
        id
        title
        description
      }
      user {
        id
        email
      }
    }
  }
`;

export const ALL_ITEMS_QUERY = gql`
  # Import the Fragment
  ${itemDetails}
  query AllItemsQuery($skip: Int = 0, $first: Int = 3) {
    itemsConnection(orderBy: createdAt_DESC, first: $first, skip: $skip) {
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
      aggregate {
        count
      }
    }
    items(orderBy: createdAt_DESC, first: $first, skip: $skip) {
      ...itemDetails
    }
  }
`;

export const SINGLE_ITEM_QUERY = gql`
  ${itemDetails}
  query FindItem($id: ID!) {
    items(where: { id: $id }) {
      ...itemDetails
    }
  }
`;

export const SEARCH_ITEMS_QUERY = gql`
  ${itemDetails}
  query SearchItems($searchTerm: String!) {
    allItems(
      filter: {
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

export const UPDATE_LINK_MUTATION = gql`
  ${itemDetails}
  mutation UpdateItem(
    $id: ID!
    $title: String!
    $description: String!
    $price: Int!
    # $fullPrice: Int!
  ) {
    updateItem(
      id: $id
      description: $description
      title: $title
      price: $price
      # fullPrice: $fullPrice
    ) {
      ...itemDetails
    }
  }
`;

export const CURRENT_USER_QUERY = gql`
  query userQuery {
    me {
      id
      email
      name
    }
  }
`;

export const USER_ORDERS_QUERY = gql`
  query {
    user {
      # grab the current user
      id
      orders {
        # and a all their orders
        id
        amount
        charge
        item {
          # populate the details about the item they bought with the image, description and title
          image {
            id
            secret
          }
          description
          title
        }
      }
    }
  }
`;

export const ADD_TO_CART_MUTATION = gql`
  mutation AddToCart($userId: ID!, $itemId: ID!) {
    addToCartItems(userUserId: $userId, cartItemId: $itemId) {
      cartItem {
        id
        title
        price
      }
    }
  }
`;

export const REMOVE_FROM_CART_MUTATION = gql`
  mutation xxx($userId: ID!, $itemId: ID!) {
    removeFromCartItems(userUserId: $userId, cartItemId: $itemId) {
      cartItem {
        id
        title
        price
      }
    }
  }
`;

export const GET_CART_STATE = gql`
  query {
    ui {
      isCartOpen
    }
  }
`;

export const UPDATE_CART_STATE = gql`
  mutation updateCartState($isCartOpen: Boolean!) {
    updateCartState(isCartOpen: $isCartOpen) {
      ui {
        isCartOpen
      }
    }
  }
`;
