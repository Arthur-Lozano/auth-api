'use strict';

const supergoose = require('@code-fellows/supergoose');
const server = require('../src/lib/sever');
const SECRET = process.env.APP_SECRET;
const base64 = require('base64');
const { beforeAll } = require('@jest/globals');
const users = require('../src/auth/models/users');

const mockRequest = supergoose(server.app);

let user = {
  username: 'arthur',
  password: '12345'
  role: 'admin'
}

let user = {
  username: 'arthur',
  password: '12345',
  role: 'admin'
}

let shirt = {
  name: 'Tshirt',
  color: 'black',
  size: 'small'
}




describe('V2  tests', () => {
  it('Creates new user and sends client token and user object', async => {

    const respA = await mockRequest.post('/signup').send(user);

    const respB = await mockRequest.post('/api/v2/clothes').send(shirt).set(authorization, `Bearer ${responseA.body.token}`)

   

    expect(response.status).toBe(201);
    expect(response.body.token).toBeDefined();

  })

  it('signin with basic authentication headers logs in a user and sends an object with the user and the token to the client', async => {
    let user = base64.encode('arthur:lozano');


    const response = await mockRequest.post('/signin').send(user)
      .auth('arthur', 'password');
    expect(response.status).toBe(201);
    expect(response.body.token).toBeDefined();
  })

  it('Returns model items', async => {
    const response = await mockRequest.post('/signin').send(user)
    .auth('arthur', 'password')
    const response = await mockRequest.get('/api/v2/clothes').send(user)

      .auth('arthur', '12345');
    expect(response.status).toBe(201);
    expect(response.body.token).toBeDefined();
  })

  it('Returns model items', async => {
    const response = await mockRequest.post('/signin')
    .auth('arthur', 'password')


    const response = await mockRequest.put('/api/v2/clothes')
    .set('authorization', `Basic ${response.body.token}`);
    expect(response.status).toBe(201);
    expect(response.body.token).toBeDefined();
  })
})
