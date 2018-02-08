import { graphql, compose } from 'react-apollo';
import { SINGLE_ITEM_QUERY } from '../queries';
import { singleItemEnhancer } from '../enhancers/enhancers';
import makeImage from '../lib/image';

const SingleItem = props => {
  if (props.loading || !props.item) return <p>Loading...</p>;
  if (props.error) return <p>Error...</p>;
  console.log(props);
  const item = props.findItem.items[0];
  return (
    <div>
      <img src={makeImage(item.image)} alt={item.title} />
      <h2>Viewing {item.title}</h2>
      <p>{item.description}</p>
    </div>
  );
};

const ComponentWithMutations = compose(singleItemEnhancer)(SingleItem);

export default ComponentWithMutations;
