const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const hallService = new Schema({
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
    status: {
        type: String,
        enum: ['A', 'I'],
        required: true,
        default: 'A'
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

module.exports = mongoose.model('HallService', hallService)