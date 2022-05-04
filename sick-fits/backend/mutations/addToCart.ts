/* eslint-disable */

import { KeystoneContext } from '@keystone-next/types';
import { CartItemCreateInput } from '../.keystone/schema-types';

async function addToCart(
  root: any,
  { productId }: { productId: string },
  context: KeystoneContext
): Promise<CartItemCreateInput> {
  console.log('ADDING TO CART!');

  // 1. Query the current user and see if they are signed in
  const sesh = context.session;

  if (!sesh.itemId) {
    throw new Error('You must be loggin in to do this!');
  }

  console.log('productId', productId);

  // 2. Query the current user's cart
  const allCartItems = await context.lists.CartItem.findMany({
    where: { user: { id: sesh.itemId }, product: { id: productId } },
    resolveFields: 'id, quantity',
  });

  const [existingCartItem] = allCartItems;

  console.log('allCartItems', allCartItems);
  console.log('existingCartItem', existingCartItem);

  // 3. See if the current item is in the cart
  if (existingCartItem) {
    console.log(
      `There are already ${existingCartItem.quantity}, increment by 1!`
    );

    // 3.1. If it is increment by 1
    return await context.lists.CartItem.updateOne({
      id: existingCartItem.id,
      data: { quantity: existingCartItem.quantity + 1 },
    });
  }

  // 3.2. If it isn't create a new cart item
  return await context.lists.CartItem.createOne({
    data: {
      product: { connect: { id: productId } },
      user: { connect: { id: sesh.itemId } },
    },
  });
}

export default addToCart;
