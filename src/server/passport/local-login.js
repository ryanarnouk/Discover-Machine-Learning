const jwt = require('jsonwebtoken');
const User = require('mongoose').model('User');
const PassportLocalStrategy = require('passport-local').Strategy;
const config = require('../config');

// return the passport local strategy object
module.exports = new PassportLocalStrategy({
  usernameField: 'email', 
  passwordField: 'password',
  session: false, 
  passReqToCallback: true
}, (req, email, password, done) => {
  const userData = {
    email: email.trim(), 
    password: password.trim()
  };

  // find a user by email address
  return User.findOne({ email: userData.email }, (err, user) => {
    console.log(email, password);
    if (err) { return done(err); }

    if(!user) {
      console.log(user + 'hi') //null
      const error = new Error('Incorrect email or password');
      error.name = 'IncorrectCredentialsError';

      return done(error);
    }

    // check if a hasked users password is equal to a value saved in the database
    return user.comparePassword(userData.password, (passwordErr, isMatch) => {
      if (err) { return done(err); }

      if(!isMatch) {
        const error = new Error('Incorrect email or password');
        error.name = 'IncorrectCredentialsError';

        return done(error);
      }

      const payload = {
        sub: user._id
      };

      // create a token string
      const token = jwt.sign(payload, config.jwtSecret);
      const data = {
        name: user.name
      };

      return done(null, token, data);
    });
  })
})