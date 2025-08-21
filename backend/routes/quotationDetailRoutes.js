const express = require("express");
const QuotationDetail = require("../models/quotationDetailSchema");
const Customer = require("../models/customerSchema"); 
const router = express.Router();

// 🔹 Create Quotation
router.post("/", async (req, res) => {
    try {
        const quotation = new QuotationDetail(req.body);
        await quotation.save();
        res.status(201).json({ message: "Quotation created successfully", quotation });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// 🔹 Get all Quotations
router.get("/", async (req, res) => {
    try {
        const quotations = await QuotationDetail.find().populate("customerId");
        res.json(quotations);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// 🔹 Get single Quotation
router.get("/:id", async (req, res) => {
    try {
        const quotation = await QuotationDetail.findById(req.params.id).populate("customerId");
        if (!quotation) return res.status(404).json({ error: "Quotation not found" });
        res.json(quotation);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// 🔹 Update Quotation
router.put("/:id", async (req, res) => {
    try {
        const quotation = await QuotationDetail.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        if (!quotation) return res.status(404).json({ error: "Quotation not found" });
        res.json({ message: "Quotation updated successfully", quotation });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// 🔹 Delete Quotation
router.delete("/:id", async (req, res) => {
    try {
        const quotation = await QuotationDetail.findByIdAndDelete(req.params.id);
        if (!quotation) return res.status(404).json({ error: "Quotation not found" });
        res.json({ message: "Quotation deleted successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
