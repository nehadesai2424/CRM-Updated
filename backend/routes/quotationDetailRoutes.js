const express = require('express');
const QuotationDetail = require('../models/quotationDetailSchema'); // Adjust the path as needed
const router = express.Router();

// POST: Create a new detail item for a quotation
router.post("/", async (req, res) => {
    try {
        const detail = await QuotationDetail.create(req.body);
        res.json({ status: "success", data: detail });
    } catch (err) {
        res.json({ status: "error", data: err.message });
    }
});

// GET: All quotation details
router.get("/", async (req, res) => {
    try {
        const details = await QuotationDetail.find().populate("quotationId");
        res.json({ status: "success", data: details });
    } catch (err) {
        res.json({ status: "error", data: err.message });
    }
});

// GET: Single detail by its own _id
router.get("/:id", async (req, res) => {
    try {
        const detail = await QuotationDetail.findById(req.params.id).populate("quotationId");
        res.json({ status: "success", data: detail });
    } catch (err) {
        res.json({ status: "error", data: err.message });
    }
});

// PUT: Update a detail by its own _id
router.put("/:id", async (req, res) => {
    try {
        const updated = await QuotationDetail.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json({ status: "success", data: updated });
    } catch (err) {
        res.json({ status: "error", data: err.message });
    }
});

// DELETE: Remove a detail by its own _id
router.delete("/:id", async (req, res) => {
    try {
        const deleted = await QuotationDetail.findByIdAndDelete(req.params.id);
        res.json({ status: "success", data: deleted });
    } catch (err) {
        res.json({ status: "error", data: err.message });
    }
});


module.exports = router;
