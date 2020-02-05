const jwt = require("jsonwebtoken");
const User = require("../models/user");

const jwtMiddleware = async (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) return next();
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.state={};
    req.state.token = {
      _id: decoded._id,
      name: decoded.name
    };
    console.log('decoded',decoded);
    const now = Math.floor(Date.now() / 1000);
    if (decoded.exp - now < 60 * 60 * 24) {
      const user = User.findById(decoded._id);
      const token = user.generateToKen();
      res.cookie("access_token", token, {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true
      });
    }
    return next();
  } catch (e) {
    return next();
  }
};

module.exports = jwtMiddleware;
