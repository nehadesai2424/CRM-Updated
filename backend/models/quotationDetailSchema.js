const mongoose = require("mongoose");

const quotationDetailSchema = new mongoose.Schema(
  {
    quotationNo: {
      type: String,
      required: true,
      unique: true,
    },
    quotationDate: {
      type: Date,
      required: true,
    },
    customerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "customer", // assumes you have a Customer model
      required: true,
    },
    items: [
      {
        product: { type: String, required: true },
        description: { type: String },
        quantity: { type: Number, required: true, min: 0 },
        rate: { type: Number, required: true, min: 0 },
        total: { type: Number, required: true, min: 0 },
      },
    ],
    subtotal: { type: Number, required: true },
    discount: { type: Number, default: 0 },
    total: { type: Number, required: true },
    gstAmount: { type: Number, required: true },
    billAmount: { type: Number, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("QuotationDetail", quotationDetailSchema);
