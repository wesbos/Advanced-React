import { graphql, compose } from 'react-apollo';
import { SINGLE_ITEM_QUERY } from '../queries';
import { singleItemEnhancer } from '../enhancers/enhancers';

const SingleItem = props => {
  console.log(props);
  if (props.loading) return <p>Loading...</p>;
  if (props.error) return <p>Error...</p>;
  const item = props.findItem.items[0];
  console.log(item);
  return (
    <div>
      <img src={item.largeImage || item.image} alt={item.title} />
      <h2>Viewing {item.title}</h2>
      <p>{item.description}</p>
    </div>
  );
};

const ComponentWithMutations = compose(singleItemEnhancer)(SingleItem);

export default ComponentWithMutations;
