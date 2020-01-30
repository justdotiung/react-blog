const User = require("../../models/user");

const login = (req, res) => {
  //console.log(req.body);
  const { name, password } = req.body;

  if (!name || !password) return res.status(401).json({ error: "not enough" });
  let user = User.findByName(name)
    .then(exists => {
      if (!exists) return res.status(401).json({ error: "not name" });
      const isMatch = exists.comparePassword(password);
      if (isMatch) return res.status(401).json({ error: "password mismatch" });
      return exists;
    })
    .then(user =>{ 
      const token = user.generateToKen();
      res.cookie("access_token", token, {
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24 * 7
      });
      res.status(200).json(user)
    })
    .catch(e => console.log(e));
  };

const register = (req, res) => {
  console.log(req.body);
  const { name, password } = req.body;

  const user = new User({
    name,
    password
  });
  User.findByName(name)
    .then(exists => {
      if (exists) return res.status(409).json({ error: "exists" });
      return user
        .save()
        .then(user => res.status(200).json(user))
        .catch(e => console.log(e));
    })
    .catch(e => console.log(e));
  const token = user.generateToKen();
  res.cookie("access_token", token, {
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24 * 7
  });
};

const sam = ctx => {
  
};
module.exports = {
  login,
  register,
  sam
};
