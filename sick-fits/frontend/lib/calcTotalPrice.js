export default function calcTotalPrice(cart) {
  return cart.reduce((tally, cartItem) => {
    // the products can be deleceted, but they could still be in your cart
    if (!cartItem.product) return tally;

    return tally + cartItem.quantity * cartItem.product.price;
  }, 0);
}
