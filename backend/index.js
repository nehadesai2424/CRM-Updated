let express = require('express');
let cors = require('cors');
let mongoose = require('mongoose');
let bodyParser = require('body-parser');

mongoose.connect("mongodb://127.0.0.1:27017/crm-updated")
    .then((res) => {
        console.log("Database Connect...");
    });

//----------------------------------------------------------------------------------

let app = express();
app.use(cors());

app.use(express.json());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

app.get("/", (req, res) => {
    res.send("Welcome To NodeJs")
});

app.use("/employees", require("./routes/employeeRoutes"));
app.use("/customers", require("./routes/customerRoutes"));
app.use("/customers-issue", require("./routes/customerIssueRoutes"));
app.use("/issue-review", require("./routes/issueReviewRoutes"));
app.use("/quotationDetails", require("./routes/quotationDetailRoutes"));

//----------------------------------------------------------------------------------------

const PORT = 8081;
app.listen(PORT, () => {
    console.log(`Server Running on http://localhost:${PORT}`);
});