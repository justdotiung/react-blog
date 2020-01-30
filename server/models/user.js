const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const UserSchema = mongoose.Schema({
  name: String,
  password: String
});

UserSchema.pre("save", function(next) {
  const err = new Error("bcrypt false");
 
  if (this.password) {
    const hash = bcrypt.hashSync(this.password, 10);
    this.password = hash;
    next();
  }
  next(err);
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
