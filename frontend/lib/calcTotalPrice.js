export default function calcTotalPrice(cart) {
  return cart.reduce((tally, cartItem) => {
    if (!cartItem.product) return tally; // products can be deleted, but they could still be in your cart
    return tally + cartItem.quantity * cartItem.product.price;
  }, 0);
}
