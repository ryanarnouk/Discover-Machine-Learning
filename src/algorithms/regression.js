/*const ml = require('ml-regression');
const csv = require('csvtojson');*/
import ml from 'ml-regression';
import csv from 'csvtojson';
const SLR = ml.SLR;

const csvFilePath = 'RealEstate.csv'

let csvData = [],
  X = [],
  y = []

let regressionModel;

csv().fromFile(csvFilePath)
  .on('json', (jsonObj) => {
    csvData.push(jsonObj);
  })
  .on('done', () => {
    dressData(); // to g eet the data points from the json objects
    preformRegression();
  });

function dressData() {
  csvData.forEach((row) => {
    X.push(f(row.Size));
    y.push(f(row.Price));
  });
}

function f(s) {
  return parseFloat(s);
}

function preformRegression() {
  regressionModel = new SLR(X, y); // Train the model on the traing data we specified in dressData
  console.log(regressionModel.toString(3));
  predictOutput();
}

// allow user to put in inputs and see a prediction (implement his in the ui in the final version)
function predictOutput() {
  rl.question('Enter input X for prediction: ', (answer)=> {
    console.log(`At X = ${answer}, y = ${regressionModel.predict(parseFloat(answer))}`);
    predictOutput();
  });
}

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin, 
  output: process.stdout
})

// try to plot it 
