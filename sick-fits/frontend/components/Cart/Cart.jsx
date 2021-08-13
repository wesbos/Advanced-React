import { number, shape, string } from 'prop-types';
import styled from 'styled-components';
import useUser from '../../lib/hooks/useUser';
import CartStyles from '../styles/CartStyles';
import Supreme from '../styles/Supreme';
import formatMoney from '../../lib/formatMoney';
import calcTotalPrice from '../../lib/calcTotalPrice';
import { useCart } from '../../lib/contexts/cartContext';
import CloseButton from '../styles/CloseButton'
const CartItemStyled = styled.li`
  padding: 1rem 0;
  border-bottom: 1px solid var(--lightGrey);
  display: grid;
  grid-template-columns: auto 1fr auto;
  img {
    margin-right: 1rem;
  }
  h3,
  p {
    margin: 0;
  }
`;

function CartItem({ cartItem }) {
  const { product } = cartItem;

  if (!product) return null;

  return (
    <CartItemStyled>
      <img
        width="100"
        src={product.photo.image.publicUrlTransformed}
        alt={product.name}
      />
      <div>
        <h3>{product.name}</h3>
        <p>
          {formatMoney(product.price * cartItem.quantity)}- &nbsp;
          <em>
            {cartItem.quantity} at {formatMoney(product.price)} each
          </em>
        </p>
      </div>
    </CartItemStyled>
  );
}

CartItem.propTypes = {
  cartItem: shape({
    id: string,
    quantity: number,
    product: shape({
      description: string,
      id: string,
      __typename: string,
      name: string,
      price: number,
      photo: shape({
        image: shape({
          publicUrlTransformed: string,
        }),
      }),
    }),
  }),
};

function Cart(props) {
  const me = useUser();

  const {cartOpen, closeCart, openCart} = useCart();
  return !me ? null : (
    <CartStyles open={cartOpen}>
      <header>
        <Supreme>{me.name}'s Cart</Supreme>
        <CloseButton type="button" onClick={closeCart}>Close Cart</CloseButton>
      </header>
      <ul>
        {me.cart.map((cartItem) => (
          <CartItem key={cartItem.id} cartItem={cartItem} />
        ))}
      </ul>
      <footer>
        <p>{formatMoney(calcTotalPrice(me.cart))}</p>
      </footer>
    </CartStyles>
  );
}

Cart.propTypes = {};

export default Cart;
