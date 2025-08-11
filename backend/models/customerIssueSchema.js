const mongoose = require("mongoose");


//Schema
const customerIssueSchema = new mongoose.Schema({
    customerId: { type: mongoose.Types.ObjectId, ref: "customer"  },
    issue: { type: String, required: true },
    issueDate: { type: String, required: true },           
    employeeId: {  type: mongoose.Types.ObjectId, ref: "employee"  },
    closeDate: { type: String },
    // closeDate: { type: String, required: true },
    // status: { type: String, required: true }
});


//Model
const CustomerIssue = mongoose.model("customerIssue", customerIssueSchema);

module.exports = CustomerIssue;