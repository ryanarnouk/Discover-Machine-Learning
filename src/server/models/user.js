const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// define the user model schema
const UserSchema = new mongoose.Schema({
  email: {
    type: String, 
    index: { unique: true }
  }, 
  password: String, 
  name: String
});

// Compare the passed password with the value in the database a model method
UserSchema.methods.comparePassword = function comparePassword(password, callback) {
  bcrypt.compare(password, this.password, callback);
}

// pre save hook method
UserSchema.pre('save', function saveHook(next) {
  const user = this;

  // proceed furthor only if the password is modified or the user is new
  if(!user.isModified('password')) return next();

  return bcrypt.genSalt((saltError, salt) => {
    if(saltError) { return next(saltError); }
    
    return bcrypt.hash(user.password, salt, (hashError, hash) => {
      if (hashError) { return next(hashError); }

      user.password = hash;

      return next();
    });
  });
});

module.exports = mongoose.model('User', UserSchema)