const fetch = require('isomorphic-fetch')
const stripe = require('stripe')('sk_ycLkGc2cAaBDSCKkHiKVBeT71CMxd')

const graphCoolEndpoint = 'https://api.graph.cool/simple/v1/cj5xz8szs28930145gct82bdj'

const createStripeCharge = (token, email = 'wesbos@gmail.com') => {
   console.log(`Creating stripe charge for ${email}`)
   return new Promise((resolve, reject) => {
     stripeCharge = stripe.charges.create({
       amount: '99999',
       currency: 'usd',
       description: 'You Rock 😘',
       source: 'tok_visa'
     }, (err, charge) => {
       if (err) {
         console.log(`Error creating Stripe charge: ${JSON.stringify(err)}`)
         reject(err)
       } else {
         console.log(`Successfully created Stripe charge: ${charge.id}`);
         console.log(charge);
       }
     })
   })
 }

createStripeCharge();

module.exports = function(event) {
  event.data.charge = 'DEF456';
  console.log(event.data)
  return { data: event.data }
}
