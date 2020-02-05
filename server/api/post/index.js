const express = require("express");
const post = express.Router();
const postCtrl = require("./post.ctrl");
const { checkLogin } = require("../../lib/checkLogin");


post.get('/:id', postCtrl.getPostById, postCtrl.read);
post.get('/', postCtrl.list);
post.post('/', checkLogin, postCtrl.write);
post.patch('/:id', checkLogin, postCtrl.getPostById, postCtrl.checkOwnPost, postCtrl.update);
post.delete('/:id', checkLogin, postCtrl.getPostById, postCtrl.checkOwnPost,  postCtrl.remove);

module.exports = post;