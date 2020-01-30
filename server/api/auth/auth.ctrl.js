const User = require("../../models/user");

const login = (req, res) => {};

const register = (req, res) => {
  console.log(req.body);
  const { name, password } = req.body;
  const user = new User({
    name,
    password
  });

  user
    .save()
    .then(user => res.status(200).json(user))
    .catch(e => console.log(e));
};

module.exports = {
  login,
  register
};
