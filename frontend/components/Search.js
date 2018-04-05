import Downshift from 'downshift';
import { Query } from 'react-apollo';
import Router from 'next/router';
import styled from 'styled-components';
import debounce from 'lodash.debounce';

import { SEARCH_ITEMS_QUERY } from '../queries';

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

const SearchStyles = styled.div`
  position: relative;
  input {
    width: 100%;
    padding: 10px;
    border: 0;
    font-size: 2rem;
  }
`;

function AutoComplete(props) {
  const { items, onChange, loading } = props;
  return (
    <Downshift onChange={routeToItem} itemToString={i => (i === null ? '' : i.title)}>
      {({ getInputProps, getItemProps, isOpen, inputValue, highlightedIndex }) => (
        <div>
          {/* This is the searchInput */}
          {loading && 'LOADING'}
          <input
            {...getInputProps({
              placeholder: 'Search For Item',
              id: 'search',
              onChange: e => {
                props.refetch({ searchTerm: e.target.value });
              },
            })}
          />
          {isOpen ? (
            <DropDown>
              {/* This is the Dropdown */}
              {items.map((item, index) => (
                <DropDownItem
                  {...getItemProps({ item })}
                  key={item.id}
                  highlighted={highlightedIndex === index}
                >
                  <img width="50" src={item.image} alt={item.title} />
                  {item.title}
                </DropDownItem>
              ))}
              {!items.length && <DropDownItem>Nothing Found for {inputValue}...</DropDownItem>}
            </DropDown>
          ) : null}
        </div>
      )}
    </Downshift>
  );
}

// TODO: This should not fire a queryon page load
class Search extends React.Component {
  state = {
    skip: true,
  };
  componentDidMount() {
    this.setState({ skip: false });
  }
  render() {
    return (
      <SearchStyles>
        <Query
          skip={this.state.skip}
          query={SEARCH_ITEMS_QUERY}
          variables={{ searchTerm: '' }}
          fetchPolicy="network-only"
        >
          {({ data, error, loading, refetch }) =>
            console.log('QUERY', data.items) || (
              <AutoComplete
                loading={loading}
                items={data.items || []}
                refetch={debounce(refetch, 300)}
              />
            )}
        </Query>
      </SearchStyles>
    );
  }
}

export default Search;
