const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const familleSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    }
});

module.exports = new mongoose.model('Famille', familleSchema);
