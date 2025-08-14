import React, { useState } from 'react';

function AmcContracts() {
  const [showModal, setShowModal] = useState(false);
  const [selectedAmc, setSelectedAmc] = useState(null);

  const amcList = [
    {
      startDate: "2025-08-01",
      endDate: "2026-07-31",
      customer: "Customer A",
      amcNo: "AMC001",
      amount: "₹1,200.00",
      items: [
        { product: "Service Package A", qty: 1, rate: 1200, total: 1200 }
      ]
    },
    {
      startDate: "2025-09-01",
      endDate: "2026-08-31",
      customer: "Customer B",
      amcNo: "AMC002",
      amount: "₹2,000.00",
      items: [
        { product: "Service Package B", qty: 1, rate: 2000, total: 2000 }
      ]
    }
  ];

  const handleOpenModal = (amc) => {
    setSelectedAmc(amc);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedAmc(null);
  };

  const handlePrint = () => {
    const buttons = document.querySelectorAll(".no-print");
    buttons.forEach(btn => btn.style.display = "none");

    window.print();

    buttons.forEach(btn => btn.style.display = "");
  };

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
                {amcList.map((a, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>
                      <button
                        className="btn btn-link p-0 text-primary fw-semibold"
                        onClick={() => handleOpenModal(a)}
                        style={{ textDecoration: "none" }}
                      >
                        {a.amcNo}
                      </button>
                    </td>
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

        {/* Modal */}
        {showModal && selectedAmc && (
          <div
            className="modal fade show"
            style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}
          >
            <div className="modal-dialog modal-lg">
              <div className="modal-content" style={{ backgroundColor: "#fffdf5" }}>

                <div className="modal-header justify-content-center position-relative">
                  <h5 className="modal-title text-center">
                    AMC Invoice - {selectedAmc.amcNo}
                  </h5>
                  <button
                    type="button"
                    className="btn-close position-absolute end-0 me-3"
                    onClick={handleCloseModal}
                  ></button>
                </div>

                <div className="modal-body">
                  <p><strong>Customer:</strong> {selectedAmc.customer}</p>
                  <p><strong>Start Date:</strong> {selectedAmc.startDate}</p>
                  <p><strong>End Date:</strong> {selectedAmc.endDate}</p>
                  <p><strong>Amount:</strong> {selectedAmc.amount}</p>
                  <hr />
                  <h6>Services</h6>
                  <table className="table table-bordered text-center">
                    <thead>
                      <tr>
                        <th>Service</th>
                        <th>Qty</th>
                        <th>Rate</th>
                        <th>Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {selectedAmc.items.map((item, idx) => (
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

export default AmcContracts;



// import React, { useState, useRef } from 'react';

// function AmcContracts() {
//     const [selectedAmc, setSelectedAmc] = useState(null);
//     const printRef = useRef();

//     const amcData = [
//         { startDate: "2025-08-01", endDate: "2026-07-31", customer: "Customer A", amcNo: "AMC001" },
//         { startDate: "2025-09-01", endDate: "2026-08-31", customer: "Customer B", amcNo: "AMC002" }
//     ];

//     const handleOpenModal = (amc) => {
//         setSelectedAmc(amc);
//         const modal = new window.bootstrap.Modal(document.getElementById("invoiceModal"));
//         modal.show();
//     };

//     const handlePrint = () => {
//         const printContents = printRef.current.innerHTML;
//         const printWindow = window.open('', '', 'width=900,height=650');
//         printWindow.document.write(`
//             <html>
//                 <head>
//                     <title>Invoice</title>
//                     <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
//                 </head>
//                 <body class="bg-white">
//                     ${printContents}
//                 </body>
//             </html>
//         `);
//         printWindow.document.close();
//         printWindow.print();
//     };

//     return (
//         <>
//             <main id="main" className="main">
//                 <div className="pagetitle">
//                     <h1>AMC Contracts</h1>
//                     <nav>
//                         <ol className="breadcrumb">
//                             <li className="breadcrumb-item"><a href="/">Home</a></li>
//                             <li className="breadcrumb-item active">AMC Contracts</li>
//                         </ol>
//                     </nav>
//                 </div>

//                 <div className="container mt-4">
//                     <div className="table-responsive">
//                         <table className="table table-bordered text-center align-middle shadow-sm">
//                             <thead className="table-secondary">
//                                 <tr>
//                                     <th>No</th>
//                                     <th>AMC No</th>
//                                     <th>Customer Name</th>
//                                     <th>Start Date</th>
//                                     <th>End Date</th>
//                                     <th>Action</th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 {amcData.map((a, index) => (
//                                     <tr key={index}>
//                                         <td>{index + 1}</td>
//                                         <td>{a.amcNo}</td>
//                                         <td>{a.customer}</td>
//                                         <td>{a.startDate}</td>
//                                         <td>{a.endDate}</td>
//                                         <td>
//                                             <div className="d-flex flex-wrap justify-content-center gap-2">
//                                                 <button
//                                                     className="btn btn-success btn-sm"
//                                                     onClick={() => handleOpenModal(a)}
//                                                 >
//                                                     <i className="fa-solid fa-file-invoice"></i>
//                                                 </button>
//                                                 <button className="btn btn-primary btn-sm">
//                                                     <i className="fa-solid fa-pencil"></i>
//                                                 </button>
//                                                 <button className="btn btn-danger btn-sm">
//                                                     <i className="fa-solid fa-trash"></i>
//                                                 </button>
//                                             </div>
//                                         </td>
//                                     </tr>
//                                 ))}
//                             </tbody>
//                         </table>
//                     </div>
//                 </div>
//             </main>

//             {/* Invoice Modal */}
//             <div className="modal fade" id="invoiceModal" tabIndex="-1" aria-hidden="true">
//                 <div className="modal-dialog modal-lg">
//                     <div className="modal-content bg-white">
//                         <div className="modal-header justify-content-center">
//                             <h5 className="modal-title">AMC Invoice</h5>
//                         </div>
//                         <div className="modal-body" ref={printRef}>
//                             {selectedAmc && (
//                                 <>
//                                     <h4 className="text-center mb-3">AMC Invoice</h4>
//                                     <p><strong>AMC No:</strong> {selectedAmc.amcNo}</p>
//                                     <p><strong>Customer Name:</strong> {selectedAmc.customer}</p>
//                                     <p><strong>Start Date:</strong> {selectedAmc.startDate}</p>
//                                     <p><strong>End Date:</strong> {selectedAmc.endDate}</p>
//                                     <hr />
//                                     <p>This is a sample invoice layout. You can add full details here.</p>
//                                 </>
//                             )}
//                         </div>
//                         <div className="modal-footer">
//                             <button className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//                             <button className="btn btn-primary" onClick={handlePrint}>
//                                 <i className="fa-solid fa-print"></i> Print
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }

// export default AmcContracts;
