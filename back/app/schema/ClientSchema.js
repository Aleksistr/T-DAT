const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const clientSchema = new Schema({
    client_id: {
        type: String,
        required: true,
        unique: true
    },
    purchases: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Purchase'
        }
    ]
});

module.exports = new mongoose.model('Client', clientSchema);
