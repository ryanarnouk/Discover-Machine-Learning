const express = require('express');
const config = require('./config');
const app = express();

var port = process.env.PORT || 3000; 

// start the server
app.listen(port, () => {
  console.log(`Server is running on ${port}`)
});
