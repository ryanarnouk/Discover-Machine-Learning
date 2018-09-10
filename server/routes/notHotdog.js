const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const Clarifai = require('clarifai');

const clarifaiApp = new Clarifai.App({apiKey: process.env.CLARIFAI_KEY});

let helpers = require('../helperfiles/helper');

app.use(bodyParser.json());

app.get('/result', (req, res) => {
  const data = {
    'message': helpers.getMessage(req.query.per),
    'per': req.query.per, 
    'url': req.query.url
  };

  res.send({data});
});

app.post('/upload', (req, res) => {
  let imageUrl = req.body.imageUrl; 

  clarifaiApp.models.predict("bd367be194cf45149e75f01d59f77ba7", imageUrl).then(
    () => {
      let responseD = response['outputs'];
      let concepts = responseD[0]['data']['concepts'];
      let percentageResult = helpers.hotdogOrNot(concepts);

      res.redirect(`/result/?per=${percentageResult}&url=${imageUrl}`);
    }, 
    (err) => {
      console.log(err);
      res.send(err);
    }
  );
});


module.exports = app;