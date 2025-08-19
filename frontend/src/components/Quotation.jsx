
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Quotation() {
  const [showModal, setShowModal] = useState(false);
  const [selectedQuotation, setSelectedQuotation] = useState(null);

  const [quotationData, setQuotationData] = useState([]);

  function loadData() {
    axios.get(process.env.REACT_APP_BASEURL + "/quotationDetails")
      .then((res) => {
        console.log(res.data);
        // If your API directly returns an array, use res.data
        // If it wraps in { data: [...] }, use res.data.data
        setQuotationData(res.data.data || res.data || []);
      })
      .catch((err) => {
        console.error("Error loading quotations:", err);
        setQuotationData([]); // safe fallback
      });

  };

  useEffect(() => {
    loadData()
  }, [])

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
    buttons.forEach((btn) => (btn.style.display = "none"));

    window.print();

    // Show them again after printing
    buttons.forEach((btn) => (btn.style.display = ""));
  };

  return (
    <>
      <main id="main" className="main">
        <div className="pagetitle">
          <h1>Quotation</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/">Home</a>
              </li>
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
                {
                  quotationData && quotationData.length > 0 ? (
                    quotationData.map((q, index) => (
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
                        <td>{q.quotationDate}</td>
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
                    ))
                  ) : (
                    <tr>
                      <td colSpan="5" className="text-center">No quotations found</td>
                    </tr>
                  )
                }
              </tbody>
            </table>
          </div>
        </div>

        {/* Modal */}
        {showModal && selectedQuotation && (
          <div
            className="modal fade show"
            style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}
          >
            <div className="modal-dialog modal-lg">
              <div
                className="modal-content"
                style={{ backgroundColor: "#fffdf5" }}
              >
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
                  <p>
                    <strong>Customer:</strong> {selectedQuotation.customer}
                  </p>
                  <p>
                    <strong>Date:</strong> {selectedQuotation.date}
                  </p>
                  <p>
                    <strong>Amount:</strong> {selectedQuotation.amount}
                  </p>
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
                      {selectedQuotation.items?.length > 0 ? (
                        selectedQuotation.items.map((item, idx) => (
                          <tr key={idx}>
                            <td>{item.product}</td>
                            <td>{item.qty}</td>
                            <td>{item.rate}</td>
                            <td>{item.total}</td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan="4">No products found</td>
                        </tr>
                      )}
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



