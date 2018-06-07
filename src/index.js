/* eslint-disable no-console */

import express from 'express';

import constants from './config/constants';
import './config/database';
import middlewaresConfig from './config/middlewares';
import apiRoutes from './modules';
import User from './modules/users/user.model';

const app = express();

middlewaresConfig(app);

app.get('/', (req, res) => {
  User.findById('5b155e8c33533b20ec541ec8', (err, user) => {
    return res.json({ success: true, user: user });
  })
});

apiRoutes(app);

app.listen(constants.PORT, err => {
  if (err) {
    throw err;
  } else {
    console.log(`
      Server running on port: ${constants.PORT}
      ---
      Running on ${process.env.NODE_ENV}
      ---
      Make something great
    `);
  }
});
