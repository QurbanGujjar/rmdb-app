const mongoose = require('mongoose');
const { Schema } = mongoose;
const AttorneyDSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    cName: {
        type: String,
    },
    uinType: {
        type: String,
    },
    uin: {
        type: String,
    },
    uinExpiry: {
        type: String,
    },
    mobile: {
        type: String,
    },
    email: {
        type: String,
    },
    maddress: {
        type: String,
    },
    mcity: {
        type: String,
    },
    mprovince: {
        type: String,
    },
    mcountry: {
        type: String,
    },
    mphoneRes: {
        type: String,
    },
    mfax: {
        type: String,
    }


});

module.exports = mongoose.model('attorneyD', AttorneyDSchema)