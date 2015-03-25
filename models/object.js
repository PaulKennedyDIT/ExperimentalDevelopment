//Load Required Packages

var mongoose = require('mongoose');

var ObjectSchema = new mongoose.Schema({
 name: String,
 type: String,
 quantifier: Number,
 userId: String
});

module.exports = mongoose.model('Object',ObjectSchema);
