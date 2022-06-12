const mongoose = require('mongoose');
const { Schema } = mongoose;
const NotesSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    accountCode: {
        type: String,
    },
    openDate: {
        type: String,
    },
    unkNumber: {
        type: String,
    },
    unkIssueDate: {
        type: String,
    },
    cName: {
        type: String,
    },
    cFName: {
        type: String,
    },
    resStatus: {
        type: String,
    },
    nationality: {
        type: String,
    },
    maritalStatus: {
        type: String,
    },
    placeOfBirth: {
        type: String,
    },
    uinType: {
        type: String,
    },
    uin: {
        type: String,
    },
    dateOfIssue: {
        type: String,
    },
    uinExpiry: {
        type: String,
    },
    email: {
        type: String,
    },
    mobile: {
        type: String,
    },
    ivrService: {
        type: String,
    },
    motherName: {
        type: String,
    },
    motherDOB: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now
    }



});

module.exports = mongoose.model('notes', NotesSchema)