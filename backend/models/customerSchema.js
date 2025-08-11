const mongoose = require("mongoose");


//Schema
const customerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    address: { type: String, required: true },
    email: { type: String, required: true },           
    mobile: { type: String, required: true },
    altmobile: { type: String}
});


//Model
const Customer = mongoose.model("customer", customerSchema);

module.exports = Customer;

