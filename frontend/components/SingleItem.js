import { compose } from 'react-apollo';
import { singleItemEnhancer } from '../enhancers/enhancers';

const SingleItem = ({ findItem: { error, loading, items } }) => {
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;
  const item = items[0];

  if (!item) {
    return <p>No Item Found</p>;
  }

  return (
    <div>
      <img src={item.largeImage || item.image} alt={item.title} />
      <h2>Viewing {item.title}</h2>
      <p>{item.description}</p>
    </div>
  );
};

export default compose(singleItemEnhancer)(SingleItem);
export { SingleItem };
