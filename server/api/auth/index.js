const express = require('express');
const auth = express.Router();
const userCtrl = require('./auth.ctrl');

auth.post('/login',userCtrl.login);
auth.post('/register',userCtrl.register);
auth.get('/sam', userCtrl.sam)

module.exports = auth;