// import React from 'react'

// function Quotation() {
//   return (
//     <>
//       <main id="main" className="main">
//         <div className="pagetitle">
//           <h1>Quotation</h1>
//           <nav>
//             <ol className="breadcrumb">
//               <li className="breadcrumb-item"><a href="#">Home</a></li>
//               <li className="breadcrumb-item active">Quotation</li>
//             </ol>
//           </nav>
//         </div>

//         <div className="container mt-4">
//           <div className="card p-4 shadow-lg border-0">

//             {/* Quotation Header */}
//             <div className="row mb-4">
//               <div className="col-md-4">
//                 <label className="form-label fw-bold">Quotation Number <span className="text-danger">*</span></label>
//                 <input type="text" className="form-control shadow-sm" placeholder="Enter Quotation Number" />
//               </div>
//               <div className="col-md-4">
//                 <label className="form-label fw-bold">Date <span className="text-danger">*</span></label>
//                 <input type="date" className="form-control shadow-sm" />
//               </div>
//               <div className="col-md-4">
//                 <label className="form-label fw-bold">Select Customer <span className="text-danger">*</span></label>
//                 <select className="form-select shadow-sm">
//                   <option selected disabled>Customer Name</option>
//                   <option>Customer A</option>
//                   <option>Customer B</option>
//                 </select>
//               </div>
//             </div>

//             {/* Product Table */}
//             <div className="table-responsive">
//               <table className="table table-bordered text-center align-middle">
//                 <thead className="table-secondary text-dark">
//                   <tr>
//                     <th>No</th>
//                     <th>Product & Description</th>
//                     <th>Quantity</th>
//                     <th>Rate</th>
//                     <th>Total</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   <tr>
//                     <td>1</td>
//                     <td>
//                       <input type="text" className="form-control mb-1" placeholder="Product" />
//                       <input type="text" className="form-control" placeholder="Description" />
//                     </td>
//                     <td><input type="number" className="form-control" /></td>
//                     <td><input type="number" className="form-control" value="200" readOnly /></td>
//                     <td><input type="number" className="form-control" value="600" readOnly /></td>
//                   </tr>
//                 </tbody>
//               </table>
//             </div>

//             {/* Add Row Button */}
//             <div className="mb-4 text-center">
//               <button className="btn btn-primary btn-sm px-4 shadow-sm">
//                 <i className="bi bi-plus me-1"></i>
//                 Add Row
//               </button>
//             </div>

//             {/* Two Card Layout */}
//             <div className="row">
//               {/* Terms & Conditions */}
//               <div className="col-md-6">
//                 <div className="border rounded p-3 h-100 bg-light">
//                   <h6 className="fw-bold mb-3 text-center">Terms & Conditions</h6>
//                   <hr />
//                   <ol className="mb-0 ps-3 small text-dark fw-normal">
//                     <li className="mb-2">Payment to be made within 7 days.</li>
//                     <li className="mb-2">Warranty as per manufacturer.</li>
//                     <li className="mb-2">Goods once sold will not be taken back.</li>
//                     <li className="mb-2">Prices are exclusive of GST.</li>
//                     <li className="mb-2">Delivery in 5–7 working days.</li>
//                   </ol>
//                 </div>
//               </div>


//               {/* Quotation Summary */}
//               <div className="col-md-6 mt-3 mt-md-0">
//                 <div className="border rounded p-3 h-100 bg-light  d-flex flex-column justify-content-between">
//                   <div>
//                     <h6 className="fw-bold mb-3 text-center">Quotation Summary</h6>
//                     <hr />

//                     <div className="d-flex justify-content-between align-items-center mb-2">
//                       <span>Subtotal:</span>
//                       <span className="fw-semibold">₹ 600.00</span>
//                     </div>

//                     <div className="d-flex justify-content-between align-items-center mb-2">
//                       <span>Discount:</span>
//                       <div className="d-flex align-items-center w-50 justify-content-end">
//                         <input type="number" className="form-control form-control-sm w-50 me-2" />
//                         <span className="fw-semibold">₹ 200.00</span>
//                       </div>
//                     </div>

//                     <div className="d-flex justify-content-between align-items-center mb-2">
//                       <span>Total:</span>
//                       <span className="fw-semibold">₹ 400.00</span>
//                     </div>

//                     <div className="d-flex justify-content-between align-items-center mb-2">
//                       <span>GST (18%):</span>
//                       <span className="fw-semibold">₹ 72.00</span>
//                     </div>

//                     <hr />
//                   </div>

//                   <div className="d-flex justify-content-between align-items-center fw-bold fs-5">
//                     <span>Bill Amount:</span>
//                     <span>₹ 472.00</span>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Action Buttons */}
//             <div className="text-end mt-4">
//               <div class="d-flex justify-content-end">
//                 <button type="submit" class="btn btn-success me-2">Save</button>
//                 <button type="reset" class="btn btn-danger">Cancel</button>
//               </div>
//             </div>

//           </div>
//         </div>


//       </main>
//     </>
//   )
// }

// export default Quotation


import React, { useState } from 'react';

function Quotation() {
  const [rows, setRows] = useState([
    { product: '', description: '', quantity: '0', rate: '0', total: '0' }
  ]);

  const handleAddRow = () => {
    setRows([
      ...rows,
      { product: '', description: '', quantity: 0, rate: 0, total: 0 }
    ]);
  };

  const handleDeleteRow = (indexToDelete) => {
    const updatedRows = rows.filter((_, i) => i !== indexToDelete);
    setRows(updatedRows);
  };

  return (
    <>
      <main id="main" className="main">
        <div className="pagetitle">
          <h1>Quotation</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="/">Home</a></li>
              <li className="breadcrumb-item active">Quotation</li>
            </ol>
          </nav>
        </div>

        <div className="container mt-4">
          <div className="card p-4 shadow-lg border-0">

            {/* Quotation Header */}
            <div className="row mb-4">
              <div className="col-md-4">
                <label className="form-label fw-bold">Quotation Number <span className="text-danger">*</span></label>
                <input type="text" className="form-control shadow-sm" placeholder="Enter Quotation Number" />
              </div>
              <div className="col-md-4">
                <label className="form-label fw-bold">Date <span className="text-danger">*</span></label>
                <input type="date" className="form-control shadow-sm" />
              </div>
              <div className="col-md-4">
                <label className="form-label fw-bold">Select Customer <span className="text-danger">*</span></label>
                <select className="form-select shadow-sm">
                  <option selected disabled>Customer Name</option>
                  <option>Customer A</option>
                  <option>Customer B</option>
                </select>
              </div>
            </div>

            {/* Product Table */}
            <div className="table-responsive">
              <table className="table table-bordered text-center align-middle">
                <thead className="table-secondary text-dark">
                  <tr>
                    <th>No</th>
                    <th>Product & Description</th>
                    <th>Quantity</th>
                    <th>Rate</th>
                    <th>Total</th>
                    {/* <th>Action</th> */}
                  </tr>
                </thead>
                {/* <tbody>
                  {rows.map((row, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>
                        <input type="text" className="form-control mb-1" placeholder="Product" />
                        <input type="text" className="form-control" placeholder="Description" />
                      </td>
                      <td>
                        <input type="number" className="form-control" value={row.quantity} />
                      </td>
                      <td>
                        <input type="number" className="form-control" value={row.rate}  />
                      </td>
                      <td>
                        <input type="number" className="form-control" value={row.total} readOnly />
                      </td>
                    </tr>
                  ))}
                </tbody> */}
                <tbody>
                  {rows.map((row, index) => (
                    <tr key={index}>
                      <td>{index + 1}
                        <td>
                          <button
                            className="text-danger fw-bold mb-2 "
                            onClick={() => handleDeleteRow(index)} // 👈 Delete handler
                          >
                            x
                          </button>
                        </td>
                      </td>
                      <td>
                        <input type="text" className="form-control mb-1" placeholder="Product" />
                        <input type="text" className="form-control" placeholder="Description" />
                      </td>
                      <td>
                        <input type="number" className="form-control" value={row.quantity} />
                      </td>
                      <td>
                        <input type="number" className="form-control" value={row.rate} />
                      </td>
                      <td>
                        <input type="number" className="form-control" value={row.total} readOnly />
                      </td>
                      {/* <td>
                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() => handleDeleteRow(index)} // 👈 Delete handler
                        >
                          <i className="bi bi-trash"></i>
                        </button>
                      </td> */}
                    </tr>
                  ))}
                </tbody>

              </table>
            </div>

            {/* Add Row Button */}
            <div className="mb-4 text-center">
              <button onClick={handleAddRow} className="btn btn-primary btn-sm px-4 shadow-sm">
                <i className="bi bi-plus me-1"></i>
                Add Row
              </button>
            </div>

            {/* Two Card Layout */}
            <div className="row">
              {/* Terms & Conditions */}
              <div className="col-md-6">
                <div className="border rounded p-3 h-100 bg-light">
                  <h6 className="fw-bold mb-3 text-center">Terms & Conditions</h6>
                  <hr />
                  <ol className="mb-0 ps-3 small text-dark fw-normal">
                    <li className="mb-2">Payment to be made within 7 days.</li>
                    <li className="mb-2">Warranty as per manufacturer.</li>
                    <li className="mb-2">Goods once sold will not be taken back.</li>
                    <li className="mb-2">Prices are exclusive of GST.</li>
                    <li className="mb-2">Delivery in 5–7 working days.</li>
                  </ol>
                </div>
              </div>

              {/* Quotation Summary */}
              <div className="col-md-6 mt-3 mt-md-0">
                <div className="border rounded p-3 h-100 bg-light d-flex flex-column justify-content-between">
                  <div>
                    <h6 className="fw-bold mb-3 text-center">Quotation Summary</h6>
                    <hr />
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span>Subtotal:</span>
                      <span className="fw-semibold">₹ 600.00</span>
                    </div>
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span>Discount:</span>
                      <div className="d-flex align-items-center w-50 justify-content-end">
                        <input type="number" className="form-control form-control-sm w-50 me-2" />
                        <span className="fw-semibold">₹ 200.00</span>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span>Total:</span>
                      <span className="fw-semibold">₹ 400.00</span>
                    </div>
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span>GST (18%):</span>
                      <span className="fw-semibold">₹ 72.00</span>
                    </div>
                    <hr />
                  </div>
                  <div className="d-flex justify-content-between align-items-center fw-bold fs-5">
                    <span>Bill Amount:</span>
                    <span>₹ 472.00</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="text-end mt-4">
              <div className="d-flex justify-content-end">
                <button type="submit" className="btn btn-success me-2">Save</button>
                <button type="reset" className="btn btn-danger">Cancel</button>
              </div>
            </div>
          </div>
        </div>



        {/* Quotation List Table */}
        <div className="container mt-5">
          <h5 className="fw-bold mb-3">All Quotations</h5>
          <div className="table-responsive">
            <table className="table table-bordered text-center align-middle shadow-sm">
              <thead className="table-secondary">
                <tr>
                  <th>No</th>
                  <th>Date</th>
                  <th>Customer Name</th>
                  <th>Quotation No</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { date: "2025-08-08", customer: "Customer A", quotationNo: "QTN001" },
                  { date: "2025-08-09", customer: "Customer B", quotationNo: "QTN002" }
                ].map((q, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{q.date}</td>
                    <td>{q.customer}</td>
                    <td>{q.quotationNo}</td>
                    <td>
                      <div className="d-flex flex-wrap justify-content-center gap-2">
                        <button className="btn btn-primary btn-sm">
                          <i className="fa-solid fa-pencil"></i> <span className="d-none d-md-inline"></span>
                        </button>
                        <button className="btn btn-danger btn-sm">
                          <i className="fa-solid fa-trash"></i> <span className="d-none d-md-inline"></span>
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
  );
}

export default Quotation;
