import { SIGNUP_MUTATION } from '../../frontend/queries/index';
import { print } from 'graphql/language/printer';

const { request } = require('graphql-request');
const createServer = require('../src/createServer');

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
  const email = `wes${Date.now()}@gmail.com`;

  it('Creates a user', async () => {
    const { signup } = await request(endpoint, print(SIGNUP_MUTATION), {
      name: 'Wes Bos',
      email,
      password: 'test',
    });
    expect(signup.token).toBeTruthy();
    expect(signup.user.name).toBe('Wes Bos');
    expect(signup.user.email).toBe(email);
  });

  it('throws an error with a duplicate signup', async () =>
    request(endpoint, print(SIGNUP_MUTATION), {
      name: 'wes bos',
      email,
      password: 'test',
    }).catch(err => {
      expect(err.message).toContain('A unique constraint would be violated on User.');
      console.log(err.message);
    }));
});
