var express = require('express');
var router = express.Router();

const users = require('./../apiservece/users/')



router.use('/users', users);


module.exports = router;
