const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const service = new Schema({
    hallId: {
        type: mongoose.Types.ObjectId,
        ref: 'Hall',
        required: true,
    },
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    comission: {
        type: Number, // % about price
        required: true
    },
    duration: {
        type: String, // Duration in minuts
        required: true
    },
    recurrence: {
        type: Number, // REDO THE SERVICE IN DAYS
        required: true
    },
    description: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum: ['A', 'I', 'D'],
        required: true,
        default: 'A'
    },
    createdAt: {
        type: Date,
        default: Data.now,
    }
});

salao.index({ geo: '2dsphere' })

module.exports = mongoose.model('Service', service)

// 43:17