const takeMoney = require('./createCharge');

const event = {
  "data": {
    "amount": 5,
    "createdAt": "2017-08-08T19:48:39.436Z",
    "id": "cj6400x3g00003i5zufoucron",
    "token": "tok_visa",
    "updatedAt": "2017-08-08T19:48:39.436Z"
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

