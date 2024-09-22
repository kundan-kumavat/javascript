const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    salary: {
        type: String,
        required: true
    },
    qualification: {
        type: String,
        required: true
    },
    experienceInYear: {
        type: Number,
        default: 0
    },
    worksInHospitals: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Hosptial"
        }
    ],
}, {timestamps: true});

module.exports = mongoose.model("Doctor", doctorSchema)