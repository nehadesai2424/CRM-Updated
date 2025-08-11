import React from 'react'

function AmcContracts() {
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
                    <div className="card p-4 shadow">
                        <form>
                            {/* Row 1 */}
                            <div className="row mb-3">
                                <div className="col-md-6">
                                    <label className="form-label fw-bold">Customer <span className="text-danger">*</span></label>
                                    <select className="form-select" name="customer" required>
                                        <option disabled selected>Select customer</option>
                                        <option>Customer A</option>
                                        <option>Customer B</option>
                                    </select>
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label fw-bold">AMC Date <span className="text-danger">*</span></label>
                                    <input type="date" className="form-control" name="amcDate" required />
                                </div>
                            </div>

                            {/* Row 2 */}
                            <div className="row mb-3">
                                <div className="col-md-4">
                                    <label className="form-label fw-bold">Subtotal <span className="text-danger">*</span></label>
                                    <div className="input-group">
                                        <span className="input-group-text">₹</span>
                                        <input type="number" className="form-control" name="subtotal" placeholder="0.00" required />
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <label className="form-label fw-bold">Discount</label>
                                    <div className="input-group">
                                        <span className="input-group-text">₹</span>
                                        <input type="number" className="form-control" name="discount" placeholder="0.00" />
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <label className="form-label fw-bold">Total</label>
                                    <div className="input-group">
                                        <span className="input-group-text">₹</span>
                                        <input type="text" className="form-control" name="total" placeholder="0.00" readOnly />
                                    </div>
                                </div>
                            </div>

                            {/* Row 3 */}
                            <div className="row mb-3">
                                <div className="col-md-6">
                                    <label className="form-label fw-bold">GST Amount</label>
                                    <div className="input-group">
                                        <span className="input-group-text">₹</span>
                                        <input type="number" className="form-control" name="gstAmount" placeholder="0.00" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label fw-bold">Bill Amount</label>
                                    <div className="input-group">
                                        <span className="input-group-text">₹</span>
                                        <input type="text" className="form-control" name="billAmount" placeholder="0.00" readOnly />
                                    </div>
                                </div>
                            </div>

                            {/* Buttons */}
                            <div className="d-flex justify-content-end">
                                <button type="submit" className="btn btn-success me-2">Save</button>
                                <button type="reset" className="btn btn-danger">Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            </main>

        </>
    )
}

export default AmcContracts