'use strict';

const supergoose = require('@code-fellows/supergoose');
const server = require('../src/lib/sever');
const SECRET = process.env.APP_SECRET;
const base64 = require('base64');

const mockRequest = supergoose(server.app);

let user = {
  username: 'arthur',
  password: '12345'
}

describe('Testing Routes', () => {
  it('Creates new user and sends client token and user object', async => {

    const response = await mockRequest.post('/signup').send(user)
    expect(response.status).toBe(201);
    expect(response.token).toBeDefined();
  })

  it('signin with basic authentication headers logs in a user and sends an object with the user and the token to the client', async => {
    let user = base64.encode('arthur:lozano');

    
    const response = await mockRequest.post('/signin').send(user)
    .auth('arthur', '12345');
    expect(response.status).toBe(201);
    expect(response.body.token).toBeDefined();
  })
})

