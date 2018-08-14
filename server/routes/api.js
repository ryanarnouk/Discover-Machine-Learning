const express = require('express');

const app = express();

app.get('/profile', (req, res) => {
  res.status(200).json({
    message: 'Authorized'
  });
});

module.exports = app;