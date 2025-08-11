import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

function Employees() {

  //to get data
  const [id, setId] = useState(null);

  const [employeeData, setEmployeeData] = useState([]);

  function loadData() {
    //console.log(process.env.REACT_APP_BASEURL  + "/employees");
    axios.get(process.env.REACT_APP_BASEURL + "/employees")
      .then((res) => {
        console.log(res.data.data);
        setEmployeeData(res.data.data);
      })
  };

  useEffect(() => {
    loadData()
  }, [])

  //to post data
  const [employee, setEmployee] = useState({
    name: "",
    position: "",
    email: "",
    mobile: "",
    password: ""
  });

  // Handle Input Change
  const handleChangeEmployeeData = (e) => {
    //console.log(e.target.value)
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };


  // Handle Form Submission
  const handleSubmitEmployeeData = async (e) => {
    e.preventDefault();

    //console.log(customer);
    // console.log(process.env.REACT_APP_BASEURL);
    // axios.post("http://localhost:8081/customers", customer)
    //   .then((res) => {
    //     console.log(res.data.data);
    //   })

    if (!id) {
      try {
        const Employee = await axios.post(process.env.REACT_APP_BASEURL + "/employees", employee);
        alert("Employee added successfully!");
        //console.log(Customer);
        setEmployee({ name: "", position: "", email: "", mobile: "", password: "" }); // Clear form
      } catch (error) {
        console.error("Error adding Employee:", error);
      }
      loadData()
    }
    else {
      //alert("hii")
      try {
        await axios.put(process.env.REACT_APP_BASEURL + "/employees/" + id, employee);
        alert("Employee updated successfully!");
        setId(null); // Reset ID after updating
        setEmployee({ name: "", position: "", email: "", mobile: "", password: "" }); // Clear form
      } catch (error) {
        console.error("Error updating Employee:", error);
      }
    }
    loadData(); // Refresh employee list after operation
  }


  //HandleReset
  const handleReset = () => {
    setEmployee({ name: "", position: "", email: "", mobile: "", password: "" });
  };


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
        axios.delete(process.env.REACT_APP_BASEURL + "/employees/" + id)
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


  //To get data in form for update
  function handleUpdate(id) {
    axios.get(process.env.REACT_APP_BASEURL + "/employees/" + id)
      .then((res) => {
        console.log(res.data.data);

        // Populate the form fields with fetched employee data
        setEmployee({
          name: res.data.data.name,
          position: res.data.data.position,
          email: res.data.data.email,
          mobile: res.data.data.mobile,
          password: res.data.data.password
        });

        setId(id); // Store the ID to switch to "update mode"
      })
      .catch((err) => {
        console.error("Error fetching employee data:", err);
      });

  };

  return (
    <>
      <main id="main" class="main">
        <div class="pagetitle">
          <h1>Employees</h1>
          <nav>
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><a href="/">Home</a></li>
              <li class="breadcrumb-item"><a>Forms</a></li>
              <li class="breadcrumb-item active">Employees</li>
            </ol>
          </nav>
        </div>

        {/*Employee Form */}
        <div class="container mt-4">
          <div class="card p-4">
            <form onSubmit={handleSubmitEmployeeData}>
              <div class="row mb-3">
                <div class="col-md-6">
                  <label class="form-label fw-bold">Name <span class="text-danger">*</span></label>
                  <input onChange={handleChangeEmployeeData} value={employee.name} type="text" class="form-control" name="name" id="name" placeholder="Enter name" required />
                </div>
                <div class="col-md-6">
                  <label class="form-label fw-bold">Position <span class="text-danger">*</span></label>
                  <input onChange={handleChangeEmployeeData} value={employee.position} type="text" class="form-control" name="position" id="position" placeholder="Enter Position" required />
                </div>
              </div>
              <div class="row mb-3">
                <div class="col-md-4">
                  <label class="form-label fw-bold">Email <span class="text-danger">*</span></label>
                  <input onChange={handleChangeEmployeeData} value={employee.email} type="email" class="form-control" name="email" id="email" placeholder="Enter email" required />
                </div>
                <div class="col-md-4">
                  <label class="form-label fw-bold">Mobile <span class="text-danger">*</span></label>
                  <input onChange={handleChangeEmployeeData} value={employee.mobile} type="text" class="form-control" name="mobile" id="mobile" placeholder="Enter mobile number" required />
                </div>
                <div class="col-md-4">
                  <label class="form-label fw-bold">Password  <span class="text-danger">*</span></label>
                  <input onChange={handleChangeEmployeeData} value={employee.password} type="password" class="form-control" name="password" id="password" placeholder="Enter Password" />
                </div>
              </div>
              <div class="d-flex justify-content-end">
                <button type="submit" class="btn btn-success me-2">Save</button>
                <button type="reset" class="btn btn-danger" onClick={handleReset}>Cancel</button>
              </div>
            </form>
          </div>
        </div>

        {/* Employee Table */}
        <div className="container mt-5">
          <h5 className="fw-bold mb-3">Employee Details</h5>
          <div className="table-responsive">
            <table className="table table-bordered text-center shadow">
              <thead className="table-secondary">
                <tr>
                  <th className="py-3">No</th>
                  <th className="py-3">Name</th>
                  <th className="py-3">Position</th>
                  <th className="py-3">Email</th>
                  <th className="py-3">Mobile</th>
                  <th className="py-3">Password</th>
                  <th className="py-3">Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  employeeData.map((eachData, index) => (
                    <tr key={eachData._id}>
                      <td>{index + 1}</td>
                      <td>{eachData.name}</td>
                      <td>{eachData.position}</td>
                      <td className="text-break" style={{ maxWidth: '200px' }}>{eachData.email}</td>
                      <td>{eachData.mobile}</td>
                      <td className="text-break" style={{ maxWidth: '150px' }}>{eachData.password}</td>
                      <td>
                        <div className="d-flex flex-sm-row flex-column justify-content-center gap-2">
                          <button
                            className="btn btn-primary btn-sm"
                            onClick={() => handleUpdate(eachData._id)}
                          >
                            <i className="fa-solid fa-pencil"></i>
                          </button>
                          <button
                            className="btn btn-danger btn-sm"
                            onClick={() => handleDelete(eachData._id)}
                          >
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

export default Employees