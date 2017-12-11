'use strict';
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const config = require('./config');
const db = require('./db');
const routes = require('./routes');

db.connect()
  .then(() => {
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    routes.apply(app);

    app.listen(process.env.PORT, () => {
      console.info(`${config.appName} is listening on port ${process.env.PORT}...`);
    });
  })
  .catch(err => console.error(`${config.appName} could not be started`, err));