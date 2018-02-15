import gql from 'graphql-tag';
import { itemDetails } from './fragments';

export const CREATE_ITEM_MUTATION = gql`
  ${itemDetails}
  mutation createItem($description: String!, $title: String!, $price: Int!, $image: String) {
    createItem(description: $description, title: $title, price: $price, image: $image) {
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
  query AllItemsQuery($skip: Int = 0, $first: Int = 3) {
    itemsConnection(orderBy: createdAt_DESC, first: $first, skip: $skip) {
      pageInfo {
        hasNextPage
        hasPreviousPage
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
  ${itemDetails}
  query userQuery {
    me {
      id
      email
      name
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
        image
      }
    }
    # user {
    #   # grab the current user
    #   id
    #   orders {
    #     # and a all their orders
    #     id
    #     amount
    #     charge
    #     item {
    #       # populate the details about the item they bought with the image, description and title
    #       image {
    #         id
    #         secret
    #       }
    #       description
    #       title
    #     }
    #   }
    # }
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

export const GET_CART_STATE = gql`
  query {
    ui {
      isCartOpen
    }
  }
`;

export const UPDATE_UI = gql`
  mutation setLocalData($isConnected: Boolean, $isCartOpen: Boolean) {
    setLocalData(isConnected: $isConnected, isCartOpen: $isCartOpen) @client
  }
`;

export const GET_UI_STATE = gql`
  query cartState {
    uiData @client {
      isConnected
      isCartOpen
    }
  }
`;
