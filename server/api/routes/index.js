const express = require('express');
const userRoutes = require('./user');
const router = express.Router();

router.use('/users', userRoutes)

module.exports = router;
//one moment please. I would like to git commit this.
