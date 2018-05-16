import React from 'react';
import Downshift from 'downshift';
import Router from 'next/router';
import { ApolloConsumer } from 'react-apollo';
import styled, { keyframes } from 'styled-components';
import debounce from 'lodash.debounce';
import { SEARCH_ITEMS_QUERY } from '../queries/queries.graphql';

function routeToItem(item) {
  Router.push({
    pathname: '/item',
    query: {
      id: item.id,
    },
  });
}

const DropDown = styled.div`
  position: absolute;
  width: 100%;
  z-index: 2;
  border: 1px solid ${props => props.theme.lightgrey};
`;

const DropDownItem = styled.div`
  border-bottom: 1px solid ${props => props.theme.lightgrey};
  background: ${props => (props.highlighted ? '#f7f7f7' : 'white')};
  padding: 1rem;
  transition: all 0.2s;
  ${props => (props.highlighted ? 'padding-left: 2rem;' : null)};
  display: flex;
  align-items: center;
  border-left: 10px solid ${props => (props.highlighted ? props.theme.lightgrey : 'white')};
  img {
    margin-right: 10px;
  }
`;

const glow = keyframes`
  from {
    box-shadow: 0 0 0px yellow;
  }

  to {
    box-shadow: 0 0 10px 1px yellow;
  }
`;

const SearchStyles = styled.div`
  position: relative;
  input {
    width: 100%;
    padding: 10px;
    border: 0;
    font-size: 2rem;
    &.loading {
      animation: ${glow} 0.5s ease-in-out infinite alternate;
    }
  }
`;

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
