const { request } = require('graphql-request');
const createServer = require('../src/createServer');

let server;
const port = 2342;
const endpoint = `http://localhost:${port}`;

const wait = amount => new Promise(resolve => setTimeout(resolve, amount));

beforeAll(async () => {
  server = await createServer().start({ port });
});

afterAll(async () => {
  server.close();
});

describe('Item C.R.U.D. Operations', () => {
  let id;

  it('Creating an item', async () => {
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

    const { createItem } = await request(endpoint, query);

    expect(createItem.title).toEqual('wes');
    expect(createItem.description).toEqual('Bos');
    expect(createItem).toHaveProperty('id');
    expect(createItem.price).toEqual(500);
    id = createItem.id;
  });

  it('Get an array of items', async () => {
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

    const { items } = await request(endpoint, query);
    expect(items.length).toBeGreaterThan(0);
  });

  it('Query a specific item', async () => {
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

    const { items } = await request(endpoint, query);
    const item = items[0];
    expect(item.title).toEqual('wes');
    expect(item.description).toEqual('Bos');
    expect(item.price).toEqual(500);
  });

  it('updates an item', async () => {
    const query = `
  mutation updateItem {
    updateItem(id: "${id}", title: "Updated Title") {
      id
      title
    }
  }
  `;
    const { updateItem } = await request(endpoint, query);
    expect(updateItem.id).toBe(id);
    expect(updateItem.title).toBe('Updated Title');
  });

  // Test Delete that item
  it('delete an item', async () => {
    const query = `
  mutation remove {
    deleteItem(id: "${id}") {
      id
    }
  }
  `;
    const res = await request(endpoint, query);
    expect(res.deleteItem.id).toEqual(id);
  });
});
