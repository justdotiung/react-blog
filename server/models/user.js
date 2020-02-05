const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const UserSchema = mongoose.Schema({
  name: String,
  password: String
});

UserSchema.pre("save", function(next) {
  const err = new Error("pre hooks Error");

  if (this.password) {
    const hash = bcrypt.hashSync(this.password, 10);
    this.password = hash;
    next();
    return;
  }

  next(err);
});

UserSchema.methods.showUser = function() {
  const user = this.toObject();
  delete user.password;
  return user;
}

UserSchema.methods.comparePassword = function(password) {
  return bcrypt.compare(password, this.password);
};

UserSchema.methods.generateToKen = function() {
  const token = jwt.sign(
    {
      _id: this.id,
      name: this.name
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "3d"
    }
  );
  return token;
};

UserSchema.statics.findByName = function(name) {
  return this.findOne({ name });
};

const User = mongoose.model("User", UserSchema);

module.exports = User;
