const mongoose = require('mongoose');
const { Schema } = mongoose;
const ContactDSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
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
    mphoneOff: {
        type: String,
    },
    mphoneRes: {
        type: String,
    },
    mfax: {
        type: String,
    },
    paddress: {
        type: String,
    },
    pcity: {
        type: String,
    },
    pprovince: {
        type: String,
    },
    pcountry: {
        type: String,
    },
    pphoneOff: {
        type: String,
    },
    pphoneRes: {
        type: String,
    },
    pfax: {
        type: String,
    }

});

module.exports = mongoose.model('contactD', ContactDSchema)