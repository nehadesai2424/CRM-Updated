const express = require('express');
const Quotation = require('../models/quotationSchema'); // Adjust path if needed
const router = express.Router();

// CREATE a new quotation
router.post("/", async (req, res) => {
    try {
        const {
            quotationDate,
            quotationNo,
            customerId,
            subtotal,
            discount,
            total,
            gstAmount,
            billAmount
        } = req.body;

        const newQuotation = await Quotation.create({
            quotationDate,
            quotationNo,
            customerId,
            subtotal,
            discount,
            total,
            gstAmount,
            billAmount
        });

        res.json({ status: "success", data: newQuotation });
    } catch (err) {
        res.json({ status: "error", data: err.message });
    }
});

// GET all quotations
router.get("/", async (req, res) => {
    try {
        const quotations = await Quotation.find().populate("customerId");
        res.json({ status: "success", data: quotations });
    } catch (err) {
        res.json({ status: "error", data: err.message });
    }
});

// GET quotation by ID
router.get("/:id", async (req, res) => {
    try {
        const quotation = await Quotation.findById(req.params.id).populate("customerId");
        res.json({ status: "success", data: quotation });
    } catch (err) {
        res.json({ status: "error", data: err.message });
    }
});

// UPDATE quotation by ID
router.put("/:id", async (req, res) => {
    try {
        const updatedQuotation = await Quotation.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json({ status: "success", data: updatedQuotation });
    } catch (err) {
        res.json({ status: "error", data: err.message });
    }
});

// DELETE quotation by ID
router.delete("/:id", async (req, res) => {
    try {
        const deletedQuotation = await Quotation.findByIdAndDelete(req.params.id);
        res.json({ status: "success", data: deletedQuotation });
    } catch (err) {
        res.json({ status: "error", data: err.message });
    }
});

module.exports = router;
