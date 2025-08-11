const mongoose = require("mongoose");


//Schema
const issueReviewSchema = new mongoose.Schema({
    issueId: { type: mongoose.Types.ObjectId, ref: "customerIssue"  },
    reviewDate: { type: String, required: true },
    employeeId: { type: mongoose.Types.ObjectId, ref: "employee" },
    review: { type: String, required: true }
});


//Model
const IssueReview = mongoose.model("issueReview", issueReviewSchema);

module.exports = IssueReview;