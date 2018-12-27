const express = require('express');
const app = express()

app.post('/progress', (req, res, next) => {
  res.send(req.body)
});

module.exports = app;