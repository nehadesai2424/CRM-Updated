import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function AddIssue() {


    // to navigate
    const navigate = useNavigate();

    //to get customerData
    const [customer, setCustomer] = useState([]);
    useEffect(() => {
        axios.get(process.env.REACT_APP_BASEURL + "/customers")
            .then((res) => {
                // console.log(res.data.data);
                setCustomer(res.data.data);
            })
    }, [])

    //to get employeeData
    const [employee, setEmployee] = useState([]);
    useEffect(() => {
        axios.get(process.env.REACT_APP_BASEURL + "/employees")
            .then((res) => {
                // console.log(res.data.data);
                setEmployee(res.data.data);
            })
    }, [])

    //to post data
    const [issue, setIssue] = useState({
        customerId: "",
        employeeId: "",
        issue: "",
        issueDate: "",
        closeDate: "",
        // status: ""
    });

    // Handle Input Change
    const handleChangeIssueData = (e) => {
        //console.log(e.target.value)
        setIssue({ ...issue, [e.target.name]: e.target.value });
    };

    const handleSubmitIssueData = async (e) => {
        e.preventDefault();
        try {
            const Issue = await axios.post(process.env.REACT_APP_BASEURL + "/customers-issue", issue);
            alert("Issue added successfully!");
            console.log(Issue);
            setIssue({ customerId: "", employeeId: "", issue: "", issueDate: "", closeDate: "", status: "" }); // Clear form
            navigate("/issues"); // Redirect after alert
        } catch (error) {
            console.error("Error adding Customer:", error);
        }
    }

    return (
        <>
            <main id="main" class="main">
                <div class="pagetitle">
                    <h1>Issue Form</h1>
                    <nav>
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="/">Home</a></li>
                            <li class="breadcrumb-item"><a>Customer Issues</a></li>
                            <li class="breadcrumb-item active">Issue Form</li>
                        </ol>
                    </nav>
                </div>

                <div class="container mt-4">
                    <div class="card p-4">
                        <h4 class="mb-3">Issue Form</h4>
                        <form onSubmit={handleSubmitIssueData}>
                            {/* <!-- First Row: Customer and Employee Dropdowns --> */}
                            <div class="row mb-3">
                                <div class="col-md-6">
                                    <label class="form-label fw-bold">Customer <span class="text-danger">*</span></label>
                                    <select value={issue.customerId} onChange={handleChangeIssueData} class="form-select" name="customerId" required>
                                        <option value={""}>Select Customer</option>
                                        {
                                            customer.map((customer) => {
                                                //console.log(customerData);

                                                return (
                                                    <option value={customer._id}> {customer.name} </option>
                                                )
                                            })
                                        }
                                    </select>
                                </div>
                                {/* <div class="col-md-6">
                                    <label class="form-label fw-bold">Employee <span class="text-danger">*</span></label>
                                    <select value={issue.employeeId} onChange={handleChangeIssueData} class="form-select" name="employeeId" required>
                                        <option value="">Select Employee</option>
                                        {
                                            employee.map((employee) => {
                                                //console.log(customerData);

                                                return (
                                                    <option value={employee._id}> {employee.name} </option>
                                                )
                                            })
                                        }
                                    </select>
                                </div> */}
                                  <div className="col-md-6">
                                    <label className="form-label fw-bold">
                                        Employee <span className="text-danger">*</span>
                                    </label>
                                    <select
                                        value={issue.employeeId}
                                        onChange={handleChangeIssueData}
                                        className="form-select"
                                        name="employeeId"
                                        required
                                    >
                                        <option value="">Select Employee</option>
                                        {employee.map((employee) => (
                                            <option key={employee._id} value={employee._id}>
                                                {employee.name} &nbsp; ({employee.position})
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            {/* <!-- Second Row: Issue Input (Text Area) --> */}
                            <div class="row mb-3">
                                <div class="col-md-12">
                                    <label class="form-label fw-bold">Issue <span class="text-danger">*</span></label>
                                    <textarea class="form-control" onChange={handleChangeIssueData} value={issue.issue} name="issue" rows="3" placeholder="Describe the issue..." required></textarea>
                                </div>
                            </div>

                            {/* <!-- Third Row: Issue Date and Close Date --> */}
                            <div class="row mb-3">
                                <div class="col-md-6">
                                    <label class="form-label fw-bold">Issue Date <span class="text-danger">*</span></label>
                                    <input type="date" class="form-control" onChange={handleChangeIssueData} value={issue.issueDate} name="issueDate" required />
                                </div>
                                <div class="col-md-6">
                                    <label class="form-label fw-bold">Close Date</label>
                                    <input type="date" onChange={handleChangeIssueData} value={issue.closeDate} class="form-control" name="closeDate" />
                                </div>
                            </div>

                            {/* <!-- Buttons --> */}
                            <div class="d-flex justify-content-end">
                                <button type="submit" class="btn btn-success me-2">Save</button>
                                <button type="reset" class="btn btn-danger">Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
        </>
    )
}

export default AddIssue