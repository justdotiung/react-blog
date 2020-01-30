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
  }
  next(err);
});

UserSchema.methods.comparePassword = function(password) {
  bcrypt.compare(password, this.password).then(function(res) {
    console.log(res);
  });
};

UserSchema.statics.findByName = function(name) {
  return this.findOne({ name });
};

UserSchema.methods.generateToKen = function() {
    const token = jwt.sign(
        {
            _id: this.id,
            name: this.name,
        },
        process.env.JWT_SECRET,
        {
            expiresIn: '3d'
        },
    );
    return token;
}

const User = mongoose.model("User", UserSchema);

module.exports = User;
