import React from 'react'

function AmcContracts() {
    return (
        <>
            <main id="main" className="main">
                <div className="pagetitle">
                    <h1>AMC Contracts</h1>
                    <nav>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="/">Home</a></li>
                            <li className="breadcrumb-item active">AMC Contracts</li>
                        </ol>
                    </nav>
                </div>
                {/* AMC List Table */}
                <div className="container mt-4">
                    <div className="table-responsive">
                        <table className="table table-bordered text-center align-middle shadow-sm">
                            <thead className="table-secondary">
                                <tr>
                                    <th>No</th>
                                    <th>AMC No</th>
                                    <th>Customer Name</th>
                                    <th>Start Date</th>
                                    <th>End Date</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { startDate: "2025-08-01", endDate: "2026-07-31", customer: "Customer A", amcNo: "AMC001" },
                                    { startDate: "2025-09-01", endDate: "2026-08-31", customer: "Customer B", amcNo: "AMC002" }
                                ].map((a, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{a.amcNo}</td>
                                        <td>{a.customer}</td>
                                        <td>{a.startDate}</td>
                                        <td>{a.endDate}</td>
                                        <td>
                                            <div className="d-flex flex-wrap justify-content-center gap-2">
                                                <button className="btn btn-primary btn-sm">
                                                    <i className="fa-solid fa-pencil"></i>
                                                </button>
                                                <button className="btn btn-danger btn-sm">
                                                    <i className="fa-solid fa-trash"></i>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

            </main>

        </>
    )
}

export default AmcContracts