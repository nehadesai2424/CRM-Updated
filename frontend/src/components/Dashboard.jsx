// import React from 'react'

// function Dashboard() {
//     return (
//         <>
//             <main id="main" class="main">
//                 <div class="pagetitle">
//                     <h1>Dashboard</h1>
//                     <nav>
//                         <ol class="breadcrumb">
//                             <li class="breadcrumb-item"><a href="index.html">Home</a></li>
//                             <li class="breadcrumb-item active">Dashboard</li>
//                         </ol>
//                     </nav>
//                 </div>

//                 <div class="container py-4">

//                     {/* <!-- Summary Cards with Icons --> */}
//                     <div class="row g-4 mb-4">
//                         {/* <!-- Total Clients --> */}
//                         <div class="col-md-4">
//                             <div class="card border-0 shadow-sm pt-3">
//                                 <div class="card-body d-flex align-items-center justify-content-between">
//                                     <div>
//                                         <h6 class="text-muted mb-1">Total Clients</h6>
//                                         <h3 class="fw-bold text-primary mb-0">152</h3>
//                                     </div>
//                                     <i class="bi bi-people-fill fs-2 text-primary"></i>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* <!-- Open Deals --> */}
//                         <div class="col-md-4">
//                             <div class="card border-0 shadow-sm pt-3">
//                                 <div class="card-body d-flex align-items-center justify-content-between">
//                                     <div>
//                                         <h6 class="text-muted mb-1">Open Deals</h6>
//                                         <h3 class="fw-bold text-warning mb-0">37</h3>
//                                     </div>
//                                     <i class="fa-solid fa-handshake fs-2 text-warning"></i>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* <!-- Revenue --> */}
//                         <div class="col-md-4">
//                             <div class="card border-0 shadow-sm pt-3">
//                                 <div class="card-body d-flex align-items-center justify-content-between">
//                                     <div>
//                                         <h6 class="text-muted mb-1">Revenue (This Month)</h6>
//                                         <h3 class="fw-bold text-success mb-0">2.45L</h3>
//                                     </div>
//                                     <i class="fa-solid fa-indian-rupee-sign fs-2 text-success"></i>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>



//                     {/* <!-- Recent Activities Table --> */}
//                     <div class="card shadow-sm border-0">
//                         <div class="card-header bg-white fw-bold">Recent Activities</div>
//                         <div class="card-body p-4">
//                             <div class="table-responsive">
//                                 <table class="table table-hover table-bordered mb-0">
//                                     <thead class="table-light">
//                                         <tr>
//                                             <th>#</th>
//                                             <th>Client</th>
//                                             <th>Activity</th>
//                                             <th>Date</th>
//                                         </tr>
//                                     </thead>
//                                     <tbody>
//                                         <tr>
//                                             <td>1</td>
//                                             <td>Neha Desai</td>
//                                             <td>Updated contact info</td>
//                                             <td>07-07-2025</td>
//                                         </tr>
//                                         <tr>
//                                             <td>2</td>
//                                             <td>Rajiv Mehta</td>
//                                             <td>New Deal Created</td>
//                                             <td>09-07-2025</td>
//                                         </tr>
//                                         <tr>
//                                             <td>3</td>
//                                             <td>Anita Shah</td>
//                                             <td>Converted from lead</td>
//                                             <td>14-07-2025</td>
//                                         </tr>
//                                         <tr>
//                                             <td>4</td>
//                                             <td>Vikram Joshi</td>
//                                             <td>Requested follow-up</td>
//                                             <td>20-07-2025</td>
//                                         </tr>
//                                     </tbody>
//                                 </table>
//                             </div>
//                         </div>
//                     </div>

//                     {/* <!-- Extra Section: Quick Notes --> */}
//                     <div class="row mt-4 g-4">
//                         <div class="col-md-6">
//                             <div class="card border-0 shadow-sm h-100">
//                                 <div class="card-header bg-white fw-bold">Quick Notes</div>
//                                 <div class="card-body">
//                                     <ul class="list-group list-group-flush">
//                                         <li class="list-group-item">Meeting with client A on Thursday at 11 AM</li>
//                                         <li class="list-group-item">Send mail to XYZ Pvt Ltd</li>
//                                         <li class="list-group-item">Update CRM status for new leads</li>
//                                     </ul>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* <!-- Upcoming Tasks --> */}
//                         <div class="col-md-6">
//                             <div class="card border-0 shadow-sm h-100">
//                                 <div class="card-header bg-white fw-bold">Upcoming Follow-Ups</div>
//                                 <div class="card-body">
//                                     <table class="table table-sm table-bordered">
//                                         <thead class="table-light">
//                                             <tr>
//                                                 <th>Client</th>
//                                                 <th>Task</th>
//                                                 <th>Date</th>
//                                             </tr>
//                                         </thead>
//                                         <tbody>
//                                             <tr>
//                                                 <td>Manoj Verma</td>
//                                                 <td>Follow-up Call</td>
//                                                 <td>07-07-2025</td>
//                                             </tr>
//                                             <tr>
//                                                 <td>Rekha Shah</td>
//                                                 <td>Send Email</td>
//                                                 <td>10-07-2025</td>
//                                             </tr>
//                                             <tr>
//                                                 <td>Ravi Singh</td>
//                                                 <td>Demo Setup</td>
//                                                 <td>15-07-2025</td>
//                                             </tr>
//                                         </tbody>
//                                     </table>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     {/* <!-- Extra Section: Client Feedback --> */}
//                     <div class="row mt-4">
//                         <div class="col">
//                             <div class="card border-0 shadow-sm">
//                                 <div class="card-header bg-white fw-bold">Recent Client Feedback</div>
//                                 <div class="card-body">
//                                     <div class="row g-3">
//                                         <div class="col-md-4">
//                                             <div class="border p-3 rounded bg-light">
//                                                 <strong>Neha Desai</strong><br />
//                                                 <small>“Excellent service and quick response!”</small>
//                                             </div>
//                                         </div>
//                                         <div class="col-md-4">
//                                             <div class="border p-3 rounded bg-light">
//                                                 <strong>Ajay Gupta</strong><br />
//                                                 <small>“Appreciated the personal follow-up.”</small>
//                                             </div>
//                                         </div>
//                                         <div class="col-md-4">
//                                             <div class="border p-3 rounded bg-light">
//                                                 <strong>Pooja Mehta</strong><br />
//                                                 <small>“Helpful team, looking forward to working together.”</small>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>


//                 </div>

//             </main>

//             {/* <!-- End Page Title --> */}

//         </>
//     )
// }

// export default Dashboard


import React, { useState } from 'react'

const activityData = [
    { id: 1, customer: 'Sakshi Ojha', activity: 'Updated contact info', date: '07-07-2025' },
    { id: 2, customer: 'Rajiv Mehta', activity: 'New Deal Created', date: '09-07-2025' },
    { id: 3, customer: 'Anita Shah', activity: 'Converted from lead', date: '14-07-2025' },
    { id: 4, customer: 'Vikram Joshi', activity: 'Requested follow-up', date: '20-07-2025' },
    { id: 5, customer: 'Amit Rao', activity: 'Sent invoice', date: '21-07-2025' },
    { id: 6, customer: 'Kavita Nair', activity: 'Scheduled demo', date: '22-07-2025' },
    { id: 7, customer: 'Sejal Jain', activity: 'Feedback received', date: '23-07-2025' },
];

function Dashboard() {

    const [page, setPage] = useState(1);
    const perPage = 4;
    const totalPages = Math.ceil(activityData.length / perPage);

    const currentData = activityData.slice((page - 1) * perPage, page * perPage);


    return (
        <>
            <main id="main" className="main">
                <div className="pagetitle">
                    <h1>Dashboard</h1>
                    <nav>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="/">Home</a></li>
                            <li className="breadcrumb-item active">Dashboard</li>
                        </ol>
                    </nav>
                </div>

                <div className="container mt-4">

                    {/* Summary Cards */}
                    <div className="row g-4 ">
                        {/* Total Clients */}
                        <div className="col-md-4">
                            <div className="card border-0 shadow-sm pt-3">
                                <div className="card-body d-flex align-items-center justify-content-between">
                                    <div>
                                        <h6 className="text-muted mb-1">Total Customers</h6>
                                        <h3 className="fw-bold text-primary mb-0">152</h3>
                                    </div>
                                    <i className="bi bi-people-fill fs-2 text-primary"></i>
                                </div>
                            </div>
                        </div>

                        {/* Open Deals */}
                        <div className="col-md-4">
                            <div className="card border-0 shadow-sm pt-3">
                                <div className="card-body d-flex align-items-center justify-content-between">
                                    <div>
                                        <h6 className="text-muted mb-1">Open Deals</h6>
                                        <h3 className="fw-bold text-warning mb-0">37</h3>
                                    </div>
                                    <i className="fa-solid fa-handshake fs-2 text-warning"></i>
                                </div>
                            </div>
                        </div>

                        {/* Revenue */}
                        <div className="col-md-4">
                            <div className="card border-0 shadow-sm pt-3">
                                <div className="card-body d-flex align-items-center justify-content-between">
                                    <div>
                                        <h6 className="text-muted mb-1">Revenue (This Month)</h6>
                                        <h3 className="fw-bold text-success mb-0">2.45L</h3>
                                    </div>
                                    <i className="fa-solid fa-indian-rupee-sign fs-2 text-success"></i>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Recent Activities Table */}
                    <div className="card shadow-sm border-0">
                        <div className="card-header bg-white fw-bold">Recent Activities</div>
                        <div className="card-body p-4">
                            <div className="table-responsive">
                                <table className="table table-hover table-bordered mb-0">
                                    <thead className="table-secondary">
                                        <tr>
                                            <th>#</th>
                                            <th>Customer</th>
                                            <th>Activity</th>
                                            <th>Date</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {currentData.map((item, index) => (
                                            <tr key={item.id}>
                                                <td>{(page - 1) * perPage + index + 1}</td>
                                                <td>{item.customer}</td>
                                                <td>{item.activity}</td>
                                                <td>{item.date}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            {/* Pagination */}
                            <div className="d-flex justify-content-end align-items-center mt-3">
                                <button
                                    className="btn btn-sm btn-outline-secondary me-2"
                                    disabled={page === 1}
                                    onClick={() => setPage(page - 1)}
                                >
                                    <i className="bi bi-chevron-left"></i> Prev
                                </button>
                                <span className="small">Page {page} of {totalPages}</span>
                                <button
                                    className="btn btn-sm btn-outline-secondary ms-2"
                                    disabled={page === totalPages}
                                    onClick={() => setPage(page + 1)}
                                >
                                    Next <i className="bi bi-chevron-right"></i>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Quick Notes & Upcoming Follow-Ups */}
                    <div className="row g-4">
                        {/* Quick Notes */}
                        <div className="col-md-6">
                            <div className="card border-0 shadow-sm h-100">
                                <div className="card-header bg-white fw-bold d-flex justify-content-between align-items-center">
                                    <span>Quick Notes</span>
                                    <button className="btn btn-sm btn-outline-primary">
                                        <i className="bi bi-plus-circle me-1"></i>Add Note
                                    </button>
                                </div>
                                <div className="card-body p-4">
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">Meeting with client A on Thursday at 11 AM</li>
                                        <li className="list-group-item">Send mail to XYZ Pvt Ltd</li>
                                        <li className="list-group-item">Update CRM status for new leads</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Upcoming Follow-Ups */}
                        <div className="col-md-6">
                            <div className="card border-0 shadow-sm h-100">
                                <div className="card-header bg-white fw-bold d-flex justify-content-between align-items-center">
                                    <span>Upcoming Follow-Ups</span>
                                    <button className="btn btn-sm btn-outline-success">
                                        <i className="bi bi-calendar-plus me-1"></i>New Follow-Up
                                    </button>
                                </div>
                                <div className="card-body p-4">
                                    <table className="table table-sm table-bordered">
                                        <thead className="table-secondary">
                                            <tr>
                                                <th>Customer</th>
                                                <th>Task</th>
                                                <th>Date</th>
                                                <th>Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr><td>Manoj Verma</td><td>Follow-up Call</td><td>07-07-2025</td><td><span className="badge bg-warning text-dark">Pending</span></td></tr>
                                            <tr><td>Vidhi Shah</td><td>Send Email</td><td>10-07-2025</td><td><span className="badge bg-success">Completed</span></td></tr>
                                            <tr><td>Ravi Mehta</td><td>Demo Setup</td><td>15-07-2025</td><td><span className="badge bg-info text-dark">Scheduled</span></td></tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Monthly Performance Overview */}
                    <div className="row mt-2 g-4 ">
                        <div className="col">
                            <div className="card border-0 shadow-sm">
                                <div className="card-header bg-white fw-bold">Monthly Performance Overview</div>
                                <div className="card-body p-4">
                                    <p className="mb-2 fw-semibold">Customer Acquisition Target</p>
                                    <div className="progress mb-3" style={{ height: '20px' }}>
                                        <div className="progress-bar bg-primary" style={{ width: '75%' }}>
                                            75%
                                        </div>
                                    </div>

                                    <p className="mb-2 fw-semibold">Revenue Target</p>
                                    <div className="progress mb-3" style={{ height: '20px' }}>
                                        <div className="progress-bar bg-success" style={{ width: '60%' }}>
                                            60%
                                        </div>
                                    </div>

                                    <p className="mb-2 fw-semibold">Follow-up Completion</p>
                                    <div className="progress" style={{ height: '20px' }}>
                                        <div className="progress-bar bg-warning text-dark" style={{ width: '85%' }}>
                                            85%
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Top Performing Clients */}
                    <div className="row">
                        <div className="col">
                            <div className="card border-0 shadow-sm">
                                <div className="card-header bg-white fw-bold d-flex justify-content-between align-items-center">
                                    <span>Top Performing Customers</span>
                                    <button className="btn btn-sm btn-outline-secondary">
                                        <i className="bi bi-trophy me-1"></i>View All
                                    </button>
                                </div>
                                <div className="card-body p-4">
                                    <table className="table table-sm table-hover table-bordered">
                                        <thead className="table-secondary">
                                            <tr>
                                                <th>Customer</th>
                                                <th>Revenue</th>
                                                <th>Engagement Score</th>
                                                <th>Last Interaction</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Sakshi Ojha</td>
                                                <td>₹85,000</td>
                                                <td><span className="badge bg-success">9.2</span></td>
                                                <td>11-07-2025</td>
                                            </tr>
                                            <tr>
                                                <td>Rajiv Mehta</td>
                                                <td>₹72,000</td>
                                                <td><span className="badge bg-info text-dark">8.7</span></td>
                                                <td>09-07-2025</td>
                                            </tr>
                                            <tr>
                                                <td>Pooja Mehta</td>
                                                <td>₹65,500</td>
                                                <td><span className="badge bg-warning text-dark">7.9</span></td>
                                                <td>08-07-2025</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Recent Feedback */}
                    <div className="row">
                        <div className="col">
                            <div className="card border-0 shadow-sm">
                                <div className="card-header bg-white fw-bold d-flex justify-content-between align-items-center">
                                    <span><i className="bi bi-stars text-warning me-2"></i>Recent Customer Feedback</span>
                                    <button className="btn btn-sm btn-outline-secondary">
                                        <i className="bi bi-chat-left-text me-1"></i>View All
                                    </button>
                                </div>
                                <div className="card-body p-4">
                                    <div className="row g-4">
                                        {/* Feedback Card 1 */}
                                        <div className="col-md-4">
                                            <div className="border rounded shadow-sm p-3 bg-light h-100">
                                                <div className="d-flex align-items-center mb-2">
                                                    <i className="bi bi-person-circle fs-5 text-primary me-2"></i>
                                                    <strong className="me-auto">Sejal Jain</strong>
                                                    <small className="text-muted">07 Jul</small>
                                                </div>
                                                <p className="mb-1 small">“Excellent service and quick response!”</p>
                                                <div className="text-warning small">★★★★★</div>
                                            </div>
                                        </div>

                                        {/* Feedback Card 2 */}
                                        <div className="col-md-4">
                                            <div className="border rounded shadow-sm p-3 bg-light h-100">
                                                <div className="d-flex align-items-center mb-2">
                                                    <i className="bi bi-person-circle fs-5 text-primary me-2"></i>
                                                    <strong className="me-auto">Ajay Gupta</strong>
                                                    <small className="text-muted">09 Jul</small>
                                                </div>
                                                <p className="mb-1 small">“Appreciated the personal follow-up.”</p>
                                                <div className="text-warning small">★★★★☆</div>
                                            </div>
                                        </div>

                                        {/* Feedback Card 3 */}
                                        <div className="col-md-4">
                                            <div className="border rounded shadow-sm p-3 bg-light h-100">
                                                <div className="d-flex align-items-center mb-2">
                                                    <i className="bi bi-person-circle fs-5 text-primary me-2"></i>
                                                    <strong className="me-auto">Pooja Mehta</strong>
                                                    <small className="text-muted">11 Jul</small>
                                                </div>
                                                <p className="mb-1 small">“Helpful team, looking forward to working together.”</p>
                                                <div className="text-warning small">★★★★★</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </main>
        </>
    )
}

export default Dashboard

