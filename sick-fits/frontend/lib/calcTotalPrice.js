export default function calcTotalPrice(cart) {
  return cart.reduce((tally, cartItem) => {
    // Products could be deleted but still be in the cart
    if (!cartItem.product) return tally;

    return cartItem.quantity * cartItem.product.price + tally;
  }, 0);
}
