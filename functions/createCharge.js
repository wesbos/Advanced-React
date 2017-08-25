const stripe = require('stripe')('sk_ycLkGc2cAaBDSCKkHiKVBeT71CMxd')
const graphCoolEndpoint = 'https://api.graph.cool/simple/v1/cj5xz8szs28930145gct82bdj'

require('isomorphic-fetch')

const getPrice = (itemId) =>  {
  const query = `
    query SingleItem {
      Item(id: "${itemId}") {
        price
      }
    }
  `;

  return fetch('https://api.graph.cool/simple/v1/cj5xz8szs28930145gct82bdj', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query }),
  })
}

const createStripeCharge = (token, amount) => {
  return stripe.charges.create({
    amount,
    currency: 'usd',
    description: `a test charge`,
    source: token
  })
}

module.exports = function(event) {
  return new Promise((resolve, reject) => {
    // first find out the price of the item
    getPrice(event.data.itemId)
      .then(res => res.json())
      .then(res => {
        console.log(`Back with the price ${res.data.Item.price}!`);
        return createStripeCharge(event.data.token, res.data.Item.price);
      })
      .then(res => {
        console.log(`Back! charge ${res.id} for the amount ${res.amount}`);
        event.data.charge = res.id;
        event.data.amount = res.amount;
        resolve(event);
      })
      .catch(err => {
        reject(err);
      })
  });
}
