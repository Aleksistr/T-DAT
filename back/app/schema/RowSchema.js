const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const rowSchema = new Schema({
    TICKET_ID: {
        type: String,
        required: true,
        unique: true
    },
    MOIS_VENTE: {
        type: String
    },
    PRIX_NET: {
        type: String
    },
    FAMILLE: {
        type: String
    },
    UNIVERS: {
        type: String
    },
    MAILLE: {
        type: String
    },
    LIBELLE: {
        type: String
    },
    CLI_ID: {
        type: String
    }
});

module.exports = new mongoose.model('Row', rowSchema);
