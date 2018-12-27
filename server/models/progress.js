const mongoose = require('mongoose');

const ProgressSchema = new mongoose.Schema({
  email: {
    type: String, 
    index: { unique: true }
  }, 
  progress: Object
});

module.exports = mongoose.model('Progress', ProgressSchema);
