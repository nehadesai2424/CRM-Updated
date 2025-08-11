import React from 'react'

function AmcContractDetails() {
    return (
        <>
            <main id="main" className="main">
                <div className="pagetitle">
                    <h1>AMC Contract Details</h1>
                    <nav>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="/">Home</a></li>
                            <li className="breadcrumb-item active">AMC Contract Details</li>
                        </ol>
                    </nav>
                </div>

                <div className="container mt-4">
                    <div className="card p-4 shadow">
                        <form>
                            {/* Row 1: AMC ID, Sr No, Term */}
                            <div className="row mb-3">
                                <div className="col-md-4">
                                    <label className="form-label fw-bold">Sr No <span className="text-danger">*</span></label>
                                    <input type="text" className="form-control" name="srNo" placeholder="Enter serial number" required />
                                </div>
                                <div className="col-md-4">
                                    <label className="form-label fw-bold">AMC ID <span className="text-danger">*</span></label>
                                    <input type="text" className="form-control" name="amcId" placeholder="Enter AMC ID" required />
                                </div>

                                <div className="col-md-4">
                                    <label className="form-label fw-bold">Term <span className="text-danger">*</span></label>
                                    <input type="text" className="form-control" name="term" placeholder="Enter term" required />
                                </div>
                            </div>

                            {/* Row 2: Description */}
                            <div className="row mb-3">
                                <div className="col-12">
                                    <label className="form-label fw-bold">Description <span className="text-danger">*</span></label>
                                    <textarea className="form-control" name="description" rows="3" placeholder="Enter description" required></textarea>
                                </div>
                            </div>

                            {/* Row 3: Subtotal, Discount, Total */}
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

                            {/* Row 4: GST Amount, Bill Amount */}
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

export default AmcContractDetails