const express = require("express");
const post = express.Router();
const postCtrl = require("./post.ctrl");

post.get('/:id',postCtrl.read);
post.get('/', postCtrl.list);
post.post('/', postCtrl.write);
post.put('/:id', postCtrl.update);
post.delete('/:id', postCtrl.delete);
