import Downshift from 'downshift';
import { Query } from 'react-apollo';
import Router from 'next/router';
import styled from 'styled-components';
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
  input {
    border: 0;
  }
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
`;

function AutoComplete(props) {
  const { items, onChange } = props;
  return (
    <Downshift onChange={routeToItem} itemToString={i => (i === null ? '' : i.title)}>
      {({ getInputProps, getItemProps, isOpen, inputValue, selectedItem, highlightedIndex }) => (
        <div>
          {/* This is the searchInput */}
          <input
            {...getInputProps({
              placeholder: 'Search For Item',
              id: 'search',
              onChange: e => {
                props.refetch({ searchTerm: e.target.value });
              },
              style: { fontSize: '20px', padding: '10px', display: 'block', width: '100%' },
            })}
          />
          {isOpen ? (
            <DropDown>
              {/* This is the Dropdown */}
              {items.map((item, index) => (
                <DropDownItem {...getItemProps({ item })} key={item.id} highlighted={highlightedIndex === index}>
                  <img width="50" src={item.image} alt={item.title} />
                  {item.title}
                </DropDownItem>
              ))}
            </DropDown>
          ) : null}
        </div>
      )}
    </Downshift>
  );
}

// TODO: This should not fire a queryon page load
const Search = () => (
  <SearchStyles>
    <Query query={SEARCH_ITEMS_QUERY} variables={{ searchTerm: '' }}>
      {({ data, error, refetch }) => (
        <AutoComplete items={data.items || []} onChange={selectedItem => console.log(selectedItem)} refetch={refetch} />
      )}
    </Query>
  </SearchStyles>
);

export default Search;
