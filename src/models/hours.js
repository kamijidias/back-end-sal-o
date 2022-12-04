const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const hours = new Schema({
    hallId: {
        type: mongoose.Types.ObjectId,
        ref: 'Hall',
        required: true,
    },
    specialties: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'Service',
            required: true,
        },
    ],
    collaborators: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'Collaborator',
            required: true,
        },
    ],
    days: {
        type: [Number],
        required: true
    },
    start: {
        type: Date,
        required: true
    },
    end: {
        type: Date,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

salao.index({ geo: '2dsphere' })

module.exports = mongoose.model('Hours', hours)