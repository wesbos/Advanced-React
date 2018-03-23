import { Query } from 'react-apollo';
import PropTypes from 'prop-types';
import { SINGLE_ITEM_QUERY } from '../queries/index';

const SingleItem = props => (
  <Query query={SINGLE_ITEM_QUERY} variables={{ id: props.id }}>
    {({ data: { items }, loading, error }) => {
      if (loading || error) return null;
      const [item] = items;
      return (
        <div>
          <img src={item.largeImage || item.image} alt={item.title} />
          <h2>Viewing {item.title}</h2>
          <p>{item.description}</p>
        </div>
      );
    }}
  </Query>
);

SingleItem.propTypes = {
  id: PropTypes.string.isRequired,
};

export default SingleItem;
