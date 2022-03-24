const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/socialmedia', () => {
  console.log('db connected');
});
