const express = require('express');
const router = express.Router();
const auth = require('./auth');
const post = require('./post');

router.use('/auth', auth);
router.use('/posts', post);

module.exports = router;
