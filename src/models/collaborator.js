const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const collaborator = new Schema({
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
    bankAccount: {
        holder: {
            type: String,
            required: true
        },
        cpfCnpj: {
            type: String,
            required: true
        },
        bank: {
            type: String,
            required: true
        },
        type: {
            type: String,
            required: true
        },
        agency: {
            type: String,
            required: true
        },
        number: {
            type: String,
            required: true
        },
        digit: {
            type: String,
            required: true
        }
    },
    recipientId: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});


module.exports = mongoose.model('Collaborator', collaborator)