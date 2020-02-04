const express = require('express');
const router = express.Router();
const auth = require('./auth');

router.use('/auth', auth);
router.use('/post', auth);

module.exports = router;
