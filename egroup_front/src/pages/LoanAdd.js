import React, { Component, useRef } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { API_URL, headers } from "../components/egroup.service";
const axios = require("axios");

function LoanAdd() {
  const initialLoanState = {
    id: null,
    name: "",
    description: "",
    loan_duration_days: 0,
    penalty_rate: 0,
    interest_rate: 0,
    product_type: 0,
    borrowing_percentage: 0,
    borrowing_times: 0,
  };

  const [loan, setLoan] = useState(initialLoanState);
  const [submitted, setSubmitted] = useState(false);

  const handlelLoanChange = (e) => {
    const { name, value } = e.target;
    setLoan({ ...loan, [name]: value });
  };

  const submitLoan = () => {
    let data = {
      name: loan.name,
      description: loan.description,
      loan_duration_days: loan.loan_duration_days,
      penalty_rate: loan.penalty_rate,
      interest_rate: loan.interest_rate,
      product_type: loan.product_type,
      borrowing_percentage: loan.borrowing_percentage,
      borrowing_times: loan.borrowing_times,
    };

    axios
      .post(`${API_URL}/loan_products/`, data, {
        headers: {
          headers,
        },
      })
      .then((response) => {
        setLoan({
          id: response.data.id,
          name: response.data.name,
          description: response.data.description,
          loan_duration_days: response.data.loan_duration_days,
          penalty_rate: response.data.penalty_rate,
          interest_rate: response.data.interest_rate,
          product_type: response.data.product_type,
          borrowing_percentage: response.data.borrowing_percentage,
          borrowing_times: response.data.borrowing_times,
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch((e) => {
        console.error(e);
      });
  };

  const newLoan = () => {
    setLoan(initialLoanState);
    setSubmitted(false);
  };

  return (
    <div className="wrapper">
      <Header />
      <Sidebar />

      <main className="page-content">
        <div className="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
          <div className="breadcrumb-title pe-3">Loan</div>
          <div className="ps-3">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb mb-0 p-0">
                <li className="breadcrumb-item">
                  <a href="javascript:;">
                    <i className="bx bx-home-alt"></i>
                  </a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Add
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
              <h5 className="mb-0">Issue New Loan </h5>
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
                View Loans
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
                        <div className="text-success">Loan successfully added!</div>
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

                  <Link onClick={newLoan} type="button" className="btn btn-success">
                    Add Another Record
                  </Link>

                  <hr />
                </p>
              ) : (
                <div className="row">
                  <div className="col-xl-9 mx-auto">
                    <h6 className="mb-0 text-uppercase">Add New Loan</h6>

                    <div className="card">
                      <div className="card-body">
                        <div className="mb-3">
                          <label for="name" className="form-label">
                            Name:
                          </label>
                          <input
                            type="text"
                            value={loan.name}
                            onChange={handlelLoanChange}
                            name="name"
                            className="form-control"
                            maxLength="100"
                            aria-label="Name"
                            required
                          />
                        </div>
                        <div className="mb-3">
                          <label for="description" className="form-label">
                            Description:
                          </label>
                          <input
                            name="description"
                            onChange={handlelLoanChange}
                            value={loan.description}
                            type="text"
                            className="form-control"
                            maxLength="10"
                            placeholder="Description here"
                            id="description"
                            aria-label="description"
                            required
                          />
                        </div>
                        <div className="mb-3">
                          <label for="loan_duration_days" className="form-label">
                            Duration (Days):
                          </label>
                          <input
                            name="loan_duration_days"
                            onChange={handlelLoanChange}
                            value={loan.loan_duration_days}
                            type="number"
                            className="form-control"
                            maxLength="10"
                            placeholder="0"
                            id="loan_duration_days"
                            aria-label="loan_duration_days"
                            required
                          />
                        </div>
                        <div className="mb-3">
                          <label for="penalty_rate" className="form-label">
                            Penalty rate (%):
                          </label>
                          <input
                            type="number"
                            id="penalty_rate"
                            onChange={handlelLoanChange}
                            name="penalty_rate"
                            value={loan.penalty_rate}
                            className="form-control"
                            maxLength="10"
                            placeholder="0"
                            aria-label="penalty_rate"
                            required
                          />
                        </div>
                        <div className="mb-3">
                          <label for="interest_rate" className="form-label">
                            Interest rate (%):
                          </label>
                          <input
                            type="number"
                            name="interest_rate"
                            onChange={handlelLoanChange}
                            id="interest_rate"
                            value={loan.interest_rate}
                            className="form-control"
                            maxLength="10"
                            placeholder="0"
                            aria-label="interest_rate"
                            required
                          />
                        </div>
                        <div className="mb-3">
                          <label for="product_type" className="form-label">
                            Product type:
                          </label>
                          <select
                            className="form-control"
                            name="product_type"
                            onChange={handlelLoanChange}
                            id="product_type"
                            value={loan.product_type}
                            aria-label="product type"
                            required
                          >
                            <option value="unsecured">Unsecured</option>
                            <option value="secured">Secured</option>
                            <option value="conventional">Conventional</option>
                            <option value="open-end">Open-end</option>
                            <option value="closed-end">Closed-end</option>
                          </select>
                        </div>

                        <div className="mb-3">
                          <label for="borrowing_percentage" className="form-label">
                            Borrowing percentage (%):
                          </label>
                          <input
                            type="number"
                            name="borrowing_percentage"
                            value={loan.borrowing_percentage}
                            id="borrowing_percentage"
                            className="form-control"
                            maxLength="10"
                            placeholder="0"
                            aria-label="borrowing_percentage"
                            required
                          />
                        </div>
                        <div className="mb-3">
                          <label for="validationTextarea" className="form-label">
                            Borrowing Times:
                          </label>
                          <input
                            type="number"
                            name="borrowing_times"
                            onChange={handlelLoanChange}
                            id="borrowing_times"
                            className="form-control"
                            value={loan.borrowing_times}
                            aria-label="borrowing_times"
                            placeholder="1"
                            required
                          />
                        </div>
                      </div>
                      <hr />
                      <div className="mb-3">
                        <button
                          type="button"
                          onClick={submitLoan}
                          onChange={handlelLoanChange}
                          className="btn btn-primary "
                        >
                          Submit
                        </button>
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

export default LoanAdd;
