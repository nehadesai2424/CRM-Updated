let express = require('express');
let CustomerIssue = require('../models/customerIssueSchema');

let router = express.Router();


//POST METHOD-------------------------------------------------------------------------------------------------
router.post("/", async (req, res) => {
    try {

        const { customerId, issue, issueDate, employeeId, closeDate } = req.body;
        const createCustomerIssue = await CustomerIssue.create({ customerId, issue, issueDate, employeeId, closeDate});

        res.json({ status: "success", data: createCustomerIssue });
    } catch (err) {
        res.json({ status: "error", data: err });
    }
});


// GET METHOD-----------------------------------------------------------------------------------------------
// router.get("/", async (req, res) => {

//     try {
//         const customerIssue = await CustomerIssue.find({});

//         res.json({ status: "success", data: customerIssue });
//     } catch (err) {
//         res.send({ status: "Failed", data: "Something Wents Wrong" })
//     }
// });

router.get("/", async (req, res) => {
    try {
        const customerIssues = await CustomerIssue.find({})
            .populate("customerId")   // Replace with actual field name in schema
            .populate("employeeId");  // Replace with actual field name in schema

        res.json({ status: "success", data: customerIssues });

    } catch (err) {
        res.status(500).json({ status: "error", message: "Something went wrong" });
    }
});



//GET ByID--------
// router.get("/:id", async (req, res) => {

//     try {

//         const issueId = req.params.id;

//         const singleIssue = await CustomerIssue.findById(issueId);

//         res.json({ status: "success", data: singleIssue })
//     } catch (err) {
//         res.send({ status: "success", data: "Something Wents Wrong !!!" });
//     }

// });
router.get("/:id", async (req, res) => {
    try {
        const customerId = req.params.id;

        const issueData = await CustomerIssue.find({ customerId })  // Find returns an array
            .populate("customerId")
            .populate("employeeId");

        if (issueData.length === 0) {  // Check if the array is empty
            return res.status(404).json({ status: "error", message: "No issues found" });
        }

        res.json({ status: "success", data: issueData });

    } catch (error) {
        res.status(500).json({ status: "error", message: error.message });
    }
});




// //PUT method------------------------------------------------------------------------------------------------------
// router.put("/:id", async (req, res) => {

//     try {

//         const studentId = req.params.id;
//         const body = req.body;

//         let updatedData = await Student.findByIdAndUpdate(studentId, body, { new: true });

//         res.json({ status: "success", data: updatedData });
//     } catch (err) {
//         res.json({ status: "ERROR", data: "Something Wents Wrong" });
//     }
// });

// //Delete Method-----------------------------------------------------------------------------------------------------

router.delete("/:id", async (req, res) => {
    // const employeeId = req.params.id;

    try {

        const deletedData = await CustomerIssue.findByIdAndDelete(req.params.id);

        res.json({ status: "success", data: deletedData });

    } catch (err) {
        res.json({ status: "ERROR", data: "Something Wents Wrong" });
    }

});


module.exports = router;