import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Swal from 'sweetalert2';

function Customers() {


  //to get data
  const [id, setId] = useState(null);

  const [customerData, setCustomerData] = useState([]);

  function loadData() {
    //console.log(process.env.REACT_APP_BASEURL  + "/customers");
    axios.get(process.env.REACT_APP_BASEURL + "/customers")
      .then((res) => {
        console.log(res.data.data);
        setCustomerData(res.data.data);
      })
  };

  useEffect(() => {
    loadData()
  }, [])


  //to post data
  const [customer, setCustomer] = useState({
    name: "",
    address: "",
    email: "",
    mobile: "",
    altmobile: ""
  });

  // Handle Input Change
  const handleChangeCustomerData = (e) => {
    //console.log(e.target.value)
    setCustomer({ ...customer, [e.target.name]: e.target.value });
  };


  // Handle Form Submission
  const handleSubmitCustomerData = async (e) => {
    e.preventDefault();

    //console.log(customer);
    // console.log(process.env.REACT_APP_BASEURL);
    // axios.post("http://localhost:8081/customers", customer)
    //   .then((res) => {
    //     console.log(res.data.data);
    //   })
    if (!id) {
      try {
        const Customer = await axios.post(process.env.REACT_APP_BASEURL + "/customers", customer);
        alert("Customer added successfully!");
        //console.log(Customer);
        setCustomer({ name: "", address: "", email: "", mobile: "", altmobile: "" }); // Clear form
      } catch (error) {
        console.error("Error adding Customer:", error);
      }
      loadData()
    }
    else {
      //alert("hii")
      try {
        await axios.put(process.env.REACT_APP_BASEURL + "/customers/" + id, customer);
        alert("Customer updated successfully!");
        setId(null); // Reset ID after updating
        setCustomer({ name: "", address: "", email: "", mobile: "", altmobile: "" }); // Clear form
      } catch (error) {
        console.error("Error updating Customer:", error);
      }
    }
    loadData(); // Refresh employee list after operation
  }


  //HandleReset
  const handleReset = () => {
    setCustomer({ name: "", address: "", email: "", mobile: "", altmobile: "" });
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
        axios.delete(process.env.REACT_APP_BASEURL + "/customers/" + id)
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
    axios.get(process.env.REACT_APP_BASEURL + "/customers/" + id)
      .then((res) => {
        console.log(res.data.data);

        // Populate the form fields with fetched customer data
        setCustomer({
          name: res.data.data.name,
          address: res.data.data.address,
          email: res.data.data.email,
          mobile: res.data.data.mobile,
          altmobile: res.data.data.altmobile
        });

        setId(id); // Store the ID to switch to "update mode"
      })
      .catch((err) => {
        console.error("Error fetching customer data:", err);
      });

  };

  return (
    <>
      <main id="main" class="main">
        <div class="pagetitle">
          <h1>Customers</h1>
          <nav>
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><a href="/">Home</a></li>
              <li class="breadcrumb-item"><a>Forms</a></li>
              <li class="breadcrumb-item active">Customers</li>
            </ol>
          </nav>
        </div>

        {/*Customer Form */}
        <div class="container mt-4">
          <div class="card p-4">
            <form onSubmit={handleSubmitCustomerData}>
              <div class="row mb-3">
                <div class="col-md-6">
                  <label class="form-label fw-bold">Name <span class="text-danger">*</span></label>
                  <input type="text" onChange={handleChangeCustomerData} value={customer.name} class="form-control" name="name" placeholder="Enter name" required />
                </div>
                <div class="col-md-6">
                  <label class="form-label fw-bold">Address <span class="text-danger">*</span></label>
                  <input type="text" onChange={handleChangeCustomerData} value={customer.address} class="form-control" name="address" placeholder="Enter address" required />
                </div>
              </div>
              <div class="row mb-3">
                <div class="col-md-4">
                  <label class="form-label fw-bold">Email <span class="text-danger">*</span></label>
                  <input type="text" onChange={handleChangeCustomerData} value={customer.email} class="form-control" name="email" placeholder="Enter email" required />
                </div>
                <div class="col-md-4">
                  <label class="form-label fw-bold">Mobile <span class="text-danger">*</span></label>
                  <input type="text" onChange={handleChangeCustomerData} value={customer.mobile} class="form-control" name="mobile" placeholder="Enter mobile number" required />
                </div>
                <div class="col-md-4">
                  <label class="form-label fw-bold">Alternate Mobile</label>
                  <input type="text" onChange={handleChangeCustomerData} value={customer.altmobile} class="form-control" name="altmobile" placeholder="Enter alternate mobile" />
                </div>
              </div>
              <div class="d-flex justify-content-end">
                <button type="submit" class="btn btn-success me-2">Save</button>
                <button type="reset" class="btn btn-danger" onClick={handleReset}>Cancel</button>
              </div>
            </form>
          </div>
        </div>

        {/* Customer Table */}
        <div className="container mt-5">
          <h5 className="fw-bold mb-3">Customer Details</h5>
          <div className="table-responsive">
            <table className="table table-bordered text-center shadow">
              <thead className="table-secondary">
                <tr>
                  <th className="py-3">No</th>
                  <th className="py-3">Name</th>
                  <th className="py-3">Address</th>
                  <th className="py-3">Email</th>
                  <th className="py-3">Mobile</th>
                  <th className="py-3">Alternate Mobile</th>
                  <th className="py-3">Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  customerData.map((eachData, index) => (
                    <tr key={eachData._id}>
                      <td>{index + 1}</td>
                      <td>{eachData.name}</td>
                      <td className="text-break" style={{ maxWidth: '200px' }}>{eachData.address}</td>
                      <td className="text-break" style={{ maxWidth: '200px' }}>{eachData.email}</td>
                      <td>{eachData.mobile}</td>
                      <td>{eachData.altmobile}</td>
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

export default Customers

