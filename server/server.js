require('dotenv').config();
const express = require('express');
const Sequelize = require('sequelize');
const indexRouter = require('./api/routes');
global.sequelize = new Sequelize(process.env.DATABASE_URI);

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');

    const app = express();
    app.use(express.json());
    app.us('/', indexRouter);
    const PORT = process.env.PORT || 3001;

    app.listen(PORT, () => console.log('started on ' + PORT))
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
