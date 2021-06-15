const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const requestSchema = new Schema({
    name: String,
    request: String,
    description: String,
    priority: String
}, { timestamps: true });

module.exports = mongoose.model('Request', requestSchema);