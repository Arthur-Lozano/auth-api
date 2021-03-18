'use strict';

// 3rd Party Resources
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

// Esoteric Resources
const errorHandler = require('../error-handlers/500');
const notFound = require('../error-handlers/404');
const v1 = require('../routes/v1');
const v2 = require('../routes/v2');

// Prepare the express app
const app = express();

// App Level MW
app.use(cors());
app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/v1',v1);
app.use('/api/v2',v2);


// Catchalls
app.use(notFound);
app.use(errorHandler);

module.exports = {
  server: app,
  start: (port) => {
    if (!port) { throw new Error("Missing Port"); }
    app.listen(port, () => console.log(`Listening on ${port}`));
  },
};
