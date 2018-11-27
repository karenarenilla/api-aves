var mongoose = require('mongoose');

var URI = 'mongodb://localhost/aves';

mongoose.connect(URI).then(db => console.log('base de datos conectada')).catch( err => console.error(err));

module.exports = mongoose;