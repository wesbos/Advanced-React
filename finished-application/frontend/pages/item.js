import SingleItem from '../components/SingleItem';

const ItemPage = ({ query }) => (
  <SingleItem id={query.id} />
);

export default ItemPage;
