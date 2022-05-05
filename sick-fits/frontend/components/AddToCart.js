import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import { useCart } from '../lib/cartState';
import { CURRENT_USER_QUERY } from './User';

const ADD_TO_CART_MUTATION = gql`
  mutation ADD_TO_CART_MUTATION($id: ID!) {
    addToCart(productId: $id) {
      id
    }
  }
`;

export default function AddToCart({ id }) {
  const { openCart } = useCart();
  const [addToCart, { loading, error, data }] = useMutation(
    ADD_TO_CART_MUTATION,
    {
      variables: {
        id,
      },
      refetchQueries: [{ query: CURRENT_USER_QUERY }],
    }
  );

  function handleAddToCart() {
    addToCart()
      .then(() => {
        openCart();
      })
      .catch((err) => console.error(err));
  }

  return (
    <button disabled={loading} type="button" onClick={handleAddToCart}>
      Add{loading && 'ing'} To Cart 🛒
    </button>
  );
}
