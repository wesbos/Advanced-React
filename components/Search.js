import Downshift from 'downshift'
import { SEARCH_ITEMS_QUERY } from '../queries';
import { graphql, compose } from 'react-apollo'
import makeImage from '../lib/image';
import Router from 'next/router'
import slugify from 'slugify';

function routeToItem(item) {
  Router.push({
    pathname: '/item',
    query: {
      slug: slugify(item.title),
      itemId: item.id
    }
  })
}

function BasicAutocomplete(props) {
  const { items, onChange } = props;
  console.log(props);
  return (
    <Downshift
      onChange={routeToItem}
      itemToString={(item) => item.title}
    >
      {({
        getInputProps,
        getItemProps,
        isOpen,
        inputValue,
        selectedItem,
        highlightedIndex
      }) => (
        <div>
          <input {...getInputProps({
            placeholder: 'Search For Item',
            onChange: (e) => props.refetch({ searchTerm: e.target.value }),
            style: { fontSize: '20px', padding: '20px', display: 'block', width: '100%' }
          })} />
          {isOpen ? (
            <div>
              {items
                .map((item, index) => (
                  <div
                    {...getItemProps({item})}
                    key={item.id}
                    style={{
                      backgroundColor: highlightedIndex === index ? '#e8e8e8' : 'white',
                      borderLeft: highlightedIndex === index ? '10px solid #ffc600' : '10px solid white',
                      padding: '10px',
                      display: 'flex',
                      alignItems: 'center'
                    }}
                  >
                    <img width="50" style={{ 'margin-right': '10px'}} src={makeImage(item.image)} alt={item.title}/>
                    {item.title}
                  </div>
                ))}
            </div>
          ) : null}
        </div>
      )}
    </Downshift>
  )
}

const Search = (props) => (
    <BasicAutocomplete
      items={props.searchItems.allItems}
      onChange={selectedItem => console.log(selectedItem)}
      refetch={props.searchItems.refetch}
    />
)

const searchEnhancer = graphql(SEARCH_ITEMS_QUERY, { name: 'searchItems', options: {
  variables: { searchTerm: 'camo' }
} });
export default compose(searchEnhancer)(Search)
