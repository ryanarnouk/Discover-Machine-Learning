const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const config = require('./config');

var port = process.env.PORT || 3001; 

require('./models').connect(config.dbUri);

const app = express();

// parse http body messages
app.use(bodyParser.urlencoded({ extended: false }));

//pass the passport middleware
app.use(passport.initialize())

//disable cors and add proxy
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//load the passport strategies
const localSignupStrategy = require('./passport/local-signup');
const localLoginStartegy = require('./passport/local-login');
passport.use('local-signup', localSignupStrategy);
passport.use('local-login', localLoginStartegy);

// pass the authentication checker middleware
const authCheckMiddleware = require('./middleware/auth-check');
app.use('/api', authCheckMiddleware);

//routes 
const authRoutes = require('./routes/auth');
const apiRoutes = require('./routes/api');
app.use('/auth', authRoutes);
app.use('/api', apiRoutes);

// start the server
app.listen(port, () => {
  console.log(`Server is running on ${port}`)
});
