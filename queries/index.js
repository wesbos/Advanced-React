import { gql } from 'react-apollo';
import { itemDetails } from './fragments';

export const CREATE_LINK_MUTATION = gql`
  ${itemDetails}
  mutation CreateLinkMutation($description: String!, $title: String!, $imageId: ID, $price: Int!) {
    createItem(
      description: $description,
      title: $title,
      imageId: $imageId
      price: $price
    ) {
      ...itemDetails
    }
  }
`;

export const CREATE_USER_MUTATION = gql`
  mutation CreateUserMutation($email: String!, $name: String!, $idToken: String!) {
    createUser(email: $email, name: $name, authProvider: { auth0: { idToken: $idToken } }) {
      id
      email
      name
      cart {
        id
        title
      }
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
  query AllLinksQuery($skip: Int = 0, $first: Int = 3) {
    _allItemsMeta {
      count
    }
    allItems(orderBy: createdAt_DESC, first: $first, skip: $skip) {
      ...itemDetails
    }
  }
`;

export const SINGLE_ITEM_QUERY = gql`
  ${itemDetails}
  query FindItem($id: ID!) {
    Item(id: $id) {
      ...itemDetails
    }
  }
`;

export const SEARCH_ITEMS_QUERY = gql`
  ${itemDetails}
  query SearchItems($searchTerm: String!) {
    allItems(filter:{
     OR:[
      { title_contains: $searchTerm },
      { description_contains: $searchTerm },
    ]
    }) {
      ...itemDetails
    }
  }
`;

export const DELETE_ITEM_MUTATION = gql`
  mutation DelteItem($id: ID!) {
    deleteItem(id: $id) {
      id
      title
      description
    }
  }
`;

export const UPDATE_LINK_MUTATION = gql`
  ${itemDetails}
  mutation UpdateItem($id: ID!, $title: String!, $description: String!, $price: Int!, $fullPrice: Int!) {
    updateItem(
      id: $id,
      description: $description,
      title: $title,
      price: $price,
      fullPrice: $fullPrice
    ) {
      ...itemDetails
    }
  }
`;

export const CURRENT_USER_QUERY = gql`
  query userQuery {
    user {
      id
      name
      email
      cart {
        id
        price
        title
        image {
          id
          secret
        }
      }
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
