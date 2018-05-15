import { Query } from 'react-apollo';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Link from 'next/link';
import { SINGLE_ITEM_QUERY } from '../queries/queries.graphql';
import Error from './ErrorMessage';

const SingleItemStyles = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
  box-shadow: ${props => props.theme.bs};
  img {
    width: 100%;
    object-fit: cover;
  }
  .details {
    margin: 3rem;
    font-size: 3rem;
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
