const Post = require("../../models/post");
const mongoose = require("mongoose");

const { ObjectId } = mongoose.Types;

const getPostById = (req, res, next) => {
  const { id } = req.params;
  if (!ObjectId.isValid(id))
    return res.status(400).json({ error: "잘못된 포스트 번호 입니다." });
  Post.findById(id)
    .then(post => {
      if (!post)
        return res.status(404).json({ error: "존재하지않는 포스트입니다." });

      req.state.post = post;
      console.log(req.state)
      return next();
    })
    .catch(e => console.log(e));
};

const checkOwnPost = (req, res, next) => {
  const { token, post } = req.state;
  
  if (token._id !== post.user._id.toString())
    return res.status(403).json({ error: "권한이 없습니다." });
  return next();
};

const list = (req, res) => {
  const page = parseInt(req.query.page || 1);

  Post.countDocuments().then(num => {
    console.log(Math.ceil(num / 10));
    return res.set("last-page", Math.ceil(num / 10));
  });
  Post.find()
    .sort({ writeDate: -1 })
    .limit(10)
    .skip((page - 1) * 10)
    .then(postList => {
      const data = postList
        .map(post => post.toJSON())
        .map(post => ({
          ...post,
          contents:
            post.contents.length < 10
              ? post.contents
              : `${post.contents.slice(0, 10)}...`
        }));
      return res.status(200).json(data);
    })
    .catch(e => {
      console.log(e);
    });
};

const write = (req, res) => {
  const { title, contents, tags } = req.body;

  const post = new Post({
    title,
    contents,
    tags,
    user: req.state.token
  });
  if (!title || !contents)
    return res.status(400).json({ error: "모두 입력해주세요" });
  post.save();
  return res.status(200).json(post);
};

const remove = (req, res) => {
  const { id } = req.params;
  Post.findByIdAndRemove(id)
    .then(() => res.status(204).json({message:"삭제완료"}))
    .catch(e => console.log(e));
};

const read = (req, res) => {
  return res.status(200).json(req.state.post);
};

const update = (req, res) => {
  const { id } = req.params;
  const { title, contents, tags } = req.body;

  console.log(tags);

  if (!title || !contents)
    return res.status(400).json({ error: "모두 입력해주세요" });

  Post.findByIdAndUpdate(id, req.body, {
    new: true
  })
    .then(post => {
      if (!post) return res.status(404).json({ error: "잘못된 페이지입니다." });
      return res.status(200).json(post);
    })
    .catch(e => console.log(e));
};

module.exports = {
  list,
  write,
  remove,
  read,
  update,
  getPostById,
  checkOwnPost
};
