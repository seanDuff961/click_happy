const express = require('express');
const User = require('../../db/models/User');
const router = express.Router();

router.post('/', (req, res) => {
  User.create(req.body).then(user => res.send(user)).catch(err => res.send(err));
});

module.exports = router;
