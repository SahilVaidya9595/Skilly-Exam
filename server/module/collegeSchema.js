const mongoose = require("mongoose");

const collegeSchema = new mongoose.Schema({
    college_name: {
        type: String,
        required:true
    },
    applyer_full_name: {
        type: String,
        required: true
    },
    applyer_age: {
        type: Number,
        required: true
    },
    applyer_gender: {
        type: String,
        required: true
    },
    applyer_phone_no: {
        type: Number,
        required: true
    },
    college_address: {
        type: String,
        required: true
    },
    college_email: {
        type: String,
        required: true
    },
    college_password: {
        type: String,
        required: true
    }
})

const College = mongoose.model('COLLEGE', collegeSchema);

module.exports = College;