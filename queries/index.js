import { gql } from 'react-apollo'
import { itemDetails } from './fragments';

export const CREATE_LINK_MUTATION = gql`
  ${itemDetails}
  mutation CreateLinkMutation($description: String!, $title: String!, $imageId: ID) {
    createItem(
      description: $description,
      title: $title,
      imageId: $imageId
    ) {
      ...itemDetails
    }
  }
`

export const CREATE_ORDER_MUTATION = gql`
  mutation CreateOrderMutation($token: String!) {
    createOrder(token: $token) {
      id,
      token,
      charge,
      amount,
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
