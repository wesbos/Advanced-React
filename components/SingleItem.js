import { graphql, compose } from 'react-apollo';
import { Motion, spring } from 'react-motion';
import { SINGLE_ITEM_QUERY } from '../queries';
import makeImage from '../lib/image';

const SingleItem = props => {
  if (!props.findItem.Item) return <p>Not ready</p>;
  console.log(props.findItem.Item);

  if (props.loading) return <p>Loading...</p>;
  if (props.error) return <p>Error...</p>;

  const item = props.findItem.Item;
  return (
    <div>
      <img src={makeImage(item.image)} alt={item.title} />
      <h2>Viewing {item.title}</h2>

      <Motion defaultStyle={{ x: 0 }} style={{ x: spring(100) }}>
        {value => <div>{value.x}</div>}
      </Motion>
    </div>
  );
};

const ComponentWithMutations = compose(
  graphql(SINGLE_ITEM_QUERY, {
    name: 'findItem',
    // This comes from Props
    options: ({ id }) => ({
      variables: { id },
    }),
  })
)(SingleItem);

export default ComponentWithMutations;
