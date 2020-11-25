'use strict';

const express = require('express');
const app = express();
const compression = require('compression');
const routes = require('./routes/index');
const config = require('./config/config');

app.use(compression()); // compress all responses
app.use('/', routes); // use the routes dir to do all the dirty work

config.app.ports.forEach((port) => {
  app.listen(port, () => {
    console.log('The ' + config.app.envName + ' server is running on port ' + port + '.');
  });
});
