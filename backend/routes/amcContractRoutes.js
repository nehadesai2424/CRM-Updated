const express = require('express');
const AmcContract = require('../models/amcContractSchema'); // Adjust the path if needed
const router = express.Router();

// POST: Create a new AMC contract
router.post('/', async (req, res) => {
    try {
        const amcContract = await AmcContract.create(req.body);
        res.json({ status: 'success', data: amcContract });
    } catch (err) {
        res.json({ status: 'error', data: err.message });
    }
});

// GET: Fetch all AMC contracts
router.get('/', async (req, res) => {
    try {
        const contracts = await AmcContract.find().populate('customer');
        res.json({ status: 'success', data: contracts });
    } catch (err) {
        res.json({ status: 'error', data: err.message });
    }
});

// GET: Fetch a single AMC contract by ID
router.get('/:id', async (req, res) => {
    try {
        const contract = await AmcContract.findById(req.params.id).populate('customer');
        res.json({ status: 'success', data: contract });
    } catch (err) {
        res.json({ status: 'error', data: err.message });
    }
});

// PUT: Update an AMC contract by ID
router.put('/:id', async (req, res) => {
    try {
        const updated = await AmcContract.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json({ status: 'success', data: updated });
    } catch (err) {
        res.json({ status: 'error', data: err.message });
    }
});

// DELETE: Delete an AMC contract by ID
router.delete('/:id', async (req, res) => {
    try {
        const deleted = await AmcContract.findByIdAndDelete(req.params.id);
        res.json({ status: 'success', data: deleted });
    } catch (err) {
        res.json({ status: 'error', data: err.message });
    }
});

module.exports = router;
