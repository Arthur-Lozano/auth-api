'use strict';

const server = require('./src/lib/sever');
const MONGODB_URI = 'mongodb://localhost:27017/basicauth';

require('dotenv').config();

// Start up DB Server
const mongoose = require('mongoose');
const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
};


mongoose.connect(MONGODB_URI, options)
  .then(() => {
  server.start(process.env.PORT || 3333);
});
