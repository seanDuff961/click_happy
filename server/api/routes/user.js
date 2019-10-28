const express = require('express');
const db = require('../../db');
const router = express.Router();

router.post('/', (req, res) => {
  db.User.create(req.body).then(user => res.send(user)).catch(err => res.send(err));
});

module.exports = router;
