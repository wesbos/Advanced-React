const takeMoney = require('./createCharge');

const event = {
  "data": {
    "user": "cj6ntm8qic3260140vkuzif9d",
    "token": "tok_visa",
  },
  "context": {
    "headers": {}
  }
}


describe('Take Money', () => {

  test('A charge has come back', async () => {
    const res = await takeMoney(event);
    console.log(res);
    expect(res.data.amount).toBeGreaterThanOrEqual(0);
  });

});

