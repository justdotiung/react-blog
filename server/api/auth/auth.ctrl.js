const User = require("../../models/user");

const login = (req, res) => {
  const { name, password } = req.body;

  if (!name || !password) return res.status(401).json({ error: "아이디 혹은 비밀번호를 입력해주세요" });
  User.findByName(name)
    .then(exists => {
      if (!exists) return res.status(401).json({ error: "존재하지않는 아이디입니다." });
      else {
        exists.comparePassword(password).then(isMatch => {
          if (!isMatch)
            return res.status(401).json({ error: "비밀번호가 일치하지 않습니다." });
          else {
            const token = exists.generateToKen();
            res.cookie("access_token", token, {
              httpOnly: true,
              maxAge: 1000 * 60 * 60 * 24 * 7
            });
            return res.status(200).json(exists);
          }
        });

        // console.log("passwor", exists);
      }
    })
    .catch(e => console.log(e));
};

const register = (req, res) => {
  console.log(req.body);
  const { name, password } = req.body;
  if (!password) return res.status(405).json({ error: "password empty" });

  const user = new User({
    name,
    password
  });
  User.findByName(name)
    .then(exists => {
      if (exists)
        return res.status(409).json({ error: "이미 존재하는 아이디" });
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

const check = (req, res) => {
  const { token } = req;
  console.log(token);

  if (!token) {
    return res.status(401).json({ error: "error" });
  }
  return res.status(200).json(token);
};

const logout = (req, res) => {
  res
    .cookie("access_token")
    .status(200)
    .json({ message: "logout" });
};
module.exports = {
  login,
  register,
  check,
  logout
};
