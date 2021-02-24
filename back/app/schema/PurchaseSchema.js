const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const purchaseSchema = new Schema({
    ticket_id: {
        type: String,
        required: true,
        unique: true
    },
    mois_vente: {
        type: Number
    },
    products: [
        {
            type: Schema.Types.ObjectId,
            ref: 'product'
        }
    ]
});

module.exports = new mongoose.model('Purchase', purchaseSchema);
