import React from 'react'

function IssueReviews() {
    return (
        <>
            <main id="main" class="main">
                <div class="pagetitle">
                    <h1>Issue Reviews</h1>
                    <nav>
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="/">Home</a></li>
                            <li class="breadcrumb-item"><a>General Reports</a></li>
                            <li class="breadcrumb-item active">Issue Reviews</li>
                        </ol>
                    </nav>
                </div>
                {/* <hr /> */}
                <div class="container mt-4">
                    <div class="table-responsive">
                        <table class="table table-bordered shadow text-center">
                            <thead class="table-secondary">
                                <tr>
                                    <th className='py-3'>No</th>
                                    <th className='py-3'>Issues</th>
                                    <th className='py-3'>Review Date & Time</th>
                                    <th className='py-3'>Employee</th>
                                    <th className='py-3'>Review</th>
                                    <th className='py-3'>Reviews Count</th>
                                    <th className='py-3'>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* {
                        issueData.map((eachData, index) => {
                            return (
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{eachData.customerId.name}</td>
                                    <td>{eachData.issue}</td>
                                    <td>{eachData.employeeId.name}</td>
                                    <td>{eachData.issueDate}</td>
                                    <td>{eachData.closeDate}</td>
                                    <td>
                                        <button class="btn btn-danger btn-sm"  onClick={() => handleDelete(eachData._id)}><i class="fa-solid fa-trash"></i></button>
                                    </td>
                                </tr>
                            )
                        })
                    } */}
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
            <div class="d-flex justify-content-center align-items-center" style={{ height: '50vh' }}>
                <h3 className='text-danger'>No Reviews Found</h3>
            </div>

        </>
    )
}

export default IssueReviews