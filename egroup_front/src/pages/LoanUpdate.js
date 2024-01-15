import React, { Component, useRef, useState, useEffect } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import { Link, useParams } from "react-router-dom";
// const axios = require("axios");

import { API_URL, headers } from "../components/egroup.service";
const axios = require("axios");

function LoanUpdate() {
  const initialLoanState = {
    id: null,
    amount: 0,
    amount_due: 0,
    approved_date: "2024-01-04",
    approved: "",
    status: "",
    voucher: "",
  };

  let { id } = useParams();
  const [currentLoan, setCurrentLoan] = useState(initialLoanState);
  const countRef = useRef(0);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    retrieveLoan();
  }, [countRef]);
  const handleLoanChange = (e) => {
    const { name, value } = e.target;
    setCurrentLoan({ ...currentLoan, [name]: value });
  };
  const retrieveLoan = () => {
    axios
      .get(`${API_URL}/loans/${id}/`, {
        headers: {
          headers,
        },
      })
      .then((response) => {
        setCurrentLoan({
          id: response.data.id,
          amount: response.data.amount,
          amount_due: response.data.amount_due,
          approved_date: response.data.approved_date,
          status: response.data.status,
          approved: response.data.approved,
          voucher: response.data.voucher,
        });
        console.log(currentLoan);
      })
      .catch((e) => {
        console.error(e);
      });
  };
  const updateLoan = () => {
    let data = {
      amount: currentLoan.amount,
      amount_due: currentLoan.amount_due,
      approved_date: currentLoan.approved_date,
      status: currentLoan.status,
      approved: currentLoan.approved,
      voucher: currentLoan.voucher,
    };
    axios
      .put(`${API_URL}/loans/${id}/`, data, {
        headers: {
          headers,
        },
      })
      .then((response) => {
        setCurrentLoan({
          id: response.data.id,
          amount: response.data.amount,
          amount_due: response.data.amount_due,
          approved_date: response.data.approved_date,
          status: response.data.status,
          approved: response.data.approved,
          voucher: response.data.voucher,
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch((e) => {
        console.error(e);
      });
  };
  const newLoan = () => {
    setCurrentLoan(initialLoanState);
    setSubmitted(false);
  };

  return (
    <div className="wrapper">
      <Header />
      <Sidebar />

      <main className="page-content">
        <div className="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
          <div className="breadcrumb-title pe-3">Loan Products</div>
          <div className="ps-3">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb mb-0 p-0">
                <li className="breadcrumb-item">
                  <a href="javascript:;">
                    <i className="bx bx-home-alt"></i>
                  </a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  List
                </li>
              </ol>
            </nav>
          </div>
          <div className="ms-auto">
            <div className="btn-group">
              <button type="button" className="btn btn-primary">
                Settings
              </button>
              <button
                type="button"
                className="btn btn-primary split-bg-primary dropdown-toggle dropdown-toggle-split"
                data-bs-toggle="dropdown"
              >
                {" "}
                <span className="visually-hidden">Toggle Dropdown</span>
              </button>
              <div className="dropdown-menu dropdown-menu-right dropdown-menu-lg-end">
                {" "}
                <a className="dropdown-item" href="javascript:;">
                  Action
                </a>
                <a className="dropdown-item" href="javascript:;">
                  Another action
                </a>
                <a className="dropdown-item" href="javascript:;">
                  Something else here
                </a>
                <div className="dropdown-divider"></div>{" "}
                <a className="dropdown-item" href="javascript:;">
                  Separated link
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <div className="d-flex align-items-center">
              <h5 className="mb-0">Approve Loan </h5>
              <form className="ms-auto position-relative">
                <div className="position-absolute top-50 translate-middle-y search-icon px-3">
                  <i className="bi bi-search"></i>
                </div>
                <input
                  className="form-control ps-5"
                  type="text"
                  placeholder="search"
                />
              </form>
            </div>
            <div className="table-responsive mt-3">
              <Link to={"/listloans"} type="button" className="btn btn-success">
                View List
              </Link>
              <br /> <br />
              {submitted ? (
                <p>
                  <div className="alert border-0 bg-light-success alert-dismissible fade show py-2">
                    <div className="d-flex align-items-center">
                      <div className="fs-3 text-success">
                        <i className="bi bi-check-circle-fill"></i>
                      </div>
                      <div className="ms-3">
                        <div className="text-success">
                          Loan successfully updated!
                        </div>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="alert"
                      aria-label="Close"
                    ></button>
                  </div>
                  <hr />
                  <br />

                  <hr />
                </p>
              ) : (
                <div className="row">
                  <div className="col-xl-9 mx-auto">
                    <h6 className="mb-0 text-uppercase">Aprove Loan</h6>

                    <div className="card">
                      <div className="card-body">
                        <div className="mb-3">
                          <label for="amount" className="form-label">
                            Amount:
                          </label>
                          <input
                            type="number"
                            value={currentLoan.amount}
                            onChange={handleLoanChange}
                            name="amount"
                            className="form-control"
                            aria-label="amount"
                            disabled
                          />
                        </div>
                        <div className="mb-3">
                          <label for="amount_due" className="form-label">
                            Amount Due:
                          </label>
                          <input
                            name="amount_due"
                            onChange={handleLoanChange}
                            value={currentLoan.amount_due}
                            type="number"
                            className="form-control"
                            id="amount_due"
                            aria-label="amount_due"
                            disabled
                          />
                        </div>
                        <div className="mb-3">
                          <label for="approved_date" className="form-label">
                            Approved Date:
                          </label>
                          <input
                            name="approved_date"
                            onChange={handleLoanChange}
                            value={currentLoan.loan_duration_days}
                            type="number"
                            className="form-control"
                            id="approved_date"
                            aria-label="approved_date"
                            disabled
                          />
                        </div>

                        <div className="mb-3">
                          <label for="product_type" className="form-label">
                            Status:
                          </label>
                          <select
                            className="form-control"
                            name="status"
                            onChange={handleLoanChange}
                            id="status"
                            value={currentLoan.status}
                            aria-label="status"
                            required
                          >
                            <option value="ACTIVE">ACTIVE</option>
                            <option value="COMPLETED">COMPLETED</option>
                          </select>
                        </div>

                        <div className="mb-3">
                          <label for="approved" className="form-label">
                            Approve:
                          </label>
                          <select
                            className="form-control"
                            name="approved"
                            onChange={handleLoanChange}
                            id="approved"
                            value={currentLoan.approved}
                            aria-label="approved"
                            required
                          >
                            <option value="NO">NO</option>
                            <option value="YES">YES</option>
                          </select>
                        </div>

                        <hr />
                        <div className="mb-3">
                          <button
                            type="button"
                            onClick={updateLoan}
                            onChange={handleLoanChange}
                            className="btn btn-primary "
                          >
                            Submit
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr />
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default LoanUpdate;
