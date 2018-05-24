import { Query } from 'react-apollo';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Link from 'next/link';
import gql from 'graphql-tag';
import Error from './ErrorMessage';
import AddToCart from './AddToCart';

const SINGLE_ITEM_QUERY = gql`
  query SINGLE_ITEM_QUERY($id: ID!) {
    items(where: { id: $id }) {
      id
      title
      description
      largeImage
      image
    }
  }
`;

const SingleItemStyles = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
  box-shadow: ${props => props.theme.bs};
  display: grid;
  grid-auto-columns: 1fr;
  grid-auto-flow: column;
  min-height: 800px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .details {
    margin: 3rem;
    font-size: 2rem;
  }
`;

const SingleItem = props => (
  <Query query={SINGLE_ITEM_QUERY} variables={{ id: props.id }}>
    {({ data, loading, error }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <Error error={error} />;
      const [item] = data.items;
      return (
        <SingleItemStyles data-test="SingleItem">
          <img src={item.largeImage || item.image} alt={item.title} />
          <div className="details">
            <h2>Viewing {item.title}</h2>
            <p>{item.description}</p>
            <Link
              href={{
                pathname: '/update',
                query: { id: item.id },
              }}
            >
              <a>Edit ✏️</a>
            </Link>
            <AddToCart id={item.id} />
          </div>
        </SingleItemStyles>
      );
    }}
  </Query>
);

SingleItem.propTypes = {
  id: PropTypes.string.isRequired,
};

export default SingleItem;
export { SINGLE_ITEM_QUERY };
