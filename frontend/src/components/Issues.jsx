import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2';

function Issues() {
  // to get data   
  const [issueData, setIssueData] = useState([]);

  function loadData() {
    console.log(process.env.REACT_APP_BASEURL + "/customers-issue");
    axios.get(process.env.REACT_APP_BASEURL + "/customers-issue")
      .then((res) => {
        console.log(res.data.data);
        setIssueData(res.data.data);
      })
  };

  useEffect(() => {
    loadData()
  }, [])

  //To delete data
  function handleDelete(id) {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(process.env.REACT_APP_BASEURL + "/customers-issue/" + id)
          .then((res) => {
            console.log(res.data);
            loadData(); // Refresh the data after deletion
            Swal.fire({
              title: "Deleted!",
              text: "Your item has been deleted.",
              icon: "success"
            });
          })
          .catch((error) => {
            console.error("Error deleting item:", error);
            Swal.fire({
              title: "Error!",
              text: "Something went wrong. Please try again later.",
              icon: "error"
            });
          });
      }
    });
  }
  return (
    <>
      <main id="main" class="main">
        <div class="pagetitle">
          <h1>Customer Issues</h1>
          <nav>
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><a href="/">Home</a></li>
              <li class="breadcrumb-item active">Customer Issues</li>
            </ol>

            <div className='d-flex justify-content-end me-4'>
              {/* <Link to='/addissues'>
                <button className='btn btn-primary px-5 ms-3 mt-2'><i class="fa-solid fa-plus me-2"></i>Add Issue</button>
              </Link> */}

              <Link to="/addissues" className="text-decoration-none">
                <div
                  className="d-inline-flex align-items-center border rounded shadow-sm px-4 py-2 bg-light hover-effect"
                  data-bs-toggle="tooltip"
                  data-bs-placement="right"
                  title="Add a new customer issue"
                  style={{ transition: 'all 0.2s ease-in-out' }}
                >
                  <i className="bi bi-plus-circle-fill text-primary me-2 fs-5"></i>
                  <div>
                    <div className="fw-semibold text-dark small">Add Issue</div>
                    <small className="text-muted">Log a complaint or query</small>
                  </div>
                </div>
              </Link>



            </div>
          </nav>
        </div>
        {/* <hr /> */}


        <div className="container mt-4" style={{ height: '70vh', overflowY: 'scroll' }}>
          <div className="table-responsive">
            <table className="table table-bordered shadow text-center">
              <thead className="table-secondary">
                <tr>
                  <th className="py-3">No</th>
                  <th className="py-3">Customer Name</th>
                  <th className="py-3">Issues</th>
                  <th className="py-3">Employee Name</th>
                  <th className="py-3">Issues Date</th>
                  <th className="py-3">Close Date</th>
                  <th className="py-3">Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  issueData.map((eachData, index) => (
                    <tr key={eachData._id}>
                      <td>{index + 1}</td>
                      <td>{eachData.customerId.name}</td>
                      <td>{eachData.issue}</td>
                      <td>{eachData.employeeId.name}</td>
                      <td>{eachData.issueDate}</td>
                      <td>{eachData.closeDate}</td>
                      <td>
                        <div className="d-flex flex-sm-row flex-column justify-content-center gap-2">

                          {/* <button className="btn btn-primary btn-sm">
                            <i className="fa-solid fa-pencil"></i>
                          </button> */}
                          <button className="btn btn-danger btn-sm" onClick={() => handleDelete(eachData._id)}>
                            <i className="fa-solid fa-trash"></i>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
        </div>
      </main>

    </>
  )
}

export default Issues