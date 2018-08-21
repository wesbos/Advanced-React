import React from 'react';
import Downshift from 'downshift';
import Router from 'next/router';
import { ApolloConsumer } from 'react-apollo';
import gql from 'graphql-tag';
import debounce from 'lodash.debounce';
import { DropDown, DropDownItem, SearchStyles } from './styles/DropDown';

const SEARCH_ITEMS_QUERY = gql`
  query SEARCH_ITEMS_QUERY($searchTerm: String!) {
    items(where: { OR: [{ title_contains: $searchTerm }, { description_contains: $searchTerm }] }) {
      id
      image
      title
    }
  }
`;
function routeToItem(item) {
  Router.push({
    pathname: '/item',
    query: {
      id: item.id,
    },
  });
}

class AutoComplete extends React.Component {
  state = {
    items: [],
    loading: false,
  };
  onChange = async (e, client) => {
    if (!e.target.value) {
      return this.setState({ items: [] });
    }
    this.setState({ loading: true });
    this.search(client, e.target.value);
  };

  search = debounce(async (client, searchTerm) => {
    const res = await client.query({
      query: SEARCH_ITEMS_QUERY,
      variables: { searchTerm },
    });
    this.setState({ items: res.data.items, loading: false });
  }, 350);

  render() {
    return (
      <SearchStyles>
        <Downshift onChange={routeToItem} itemToString={i => (i === null ? '' : i.title)}>
          {({ getInputProps, getItemProps, isOpen, inputValue, highlightedIndex }) => (
            <div>
              {/* This is the searchInput */}
              <ApolloConsumer>
                {client => (
                  <input
                    {...getInputProps({
                      placeholder: 'Search For Item',
                      id: 'search',
                      className: this.state.loading ? 'loading' : '',
                      onChange: e => {
                        e.persist();
                        this.onChange(e, client);
                      },
                    })}
                  />
                )}
              </ApolloConsumer>
              {/* This is the Dropdown */}
              {isOpen && (
                <DropDown>
                  {this.state.items.map((item, index) => (
                    <DropDownItem
                      {...getItemProps({ item })}
                      key={item.id}
                      highlighted={highlightedIndex === index}
                    >
                      <img width="50" src={item.image} alt={item.title} />
                      {item.title}
                    </DropDownItem>
                  ))}
                  {/* Found Nothing State */}
                  {!this.state.items.length &&
                    !this.state.loading && (
                      <DropDownItem>Nothing Found for {inputValue}...</DropDownItem>
                    )}
                </DropDown>
              )}
            </div>
          )}
        </Downshift>
      </SearchStyles>
    );
  }
}

export default AutoComplete;
export { SEARCH_ITEMS_QUERY };
