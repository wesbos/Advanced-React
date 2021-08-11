import PropTypes from 'prop-types';
import NextLink from 'next/link';
import ItemStyles from '../styles/ItemStyles';
import Title from '../styles/Title';
import PriceTag from '../styles/PriceTag';
import formatMoney from '../../lib/formatMoney';

export default function Product({ product }) {
  return (
    <ItemStyles>
      <img
        src={product?.photo?.image?.publicUrlTransformed}
        alt={product.name}
      />
      <Title>
        <NextLink href={`/product/${product.id}`}>{product.name}</NextLink>
      </Title>
      <PriceTag>{formatMoney(product.price / 100)}</PriceTag>
      <p>{product.description}</p>
      {/* Add buttons to edit and delete item */}
    </ItemStyles>
  );
}

Product.propTypes = {
  product: PropTypes.exact({
    __typename: PropTypes.string,
    id: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    description: PropTypes.string,
    photo: PropTypes.shape({
      image: PropTypes.shape({
        publicUrlTransformed: PropTypes.string,
      }),
    }),
  }),
};
