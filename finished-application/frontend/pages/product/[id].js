import SingleProduct from '../../components/SingleProduct';

export default function SingleProductPage({ query }) {
  return <SingleProduct id={query.id} />;
}
