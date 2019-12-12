require("dotenv").config();
const express = require("express");
const path = require('path');
const indexRouter = require("./api/routes/index");
const PORT = process.env.PORT || 3001;
const db = require('./db');
const buildPath = path.resolve(__dirname + '/../build');

db.sequelize.authenticate().then(() => {
  db.sequelize.sync().then(() => {
    console.log('Connection has been established successfully.');

    const app = express();
    app.use(function(req, res, next) {
      res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      next();
    });
    app.use(express.json());
    app.use("/api", indexRouter);
    if (process.env.NODE_ENV === 'production') {
      app.use(express.static(buildPath));
      app.get('*', (req, res) => res.sendFile(buildPath + '/index.html'));
    }
    app.listen(PORT, () => console.log("started on " + PORT));

  }).catch(err => console.log('unable top connect to DB'));
})
.catch(err => {
  console.error('Unable to connect to the database:', err);
});
