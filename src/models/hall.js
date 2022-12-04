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
        cidade: String,
        uf: String,
        cep: String,
        numero: String,
        pais: String,
    },
    geo: {
        tipo: String,
        cordinates: Array,
    },
    createdAt: {
        type: Date,
        default: Data.now,
    }
});

salao.index({ geo: '2dsphere' })

module.exports = mongoose.model('Hall', hall)