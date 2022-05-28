import { KeystoneContext } from '@keystone-next/types';
import { OrderCreateInput } from '../.keystone/schema-types';
import stripeConfig from '../lib/stripe';

interface Arguments {
  token: string;
}

const graphql = String.raw;

async function checkout(
  root: any,
  { token }: Arguments,
  context: KeystoneContext
): Promise<OrderCreateInput> {
  // 1. make sure they are signed in
  const userId = context.session.itemId;

  if (!userId) {
    throw new Error('Sorry! You must be signed in to create an order!');
  }

  // 1.2. Query the user
  const user = await context.lists.User.findOne({
    where: { id: userId },
    resolveFields: graphql`
      id
      name
      email 
      cart {
        id
        quantity
        product {
          name
          price 
          description
          id
          photo { 
            id
            image {
              id 
              publicUrlTransformed
            }
          } 
        }
      }
      `,
  });
  console.dir(user, { depth: null });
  // 2. calculate the total price fot their order
  const cartItems = user.cart.filter((cartItem) => cartItem.product);
  const amount = cartItems.reduce(function (
    tally: number,
    cartItem: CartItemCreateInput
  ) {
    return tally + cartItem.quantity * cartItem.product.price;
  },
  0);

  console.log('amount', amount, '; token', token);
  // 3. create the payment with the stripe library
  const charge = await stripeConfig.paymentIntents
    .create({
      amount,
      currency: 'USD',
      confirm: true, // instantly confirms the payment. Defaults false.
      payment_method: token,
    })
    .catch((err) => {
      console.log(err);
      throw new Error(err?.message || err);
    });
  // 4. convert the cartItems to orderItems
  const orderItems = cartItems.map((cartItem) => ({
    name: cartItem.product.name,
    description: cartItem.product.description,
    price: cartItem.product.price,
    quantity: cartItem.quantity,
    photo: { connect: { id: cartItem.product.photo.id } },
  }));

  console.log('====================================');
  console.log(charge);
  console.log('====================================');
  // 5. create the order and return it
  const order = await context.lists.Order.createOne({
    data: {
      total: charge.amount,
      charge: charge.id,
      items: { create: orderItems },
      user: { connect: { id: userId } },
    },
  });

  // 6. Clean up any old cart Items
  const cartItemsIds = user.cart.map((cartItem) => cartItem.id);
  await context.lists.CartItem.deleteMany({
    ids: cartItemsIds,
  });

  return order;
}

export default checkout;
