const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const hall = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
    },
    foto: String,
    capa: String,
    mail: {
        type: String,
        required: [true, 'E-mail is required'],
    },
    pasword: {
        type: String,
        default: null,
    },
    phone: String,
    address: {
        city: String,
        uf: String,
        zipCode: String,
        number: String,
        country: String,
    },
    geo: {
        tipo: String,
        cordinates: Array,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

salao.index({ geo: '2dsphere' })

module.exports = mongoose.model('Hall', hall)