const mongoose = require("mongoose");


//Schema
const employeeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    position: { type: String, required: true },
    email: { type: String, required: true },           //UK
    mobile: { type: String, required: true },
    password: { type: String, required: true }
});


//Model
const Employee = mongoose.model("employee", employeeSchema);

module.exports = Employee;
