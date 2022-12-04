const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const client = new Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    mail: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    photo: {
        type: String,
        required: true
    },
    dateBorn: {
        type: String, // YYYY-MM-DD
        required: true
    },
    gender: {
        type: String,
        enum: ['M', 'F'],
        required: true
    },
    status: {
        type: String,
        enum: ['A', 'I'],
        required: true,
        default: 'A'
    },
    document: {
        type: {
            type: String,
            enum: ['individual', 'corporate'],
            required: true
        },
        number: {
            type: Number,
            required: true
        },
    },
    address: {
        city: String,
        uf: String,
        zipCode: String,
        number: String,
        country: String,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});


module.exports = mongoose.model('Client', client)