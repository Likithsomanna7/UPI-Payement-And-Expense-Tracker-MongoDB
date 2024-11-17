const mongoose = require('mongoose');

const schema = mongoose.Schema({
    Accountholder: {
        type: String,
        required: true,
    },
    Email: {
        type: String,
        required: true,
    },
    Password: {
        type: String,
        required: true,
    },
    Accountnumber: {
        type: String,
        required: true,
    },
    Phonenumber: {
        type: Number,
        required: true,
    },
    deposit: {
        type: Number,
    },
    transactions: [
        {
            autofill: {
                type: String, 
            },
            amount: {
                type: Number, 
            },
            date: {
                type: Date, 
                default: Date.now,
            },
        },
    ],

},

{ timestamps: true });

const model = mongoose.model('USERS', schema);
module.exports = model;
