const express = require('express');
const auth = express.Router();
const userCtrl = require('./auth.ctrl');

auth.post('/login',userCtrl.login);
auth.post('/register',userCtrl.register);
auth.get('/check', userCtrl.check)
auth.post('/logout', userCtrl.logout);

module.exports = auth;