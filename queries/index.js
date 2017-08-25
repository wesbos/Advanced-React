import { gql } from 'react-apollo'
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
`

export const CREATE_USER_MUTATION = gql`
  mutation CreateUserMutation($email: String!, $name: String!, $idToken: String!) {
    createUser(
      email: $email,
      name: $name,
      authProvider: { auth0: { idToken: $idToken } }
    ) {
      id,
      email,
      name
    }
  }
`

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
  query AllLinksQuery {
    allItems(orderBy: createdAt_DESC) {
      # Use that fragment by it's name (even though it the same as the variable)
      ...itemDetails
    }
  }
`

export const SINGLE_LINK_QUERY = gql`
  ${itemDetails}
  query FindItem($id: ID!) {
    Item(id: $id) {
      ...itemDetails
    }
  }
`;

export const DELETE_ITEM_MUTATION = gql`
  mutation DelteItem($id: ID!) {
    deleteItem(id: $id) {
      id,
      title,
      description
    }
  }
`

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
`

export const CURRENT_USER_QUERY = gql`
  query userQuery {
    user {
      id
      name
      email
    }
  }
`;

export const USER_ORDERS_QUERY = gql`
  query {
    user { # grab the current user
      id
      orders { # and a all their orders
        id
        amount
        charge
        item { # populate the details about the item they bought with the image, description and title
          image {
            id,
            secret
          }
          description
          title
        }
      }
    }
  }
`;
