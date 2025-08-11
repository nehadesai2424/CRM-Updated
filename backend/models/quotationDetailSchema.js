const mongoose = require("mongoose");

// Schema
const quotationDetailSchema = new mongoose.Schema({
    quotationId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'quotation',
        required: true
    },
    srNo: {
        type: Number,
        required: true
    },
    item: {
        type: String,
        required: true
    },
    description: {
        type: String,
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

const QuotationDetail = mongoose.model("quotation_detail", quotationDetailSchema);
module.exports = QuotationDetail;
