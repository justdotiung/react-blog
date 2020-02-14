const Post = require("../../models/post");
const mongoose = require("mongoose");
const sanitizeHtml = require("sanitize-html");

const { ObjectId } = mongoose.Types;

const santizeOption = {
  allowedTags: [
    "h1",
    "h2",
    "b",
    "i",
    "u",
    "s",
    "p",
    "ul",
    "ol",
    "li",
    "a",
    "span",
    "img",
    "em",

    "blockqueto"
  ],
  allowedAttributes: {
    a: [" href", " name", " target"],
    img: ["src"],
    li: ["class"],
    span: ["style"]
  },
  allowedSchemes: [" http", " https", " data"]
};

const getPostById = async (req, res, next) => {
  const { id } = req.params;
  if (!ObjectId.isValid(id))
    return res.status(400).json({ error: "잘못된 포스트 번호 입니다." });
  try {
    const post = await Post.findById(id);
    if (!post)
      return res.status(404).json({ error: "존재하지않는 포스트입니다." });
    req.post = post;
    return next();
  } catch (e) {
    console.log(e);
  }
};

const checkOwnPost = (req, res, next) => {
  const { token } = req.state;
  const { user } = req.post;

  if (token._id !== user._id.toString())
    return res.status(403).json({ error: "권한이 없습니다." });
  return next();
};
// const getPostById = (req, res, next) => {
//   const { id } = req.params;
//   if (!ObjectId.isValid(id))
//     return res.status(400).json({ error: "잘못된 포스트 번호 입니다." });
//   Post.findById(id)
//     .then((post) => {
//       if (!post)
//         return res.status(404).json({ error: "존재하지않는 포스트입니다." });
//        req.post = post;
//       return next();
//     })
//     .catch(e => console.log(e));
// };

// const checkOwnPost = (req, res, next) => {
//   const { token } = req.state;
//   const { user } = req.post;

//   if (token._id !== user._id.toString())
//     return res.status(403).json({ error: "권한이 없습니다." });
//   return next();
// };

const list = async (req, res) => {
  const page = parseInt(req.query.page || 1, 10);
  try {
    const pagination = await Post.countDocuments();
    res.set("last-page", Math.ceil(pagination / 12));
    const post = await Post.find()
      .sort({ writeDate: -1 })
      .limit(12)
      .skip((page - 1) * 12);
    const data = post
      .map(post => post.toJSON())
      .map(post => ({
        ...post,
        title:
          post.title.length < 9 ? post.title : `${post.title.slice(0, 9)}...`
      }));
    return res.status(200).json(data);
  } catch (e) {
    console.log(e);
  }
};
/*
const list = (req, res) => {
  const page = parseInt(req.query.page || 1, 10);
  // const removeHtmlAndShorten = contents => {
  //   const filtered = sanitizeHtml(contents, {
  //     allowedTags: [] //모든 태그 제외
  //   });
  //   return filtered.length < 4 ? filtered : `${filtered.slice(0, 4)}...`;
  // };

  Post.countDocuments()
    .then(num => {
      // console.log(Math.ceil(num / 10));
      res.set("last-page", Math.ceil(num / 12));
      return Post.find()
        .sort({ writeDate: -1 })
        .limit(12)
        .skip((page - 1) * 12);
    })
    .then(postList => {
      const data = postList
        .map(post => post.toJSON())
        .map(post => ({
          ...post,
          title: post.title.length<9 ? post.title :
          `${post.title.slice(0,9)}...`,
        //  contents: removeHtmlAndShorten(post.contents)//html 코드제거
        //   constents:
        //     post.contents.length < 4
        //       ? post.contents
        //       : `${post.contents.slice(0, 4)}...`
        }));
      //console.log(data);
      return res.status(200).json(data);
    })
    .catch(e => {
      console.log(e);
    });
};
*/
const write = (req, res) => {
  const { title, contents, tags } = req.body;

  const post = new Post({
    title,
    contents: sanitizeHtml(contents, santizeOption),
    tags,
    user: req.state.token
  });
  if (!title || !contents) {
    return res.status(400).json({ error: "모두 입력해주세요" });
  }
  post.save();
  return res.status(200).json(post);
};

const remove = async (req, res) => {
  const { id } = req.params;
  try {
    await Post.findByIdAndRemove(id);
    res.status(204).send();
  } catch (e) {
    console.log(e);
  }
};

const read = (req, res) => {
  return res.status(200).json(req.post);
};

const update = async (req, res) => {
  const { id } = req.params;
  const { title, contents } = req.body;

  if (!title || !contents) {
    return res.status(400).json({ error: "모두 입력해주세요" });
  }

  try {
    const Post = await Post.findByIdAndUpdate(id, req.body, {
      new: true
    });
    if (!post) return res.status(404).json({ error: "잘못된 페이지입니다." });
    console.log(post);
    return res.status(200).json(post);
  } catch (e) {
    console.log(e)
  }
};
/*
const read = (req, res) => {
  return res.status(200).json(req.post);
};

const update = (req, res) => {
  const { id } = req.params;
  const { title, contents } = req.body;

  if (!title || !contents) {
    return res.status(400).json({ error: "모두 입력해주세요" });
  }
  Post.findByIdAndUpdate(id, req.body, {
    new: true
  })
    .then(post => {
      if (!post) return res.status(404).json({ error: "잘못된 페이지입니다." });
      console.log(post);
      return res.status(200).json(post);
    })
    .catch(e => console.log(e));
};
*/
module.exports = {
  list,
  write,
  remove,
  read,
  update,
  getPostById,
  checkOwnPost
};
