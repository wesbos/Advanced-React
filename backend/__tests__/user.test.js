const { request } = require('graphql-request');
const createServer = require('../src/createServer');

import { SIGNUP_MUTATION } from '../../frontend/queries/index';

console.log(SIGNUP_MUTATION);

let server;
const port = 2342;
const endpoint = `http://localhost:${port}`;

beforeAll(async () => {
  server = await createServer().start({ port });
});

afterAll(async () => {
  server.close();
});

describe('User C.R.U.D. Operations', () => {
  it('Creates a user', () => {
    const query = `

    `;
  });
});
