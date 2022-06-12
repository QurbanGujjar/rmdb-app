const mongoose = require('mongoose');
const { Schema } = mongoose;
const OtherDSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    annualIncome: {
        type: String,
    },
    incomeSource: {
        type: String,
    },
    occupation: {
        type: String,
    },
    jobTitle: {
        type: String,
    },
    jobDepartment: {
        type: String,
    },
    employerName: {
        type: String,
    },
    employerAdd: {
        type: String,
    },
    bank: {
        type: String,
    },
    iban: {
        type: String,
    },
    zakatStatus: {
        type: String,
    },
    remittance: {
        type: String,
    }
});

module.exports = mongoose.model('otherD', OtherDSchema)