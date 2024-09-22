const mongoose = require('mongoose');

const hosptialSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    addressLine1: {
        type: String,
        required: true
    },
    addressLine2: {
        type: String,
    },
    city: {
        type: String,
        required: true
    },
    pincode: {
        type: String,
        required: true
    },
    specalizedIn: [{
        type: String,
    }]
}, {timestamps: true});

module.exports = mongoose.model("Hospital", hosptialSchema)