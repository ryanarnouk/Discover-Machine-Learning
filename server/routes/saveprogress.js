const express = require('express');
const app = express()
const qs = require('qs');
const Progress = require('mongoose').model('Progress');

app.post('/save', (req, res, next) => {
  console.log(req.query.email)
  //save data
  const progressData = {
    email: req.query.email,
    progress: req.body
  }

  const newProgress = new Progress(progressData);
  newProgress.save((err) => {
    console.log(err);
  });

  res.send(Progress);
});

app.get('/load', (req, res) => {
  Progress.findOne({email: req.query.email}, (err, data) => {
    console.log(data);
    res.send(data);
  })
});

module.exports = app;