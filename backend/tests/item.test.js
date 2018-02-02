const { request } = require('graphql-request');

let id;

test('Creating an item', async () => {
  const query = `
    mutation createItem {
      createItem(title: "wes", description:"Bos", price: 500) {
        title
        description
        price
        id
      }
    }
  `;

  const { createItem } = await request('http://localhost:4000', query);

  expect(createItem.title).toEqual('wes');
  expect(createItem.description).toEqual('Bos');
  expect(createItem).toHaveProperty('id');
  expect(createItem.price).toEqual(500);
  id = createItem.id;
});

test('Get an array of items', async () => {
  const query = `
    query getAllItems {
      items {
        title
        id
        description
        price
      }
    }
  `;

  const { items } = await request('http://localhost:4000', query);
  expect(items.length).toBeGreaterThan(0);
});

test('Query a specific item', async () => {
  const query = `
    query findAnItem {
      items(where: {
        id: "${id}"
      }) {
        title
        id
        description
        price
      }
    }
  `;

  const { items } = await request('http://localhost:4000', query);
  const item = items[0];
  expect(item.title).toEqual('wes');
  expect(item.description).toEqual('Bos');
  expect(item.price).toEqual(500);
});

// Test Delete that item
test('delete an item', async () => {
  const query = `
  mutation remove {
    deleteItem(id: "${id}") {
      id
    }
  }
  `;
  const res = await request('http://localhost:4000', query);
  expect(res.deleteItem.id).toEqual(id);
});

// mutation updateItem {
//   updateItem(id: "cjd21afpr47m00172nigtlkw8", title: "WES from playground") {
//     id
//     title
//   }
// }
