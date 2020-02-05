const User = require("../../models/user");

const login = async (req, res) => {
  const { name, password } = req.body;

  if (!name || !password)
    return res
      .status(401)
      .json({ error: "아이디 혹은 비밀번호를 입력해주세요" });

  try {
    const user = await User.findByName(name);
    if (!user) {
      return res.status(401).json({ error: "존재하지않는 아이디입니다." });
    }
    const compare = await user.comparePassword(password);
    if (!compare) {
      return res.status(401).json({ error: "비밀번호가 일치하지 않습니다." });
    }
    const token = await user.generateToKen();
    res.cookie("access_token", token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 7
    });
    return res.status(200).json(user);
  } catch (e) {
    console.log(e);
  }

  // User.findByName(name)
  //   .then(user => {
  //     if (!user)
  //       return res.status(401).json({ error: "존재하지않는 아이디입니다." });
  //     return user.comparePassword(password);
  //   })
  //   .then(isMatch => {
  //     if (!isMatch) {
  //       return res.status(401).json({ error: "비밀번호가 일치하지 않습니다." });
  //     }
  //     return User.findByName(name);
  //   })
  //   .then(user => {
  //     const token = user.generateToKen();
  //     res.cookie("access_token", token, {
  //       httpOnly: true,
  //       maxAge: 1000 * 60 * 60 * 24 * 7
  //     });
  //     return res.status(200).json(user);
  //   })
  //   .catch(e => console.log(e));
};

const register = async (req, res) => {
  console.log(req.body);
  const { name, password } = req.body;
  if (!name || !password)
    return res.status(405).json({ error: "공백을 채워주세요" });

  const user = new User({
    name,
    password
  });
  try {
    const exists = await User.findByName(name);
    if (exists) return res.status(409).json({ error: "이미 존재하는 아이디" });

    await user.save();

    const token = user.generateToKen();
    res.cookie("access_token", token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 7
    });
    return res.status(200).json(user.showUser());
  } catch (e) {
    console.log(e);
  }
  /*
  User.findByName(name)
    .then(exists => {
      if (exists)
        return res.status(409).json({ error: "이미 존재하는 아이디" });
      return user.save();
    })
    .then(user => res.status(200).json(user))
    .catch(e => console.log(e));
  const token = user.generateToKen();
  res.cookie("access_token", token, {
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24 * 7
  });
  */
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
