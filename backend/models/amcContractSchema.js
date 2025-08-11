const mongoose = require('mongoose');

const amcContractSchema = new mongoose.Schema({
    amcDate: {
        type: String,
        required: true
    },
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'customer', // assuming you have a customer model
        required: true
    },
    subtotal: {
        type: Number,
        required: true
    },
    discount: {
        type: Number,
        default: 0
    },
    total: {
        type: Number,
        required: true
    },
    gstAmount: {
        type: Number,
        default: 0
    },
    billAmount: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('AmcContract', amcContractSchema);
