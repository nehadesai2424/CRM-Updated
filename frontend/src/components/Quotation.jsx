// // import React from 'react'

// // function Quotation() {
// //   return (
// //     <>
// //       <main id="main" className="main">
// //         <div className="pagetitle">
// //           <h1>Quotation</h1>
// //           <nav>
// //             <ol className="breadcrumb">
// //               <li className="breadcrumb-item"><a href="#">Home</a></li>
// //               <li className="breadcrumb-item active">Quotation</li>
// //             </ol>
// //           </nav>
// //         </div>

// //         <div className="container mt-4">
// //           <div className="card p-4 shadow-lg border-0">

// //             {/* Quotation Header */}
// //             <div className="row mb-4">
// //               <div className="col-md-4">
// //                 <label className="form-label fw-bold">Quotation Number <span className="text-danger">*</span></label>
// //                 <input type="text" className="form-control shadow-sm" placeholder="Enter Quotation Number" />
// //               </div>
// //               <div className="col-md-4">
// //                 <label className="form-label fw-bold">Date <span className="text-danger">*</span></label>
// //                 <input type="date" className="form-control shadow-sm" />
// //               </div>
// //               <div className="col-md-4">
// //                 <label className="form-label fw-bold">Select Customer <span className="text-danger">*</span></label>
// //                 <select className="form-select shadow-sm">
// //                   <option selected disabled>Customer Name</option>
// //                   <option>Customer A</option>
// //                   <option>Customer B</option>
// //                 </select>
// //               </div>
// //             </div>

// //             {/* Product Table */}
// //             <div className="table-responsive">
// //               <table className="table table-bordered text-center align-middle">
// //                 <thead className="table-secondary text-dark">
// //                   <tr>
// //                     <th>No</th>
// //                     <th>Product & Description</th>
// //                     <th>Quantity</th>
// //                     <th>Rate</th>
// //                     <th>Total</th>
// //                   </tr>
// //                 </thead>
// //                 <tbody>
// //                   <tr>
// //                     <td>1</td>
// //                     <td>
// //                       <input type="text" className="form-control mb-1" placeholder="Product" />
// //                       <input type="text" className="form-control" placeholder="Description" />
// //                     </td>
// //                     <td><input type="number" className="form-control" /></td>
// //                     <td><input type="number" className="form-control" value="200" readOnly /></td>
// //                     <td><input type="number" className="form-control" value="600" readOnly /></td>
// //                   </tr>
// //                 </tbody>
// //               </table>
// //             </div>

// //             {/* Add Row Button */}
// //             <div className="mb-4 text-center">
// //               <button className="btn btn-primary btn-sm px-4 shadow-sm">
// //                 <i className="bi bi-plus me-1"></i>
// //                 Add Row
// //               </button>
// //             </div>

// //             {/* Two Card Layout */}
// //             <div className="row">
// //               {/* Terms & Conditions */}
// //               <div className="col-md-6">
// //                 <div className="border rounded p-3 h-100 bg-light">
// //                   <h6 className="fw-bold mb-3 text-center">Terms & Conditions</h6>
// //                   <hr />
// //                   <ol className="mb-0 ps-3 small text-dark fw-normal">
// //                     <li className="mb-2">Payment to be made within 7 days.</li>
// //                     <li className="mb-2">Warranty as per manufacturer.</li>
// //                     <li className="mb-2">Goods once sold will not be taken back.</li>
// //                     <li className="mb-2">Prices are exclusive of GST.</li>
// //                     <li className="mb-2">Delivery in 5–7 working days.</li>
// //                   </ol>
// //                 </div>
// //               </div>


// //               {/* Quotation Summary */}
// //               <div className="col-md-6 mt-3 mt-md-0">
// //                 <div className="border rounded p-3 h-100 bg-light  d-flex flex-column justify-content-between">
// //                   <div>
// //                     <h6 className="fw-bold mb-3 text-center">Quotation Summary</h6>
// //                     <hr />

// //                     <div className="d-flex justify-content-between align-items-center mb-2">
// //                       <span>Subtotal:</span>
// //                       <span className="fw-semibold">₹ 600.00</span>
// //                     </div>

// //                     <div className="d-flex justify-content-between align-items-center mb-2">
// //                       <span>Discount:</span>
// //                       <div className="d-flex align-items-center w-50 justify-content-end">
// //                         <input type="number" className="form-control form-control-sm w-50 me-2" />
// //                         <span className="fw-semibold">₹ 200.00</span>
// //                       </div>
// //                     </div>

// //                     <div className="d-flex justify-content-between align-items-center mb-2">
// //                       <span>Total:</span>
// //                       <span className="fw-semibold">₹ 400.00</span>
// //                     </div>

// //                     <div className="d-flex justify-content-between align-items-center mb-2">
// //                       <span>GST (18%):</span>
// //                       <span className="fw-semibold">₹ 72.00</span>
// //                     </div>

// //                     <hr />
// //                   </div>

// //                   <div className="d-flex justify-content-between align-items-center fw-bold fs-5">
// //                     <span>Bill Amount:</span>
// //                     <span>₹ 472.00</span>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>

// //             {/* Action Buttons */}
// //             <div className="text-end mt-4">
// //               <div class="d-flex justify-content-end">
// //                 <button type="submit" class="btn btn-success me-2">Save</button>
// //                 <button type="reset" class="btn btn-danger">Cancel</button>
// //               </div>
// //             </div>

// //           </div>
// //         </div>


// //       </main>
// //     </>
// //   )
// // }

// // export default Quotation


// import React, { useState } from 'react';

// function Quotation() {

//   return (
//     <>
//       <main id="main" className="main">
//         <div className="pagetitle">
//           <h1>Quotation</h1>
//           <nav>
//             <ol className="breadcrumb">
//               <li className="breadcrumb-item"><a href="/">Home</a></li>
//               <li className="breadcrumb-item active">Quotation</li>
//             </ol>
//           </nav>
//         </div>


//         {/* Quotation List Table */}
//         <div className="container mt-4">
//           <div className="table-responsive">
//             <table className="table table-bordered text-center align-middle shadow-sm">
//               <thead className="table-secondary">
//                 <tr>
//                   <th>No</th>
//                   <th>Quotation No</th>
//                   <th>Customer Name</th>
//                   <th>Date</th>
//                   <th>Action</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {[
//                   { date: "2025-08-08", customer: "Customer A", quotationNo: "QTN001" },
//                   { date: "2025-08-09", customer: "Customer B", quotationNo: "QTN002" }
//                 ].map((q, index) => (
//                   <tr key={index}>
//                     <td>{index + 1}</td>
//                     <td>{q.quotationNo}</td>
//                     <td>{q.customer}</td>
//                     <td>{q.date}</td>
//                     <td>
//                       <div className="d-flex flex-wrap justify-content-center gap-2">
//                         <button className="btn btn-primary btn-sm">
//                           <i className="fa-solid fa-pencil"></i> <span className="d-none d-md-inline"></span>
//                         </button>
//                         <button className="btn btn-danger btn-sm">
//                           <i className="fa-solid fa-trash"></i> <span className="d-none d-md-inline"></span>
//                         </button>
//                       </div>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>

//       </main>
//     </>
//   );
// }

// export default Quotation;


import React, { useState } from 'react';

function Quotation() {
  const [showModal, setShowModal] = useState(false);
  const [selectedQuotation, setSelectedQuotation] = useState(null);

  const quotationList = [
    {
      date: "2025-08-08",
      customer: "Customer A",
      quotationNo: "QTN001",
      amount: "₹472.00",
      items: [{ product: "Product 1", qty: 2, rate: 200, total: 400 }]
    },
    {
      date: "2025-08-09",
      customer: "Customer B",
      quotationNo: "QTN002",
      amount: "₹550.00",
      items: [{ product: "Product 2", qty: 1, rate: 550, total: 550 }]
    }
  ];

  const handleOpenModal = (quotation) => {
    setSelectedQuotation(quotation);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedQuotation(null);
  };

  const handlePrint = () => {
    // Hide buttons before printing
    const buttons = document.querySelectorAll(".no-print");
    buttons.forEach(btn => btn.style.display = "none");

    window.print();

    // Show them again after printing
    buttons.forEach(btn => btn.style.display = "");
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

        {/* Quotation List Table */}
        <div className="container mt-4">
          <div className="table-responsive">
            <table className="table table-bordered text-center align-middle shadow-sm">
              <thead className="table-secondary">
                <tr>
                  <th>No</th>
                  <th>Quotation No</th>
                  <th>Customer Name</th>
                  <th>Date</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {quotationList.map((q, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>
                      <button
                        className="btn btn-link p-0 text-primary fw-semibold"
                        onClick={() => handleOpenModal(q)}
                        style={{ textDecoration: "none" }}
                      >
                        {q.quotationNo}
                      </button>
                    </td>
                    <td>{q.customer}</td>
                    <td>{q.date}</td>
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

        {/* Modal */}
        {showModal && selectedQuotation && (
          <div className="modal fade show" style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}>
            <div className="modal-dialog modal-lg">
              <div className="modal-content" style={{ backgroundColor: "#fffdf5" }}>

                <div className="modal-header justify-content-center position-relative">
                  <h5 className="modal-title text-center">
                    Invoice - {selectedQuotation.quotationNo}
                  </h5>
                  <button
                    type="button"
                    className="btn-close position-absolute end-0 me-3"
                    onClick={handleCloseModal}
                  ></button>
                </div>

                <div className="modal-body">
                  <p><strong>Customer:</strong> {selectedQuotation.customer}</p>
                  <p><strong>Date:</strong> {selectedQuotation.date}</p>
                  <p><strong>Amount:</strong> {selectedQuotation.amount}</p>
                  <hr />
                  <h6>Products</h6>
                  <table className="table table-bordered text-center">
                    <thead>
                      <tr>
                        <th>Product</th>
                        <th>Qty</th>
                        <th>Rate</th>
                        <th>Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {selectedQuotation.items.map((item, idx) => (
                        <tr key={idx}>
                          <td>{item.product}</td>
                          <td>{item.qty}</td>
                          <td>{item.rate}</td>
                          <td>{item.total}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="modal-footer no-print">
                  <button className="btn btn-primary" onClick={handlePrint}>
                    <i className="fa-solid fa-print me-1"></i> Print
                  </button>
                  <button className="btn btn-danger" onClick={handleCloseModal}>
                    Close
                  </button>
                </div>


              </div>
            </div>
          </div>

        )}
      </main>
    </>
  );
}

export default Quotation;


