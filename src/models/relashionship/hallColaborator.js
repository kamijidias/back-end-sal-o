const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const hallCollaborator = new Schema({
    hallId: {
        type: mongoose.Types.ObjectId,
        ref: 'Hall',
        required: true,
    },
    collaboratorId: {
        type: mongoose.Types.ObjectId,
        ref: 'Collaborator',
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

module.exports = mongoose.model('HallCollaborator', hallCollaborator)