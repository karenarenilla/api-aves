const mongoose = require('mongoose');

const { Schema } = mongoose;

const AveSchema = new Schema({
    name: { type: String, required: true },
    habitad: { type: String, required: true },
    type_ave: { type: String, required: true }
});

module.exports = mongoose.model('aves', AveSchema)