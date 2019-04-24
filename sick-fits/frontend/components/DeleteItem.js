import React, { Component } from 'react';
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import { ALL_ITEMS_QUERY } from "./Items";

const DELETE_ITEM_MUTATION = gql`
    mutation DELETE_ITEM_MUTATION($id: ID!) {
        deleteItem(id: $id) {
            id
        }
    }
`;

export default class DeleteItem extends Component {
    update = (cache, payload) => {
        // manually update cahe on client so it matches server
        // 1. read the cache for items we want
        const data = cache.readQuery({ query: ALL_ITEMS_QUERY });
        // 2. filter the deleted item out
        data.items = data.items.filter((item) => item.id !== payload.data.deleteItem.id);
        // 3. put the items back
        cache.writeQuery({ query: ALL_ITEMS_QUERY, data });
    }

  render() {
    return (
        <Mutation
            mutation={DELETE_ITEM_MUTATION}
            variables={{ id: this.props.id }}
            update={this.update}
        >
            {(deleteItem, {error}) => (
                <button onClick={() => {
                    if (confirm("Are sure you would like to delete this item?")) {
                        deleteItem();
                    }
                }}>{this.props.buttonText}</button>
            )}
        </Mutation>

    )
  }
}
