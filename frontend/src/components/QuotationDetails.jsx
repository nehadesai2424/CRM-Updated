// import axios from "axios";
// import React, { useState, useEffect } from "react";

// function QuotationDetails() {
//   const [rows, setRows] = useState([
//     { product: "", description: "", quantity: 0, rate: 0, total: 0 },
//   ]);
//   const [discount, setDiscount] = useState(0);
//   const [summary, setSummary] = useState({
//     subtotal: 0,
//     total: 0,
//     gstAmount: 0,
//     billAmount: 0,
//   });

//   // 🔹 Handle input change in table
//   const handleRowChange = (index, field, value) => {
//     const updatedRows = [...rows];
//     updatedRows[index][field] = value;

//     if (field === "quantity" || field === "rate") {
//       const qty = parseFloat(updatedRows[index].quantity) || 0;
//       const rate = parseFloat(updatedRows[index].rate) || 0;
//       updatedRows[index].total = qty * rate;
//     }

//     setRows(updatedRows);
//   };

//   // 🔹 Add new row
//   const handleAddRow = () => {
//     setRows([
//       ...rows,
//       { product: "", description: "", quantity: 0, rate: 0, total: 0 },
//     ]);
//   };

//   // 🔹 Delete row
//   const handleDeleteRow = (indexToDelete) => {
//     const updatedRows = rows.filter((_, i) => i !== indexToDelete);
//     setRows(updatedRows);
//   };

//   // 🔹 Auto calculate summary whenever rows or discount change
//   useEffect(() => {
//     const subtotal = rows.reduce((sum, row) => sum + (parseFloat(row.total) || 0), 0);
//     const total = subtotal - discount;
//     const gstAmount = total * 0.18; // 18% GST
//     const billAmount = total + gstAmount;

//     setSummary({ subtotal, total, gstAmount, billAmount });
//   }, [rows, discount]);

//   // 🔹 Handle Save
//   const handleSave = () => {
//     const quotationData = {
//       quotationDate: new Date().toISOString().split("T")[0],
//       quotationNo: "AUTO_QTN_001",
//       customerId: "64f8b0c8c5d123456789abcd", // you can make this dynamic later
//       items: rows,
//       subtotal: summary.subtotal,
//       discount: discount,
//       total: summary.total,
//       gstAmount: summary.gstAmount,
//       billAmount: summary.billAmount,
//     };

//     console.log("Posting Data:", quotationData);

//     // Example: Post to backend
//     // fetch("http://localhost:5000/api/quotationDetails", {
//     //   method: "POST",
//     //   headers: { "Content-Type": "application/json" },
//     //   body: JSON.stringify(quotationData),
//     // });
//   };


//   //-----------------------------------CRUD-----------------------------------------------------------------------
//   //to get customerData
//   const [customer, setCustomer] = useState([]);
//   useEffect(() => {
//     axios.get(process.env.REACT_APP_BASEURL + "/customers")
//       .then((res) => {
//         // console.log(res.data.data);
//         setCustomer(res.data.data);
//       })
//   }, [])


//   return (
//     <main id="main" className="main">
//       <div className="pagetitle">
//         <h1>Quotation</h1>
//         <nav>
//           <ol className="breadcrumb">
//             <li className="breadcrumb-item"><a href="/">Home</a></li>
//             <li className="breadcrumb-item active">Quotation Details</li>
//           </ol>
//         </nav>
//       </div>

//       <div className="container mt-4">
//         <div className="card p-4 shadow-lg border-0">

//           {/* Quotation Header */}
//           <div className="row mb-4">
//             <div className="col-md-4">
//               <label className="form-label fw-bold">Quotation Number <span className="text-danger">*</span></label>
//               <input type="text" className="form-control shadow-sm" placeholder="Enter Quotation Number" />
//             </div> <div className="col-md-4">
//               <label className="form-label fw-bold">Date <span className="text-danger">*</span></label>
//               <input type="date" className="form-control shadow-sm" />
//             </div>
//             <div className="col-md-4">
//               <label className="form-label fw-bold">Select Customer <span className="text-danger">*</span></label>
//               <select className="form-select shadow-sm">
//                 <option value={""}>Select Customer</option>
//                 {
//                   customer.map((customer) => {
//                     //console.log(customerData);

//                     return (
//                       <option value={customer._id}> {customer.name} </option>
//                     )
//                   })
//                 }
//               </select>
//             </div>
//           </div>

//           {/* Product Table */}
//           <div className="table-responsive">
//             <table className="table table-bordered text-center align-middle">
//               <thead className="table-secondary text-dark">
//                 <tr>
//                   <th>No</th>
//                   <th>Product & Description</th>
//                   <th>Quantity</th>
//                   <th>Rate</th>
//                   <th>Total</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {rows.map((row, index) => (
//                   <tr key={index}>
//                     <td>
//                       {index + 1}
//                       <div className="mt-1">
//                         <button
//                           className="btn btn-sm btn-danger"
//                           onClick={() => handleDeleteRow(index)}
//                           disabled={rows.length === 1}
//                         >
//                           x
//                         </button>
//                       </div>
//                     </td>
//                     <td>
//                       <input
//                         type="text"
//                         className="form-control mb-1"
//                         placeholder="Product"
//                         value={row.product}
//                         onChange={(e) =>
//                           handleRowChange(index, "product", e.target.value)
//                         }
//                       />
//                       <input
//                         type="text"
//                         className="form-control"
//                         placeholder="Description"
//                         value={row.description}
//                         onChange={(e) =>
//                           handleRowChange(index, "description", e.target.value)
//                         }
//                       />
//                     </td>
//                     <td>
//                       <input
//                         type="number"
//                         className="form-control"
//                         value={row.quantity}
//                         onChange={(e) =>
//                           handleRowChange(index, "quantity", e.target.value)
//                         }
//                       />
//                     </td>
//                     <td>
//                       <input
//                         type="number"
//                         className="form-control"
//                         value={row.rate}
//                         onChange={(e) =>
//                           handleRowChange(index, "rate", e.target.value)
//                         }
//                       />
//                     </td>
//                     <td>
//                       <input
//                         type="number"
//                         className="form-control"
//                         value={row.total}
//                         readOnly
//                       />
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>

//           {/* Add Row */}
//           <div className="mb-4 text-center">
//             <button onClick={handleAddRow} className="btn btn-primary px-4 shadow-sm">
//               <i class="fa-solid fa-plus"></i> Add Row
//             </button>
//           </div>

//           {/* Two Card Layout */}
//           <div className="row">
//             {/* Terms & Conditions */}
//             <div className="col-md-6">
//               <div className="border rounded p-3 h-100 bg-light">
//                 <h6 className="fw-bold mb-3 text-center">Terms & Conditions</h6>
//                 <hr /> <ol className="mb-0 ps-3 small text-dark fw-normal">
//                   <li className="mb-2">Payment to be made within 7 days.</li>
//                   <li className="mb-2">Warranty as per manufacturer.</li>
//                   <li className="mb-2">Goods once sold will not be taken back.</li>
//                   <li className="mb-2">Prices are exclusive of GST.</li>
//                   <li className="mb-2">Delivery in 5–7 working days.</li>
//                 </ol>
//               </div>
//             </div>

//             {/* Quotation Summary */}

//             <div className="col-md-6 mt-3 mt-md-0">
//               <div className="border rounded p-3 h-100 bg-light d-flex flex-column justify-content-between">
//                 <div>
//                   <h6 className="fw-bold mb-3 text-center">Quotation Summary</h6>
//                   <hr />
//                   <div className="d-flex justify-content-between mb-2">
//                     <span>Subtotal:</span>
//                     <span>₹ {summary.subtotal.toFixed(2)}</span>
//                   </div>
//                   <div className="d-flex justify-content-between mb-2">
//                     <span>Discount:</span>
//                     <div className="d-flex align-items-center">
//                       <input
//                         type="number"
//                         className="form-control form-control-sm me-2"
//                         style={{ width: "80px" }}
//                         value={discount}
//                         //onChange={(e) => setDiscount(Number(e.target.value))}
//                         onChange={(e) => setDiscount(parseFloat(e.target.value) || 0)}
//                       />
//                       ₹ {discount.toFixed(2)}
//                     </div>
//                     {/* <input
//                       type="number"
//                       className="form-control form-control-sm w-50 text-end"
//                       value={discount}
//                       onChange={(e) => setDiscount(parseFloat(e.target.value) || 0)}
//                     /> */}
//                   </div>
//                   <div className="d-flex justify-content-between mb-2">
//                     <span>Total:</span>
//                     <span>₹ {summary.total.toFixed(2)}</span>
//                   </div>
//                   <div className="d-flex justify-content-between mb-2">
//                     <span>GST (18%):</span>
//                     <span>₹ {summary.gstAmount.toFixed(2)}</span>
//                   </div>
//                   <hr />
//                 </div>
//                 <div className="d-flex justify-content-between fw-bold fs-5">
//                   <span>Bill Amount:</span>
//                   <span>₹ {summary.billAmount.toFixed(2)}</span>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Save & Cancel */}
//           <div className="text-end mt-4">
//             <button className="btn btn-success me-2" onClick={handleSave}>
//               Save
//             </button>
//             <button className="btn btn-danger">Cancel</button>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// }

// export default QuotationDetails;




import axios from "axios";
import React, { useState, useEffect } from "react";

function QuotationDetails() {


  const [rows, setRows] = useState([
    { product: "", description: "", quantity: 0, rate: 0, total: 0 },
  ]);
  const [discount, setDiscount] = useState(0);
  const [summary, setSummary] = useState({
    subtotal: 0,
    total: 0,
    gstAmount: 0,
    billAmount: 0,
  });


  const [quotationNo, setQuotationNo] = useState("");
  const [quotationDate, setQuotationDate] = useState("");
  const [customerId, setCustomerId] = useState("");

  // 🔹 Handle input change in table
  const handleRowChange = (index, field, value) => {
    const updatedRows = [...rows];
    updatedRows[index][field] = value;

    if (field === "quantity" || field === "rate") {
      const qty = parseFloat(updatedRows[index].quantity) || 0;
      const rate = parseFloat(updatedRows[index].rate) || 0;
      updatedRows[index].total = qty * rate;
    }

    setRows(updatedRows);
  };

  // 🔹 Add new row
  const handleAddRow = () => {
    setRows([
      ...rows,
      { product: "", description: "", quantity: 0, rate: 0, total: 0 },
    ]);
  };

  // 🔹 Delete row
  const handleDeleteRow = (indexToDelete) => {
    const updatedRows = rows.filter((_, i) => i !== indexToDelete);
    setRows(updatedRows);
  };

  // 🔹 Auto calculate summary whenever rows or discount change
  useEffect(() => {
    const subtotal = rows.reduce((sum, row) => sum + (parseFloat(row.total) || 0), 0);
    const total = subtotal - discount;
    const gstAmount = total * 0.18; // 18% GST
    const billAmount = total + gstAmount;

    setSummary({ subtotal, total, gstAmount, billAmount });
  }, [rows, discount]);

  // 🔹 Handle Save (POST to backend)
  const handleSave = async () => {
    const quotationData = {
      quotationNo: quotationNo,
      quotationDate: quotationDate,
      customerId: customerId,
      items: rows,
      subtotal: summary.subtotal,
      discount: discount,
      total: summary.total,
      gstAmount: summary.gstAmount,
      billAmount: summary.billAmount,
    };

    try {
      const res = await axios.post(process.env.REACT_APP_BASEURL + "/quotationDetails", quotationData);
      alert("Quotation saved successfully!");
      console.log("Response:", res.data);

      // Reset form
      setQuotationNo("");
      setQuotationDate("");
      setCustomerId("");
      setRows([{ product: "", description: "", quantity: 0, rate: 0, total: 0 }]);
      setDiscount(0);
    } catch (error) {
      console.error("Error saving quotation:", error);
      alert("Failed to save quotation");
    }
  };

  //to get customerData
  const [customer, setCustomer] = useState([]);
  useEffect(() => {
    axios.get(process.env.REACT_APP_BASEURL + "/customers")
      .then((res) => {
        setCustomer(res.data.data);
      })
  }, [])


  return (
    <main id="main" className="main">
      <div className="pagetitle">
        <h1>Quotation</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="/">Home</a></li>
            <li className="breadcrumb-item active">Quotation Details</li>
          </ol>
        </nav>
      </div>

      <div className="container mt-4">
        <div className="card p-4 shadow-lg border-0">

          {/* Quotation Header */}
          <div className="row mb-4">
            <div className="col-md-4">
              <label className="form-label fw-bold">Quotation Number <span className="text-danger">*</span></label>
              <input
                type="text"
                className="form-control shadow-sm"
                placeholder="Enter Quotation Number"
                value={quotationNo}
                onChange={(e) => setQuotationNo(e.target.value)}
              />
            </div>
            <div className="col-md-4">
              <label className="form-label fw-bold">Date <span className="text-danger">*</span></label>
              <input
                type="date"
                className="form-control shadow-sm"
                value={quotationDate}
                onChange={(e) => setQuotationDate(e.target.value)}
              />
            </div>
            <div className="col-md-4">
              <label className="form-label fw-bold">Select Customer <span className="text-danger">*</span></label>
              <select
                className="form-select shadow-sm"
                value={customerId}
                onChange={(e) => setCustomerId(e.target.value)}
              >
                <option value={""}>Select Customer</option>
                {
                  customer.map((cust) => (
                    <option key={cust._id} value={cust._id}>{cust.name}</option>
                  ))
                }
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
                </tr>
              </thead>
              <tbody>
                {rows.map((row, index) => (
                  <tr key={index}>
                    <td>
                      {index + 1}
                      <div className="mt-1">
                        <button
                          className="btn btn-sm btn-danger"
                          onClick={() => handleDeleteRow(index)}
                          disabled={rows.length === 1}
                        >
                          x
                        </button>
                      </div>
                    </td>
                    <td>
                      <input
                        type="text"
                        className="form-control mb-1"
                        placeholder="Product"
                        value={row.product}
                        onChange={(e) =>
                          handleRowChange(index, "product", e.target.value)
                        }
                      />
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Description"
                        value={row.description}
                        onChange={(e) =>
                          handleRowChange(index, "description", e.target.value)
                        }
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        className="form-control"
                        value={row.quantity}
                        onChange={(e) =>
                          handleRowChange(index, "quantity", e.target.value)
                        }
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        className="form-control"
                        value={row.rate}
                        onChange={(e) =>
                          handleRowChange(index, "rate", e.target.value)
                        }
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        className="form-control"
                        value={row.total}
                        readOnly
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Add Row */}
          <div className="mb-4 text-center">
            <button onClick={handleAddRow} className="btn btn-primary px-4 shadow-sm">
              <i className="fa-solid fa-plus"></i> Add Row
            </button>
          </div>

          {/* Terms & Conditions + Quotation Summary */}
          <div className="row">
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

            <div className="col-md-6 mt-3 mt-md-0">
              <div className="border rounded p-3 h-100 bg-light d-flex flex-column justify-content-between">
                <div>
                  <h6 className="fw-bold mb-3 text-center">Quotation Summary</h6>
                  <hr />
                  <div className="d-flex justify-content-between mb-2">
                    <span>Subtotal:</span>
                    <span>₹ {summary.subtotal.toFixed(2)}</span>
                  </div>
                  <div className="d-flex justify-content-between mb-2">
                    <span>Discount:</span>
                    <div className="d-flex align-items-center">
                      <input
                        type="number"
                        className="form-control form-control-sm me-2"
                        style={{ width: "80px" }}
                        value={discount}
                        onChange={(e) => setDiscount(parseFloat(e.target.value) || 0)}
                      />
                      ₹ {discount.toFixed(2)}
                    </div>
                  </div>
                  <div className="d-flex justify-content-between mb-2">
                    <span>Total:</span>
                    <span>₹ {summary.total.toFixed(2)}</span>
                  </div>
                  <div className="d-flex justify-content-between mb-2">
                    <span>GST (18%):</span>
                    <span>₹ {summary.gstAmount.toFixed(2)}</span>
                  </div>
                  <hr />
                </div>
                <div className="d-flex justify-content-between fw-bold fs-5">
                  <span>Bill Amount:</span>
                  <span>₹ {summary.billAmount.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Save & Cancel */}
          <div className="text-end mt-4">
            <button className="btn btn-success me-2" onClick={handleSave}>
              Save
            </button>
            <button className="btn btn-danger">Cancel</button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default QuotationDetails;

