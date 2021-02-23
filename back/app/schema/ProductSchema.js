const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    libelle: {
        type: String,
        required: true,
        unique: true
    },
    price: {
        type: Number
    },
    families: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Famille'
        }
    ],
    universes: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Universe'
        }
    ]
});


const autoPopulateFamilies = function (next) {
    this.populate('families');
    this.populate('universes');
    next();
}

productSchema
    .pre('find', autoPopulateFamilies)
    .pre('findOne', autoPopulateFamilies);

module.exports = new mongoose.model('Product', productSchema);
