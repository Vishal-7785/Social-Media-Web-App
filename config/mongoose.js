const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/codeial');

const db = mongoose.connection;

db.on('error',console.error.bind('Error connecting to mongodb'));

db.once('open',function(){
    console.log('Connected to database :: MongoDB');
})

module.exports = db;