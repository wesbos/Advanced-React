import { FC } from "react";
import { useState } from "react";
import { useMutation } from '@apollo/react-hooks';
import gql from "graphql-tag";
import { MutationFunctionOptions } from "@apollo/react-common";

export interface DeleteItemProps {
  children: string;
  id: MutationFunctionOptions<any, Record<string, any>> | string;
}

const DELETE_ITEM_MUTATION = gql`
  mutation createItem_mutation(
    $id: String!
  ) {
    deleteItem(id:$id)
  }
`;

const DeleteItem: FC<DeleteItemProps> = ({ children, id }) => {
  const [deleteItem, { loading, error }] = useMutation(DELETE_ITEM_MUTATION);

  return (<button onClick={() => deleteItem(id as MutationFunctionOptions)} disabled={loading}>{children}</button>);
}

export default DeleteItem;