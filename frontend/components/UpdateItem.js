import React, { Component } from 'react';
import { Query, Mutation } from 'react-apollo';
import PropTypes from 'prop-types';
import { SINGLE_ITEM_QUERY, UPDATE_ITEM_MUTATION } from '../queries/queries.graphql';
import Form from './styles/Form';
import Error from './ErrorMessage';

class UpdateItem extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
  };
  state = {
    item: {},
  };

  saveToState = e => {
    let { name, value, type } = e.target;
    if (type === 'number') {
      value = parseInt(value);
    }
    console.log('Saving to state');
    const item = { ...this.state.item };
    item[name] = value;
    this.setState({ item });
  };

  updateItem = async (e, updateItemMutation) => {
    console.log('Updating Item');
    e.preventDefault();

    const res = await updateItemMutation({
      // pass in those variables from state
      variables: {
        id: this.props.id,
        ...this.state.item,
      },
    });
    console.log(res);
  };

  render() {
    return (
      <Query query={SINGLE_ITEM_QUERY} variables={{ id: this.props.id }}>
        {({ data: { items }, loading }) => {
          if (loading) return <p>Loading...</p>;
          if (!items || !items.length) return <p>Item Not Found</p>;
          const [item] = items;
          return (
            <Mutation mutation={UPDATE_ITEM_MUTATION}>
              {(updateItemMutation, { error }) => (
                <Form onSubmit={e => this.updateItem(e, updateItemMutation)}>
                  <Error error={error} />
                  <h2>Edit {item.title}</h2>
                  <fieldset disabled={loading} aria-busy={loading}>
                    <label htmlFor="title">
                      Title
                      <input
                        id="title"
                        defaultValue={item.title}
                        name="title"
                        onChange={this.saveToState}
                        type="text"
                      />
                    </label>

                    <label htmlFor="description">
                      Description
                      <textarea
                        defaultValue={item.description}
                        name="description"
                        onChange={this.saveToState}
                      />
                    </label>

                    <label htmlFor="price">
                      Price
                      <input
                        type="number"
                        name="price"
                        onChange={this.saveToState}
                        defaultValue={item.price}
                      />
                    </label>
                    <button type="submit">Save...</button>
                  </fieldset>
                </Form>
              )}
            </Mutation>
          );
        }}
      </Query>
    );
  }
}

export default UpdateItem;
