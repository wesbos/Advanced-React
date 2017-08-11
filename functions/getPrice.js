require('isomorphic-fetch')

const query = `
query SingleItem {
  Item(id: "cj64bs7vuuqgu0116ul5cm223") {
    price
  }
}
`;

function getItem(id) {
    return fetch('https://api.graph.cool/simple/v1/cj5xz8szs28930145gct82bdj', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
    })
}

getItem().then(x => x.json()).then(res => {
  console.log(res.data.Item.price);
}).catch(console.log)

