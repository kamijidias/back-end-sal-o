const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const scheduling = new Schema({
    hallId: {
        type: mongoose.Types.ObjectId,
        ref: 'Hall',
        required: true,
    },
    clientId: {
        type: mongoose.Types.ObjectId,
        ref: 'Client',
        required: true,
    },
    serviceId: {
        type: mongoose.Types.ObjectId,
        ref: 'Service',
        required: true,
    },
    collaboratorId: {
        type: mongoose.Types.ObjectId,
        ref: 'Collaborator',
        required: true,
    },
    date: {
        type: Date,
        required: true
    },
    comission: {
        type: Number,
        required: true
    },
    value: {
        type: Number,
        required: true
    },
    transactionId: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

module.exports = mongoose.model('Scheduling', scheduling)