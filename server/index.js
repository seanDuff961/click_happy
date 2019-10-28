require("dotenv").config();
const express = require("express");
const indexRouter = require("./api/routes/index");
const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.json());
app.use("/", indexRouter);
const db = require('./db');

db.sequelize.authenticate().then(() => {
  db.sequelize.sync().then(() => {
    console.log('Connection has been established successfully.');
  }).catch(err => console.log('unable top connect to DB'));
})
.catch(err => {
  console.error('Unable to connect to the database:', err);
});

app.listen(PORT, () => console.log("started on " + PORT));

