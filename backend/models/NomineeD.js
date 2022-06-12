const mongoose = require('mongoose');
const { Schema } = mongoose;
const NomineeDSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    rName: {
        type: String,
    },
    relation: {
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
    maddress: {
        type: String,
    }
});

module.exports = mongoose.model('nomineeD', NomineeDSchema)