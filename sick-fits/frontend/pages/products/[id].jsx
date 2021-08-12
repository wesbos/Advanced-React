import { shape, string } from 'prop-types';
import SingleProduct from '../../components/Products/SingleProduct';

export default function SingleProductPage({ query: { id } }) {
  return <SingleProduct id={id} />;
}

SingleProductPage.propTypes = {
  query: shape({
    id: string,
  }),
};
