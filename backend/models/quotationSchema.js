const mongoose = require("mongoose");

// Schema
const quotationSchema = new mongoose.Schema({
    quotationDate: {
        type: String,
        required: true
    },
    quotationNo: {
        type: String,
        required: true,
        unique: true
    },
    customerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'customer',
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
        required: true
    },
    billAmount: {
        type: Number,
        required: true
    }
});

// Model
const Quotation = mongoose.model("quotation", quotationSchema);

module.exports = Quotation;
