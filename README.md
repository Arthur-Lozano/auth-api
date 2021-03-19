# basic-auth

# LAB - Class 8

## Project: Auth-api

### Author: Arthur Lozano Jr


- [front-end application](https://arthur-auth-api.herokuapp.com/) (Heroku)
- [Jest](https://jestjs.io/) (Jest)
- [ci/cd](https://github.com/Arthur-Lozano/auth-api/actions) (GitHub Actions)
- [Pull Request] (https://github.com/Arthur-Lozano/auth-api/pull/3) 



### Setup

#### `.env` requirements (where applicable)
- `PORT` - 3333

#### How to initialize/run your application (where applicable)

- npm start
- `nodemon`

#### How to use your library (where applicable)

#### Tests
* AUTH Routes
* POST /signup creates a new user and sends an object with the user and the token to the client
* POST /signin with basic authentication headers logs in a user and sends an object with the user and the token to the client

* POST /api/v2/:model with a bearer token that has create permissions adds an item to the DB and returns an object with the * * added item
* GET /api/v2/:model with a bearer token that has read permissions returns a list of :model items
* GET /api/v2/:model/ID with a bearer token that has read permissions returns a single item by ID
* PUT /api/v2/:model/ID with a bearer token that has update permissions returns a single, updated item by ID
* DELETE /api/v2/:model/ID with a bearer token that has delete permissions returns an empty object. Subsequent GET for the same ID should result in nothing found


#### UML

![UML](./assets/auth-api.png)
