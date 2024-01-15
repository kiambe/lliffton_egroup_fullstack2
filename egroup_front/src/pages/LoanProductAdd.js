import React, { Component, useRef } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { API_URL, headers } from "../components/egroup.service";
const axios = require("axios");

function LoanProductAdd() {
  const initialLoanProductState = {
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

  const [loanproduct, setLoanProduct] = useState(initialLoanProductState);
  const [submitted, setSubmitted] = useState(false);

  const handlelLoanProductChange = (e) => {
    const { name, value } = e.target;
    setLoanProduct({ ...loanproduct, [name]: value });
  };

  const submitLoanProduct = () => {
    let data = {
      name: loanproduct.name,
      description: loanproduct.description,
      loan_duration_days: loanproduct.loan_duration_days,
      penalty_rate: loanproduct.penalty_rate,
      interest_rate: loanproduct.interest_rate,
      product_type: loanproduct.product_type,
      borrowing_percentage: loanproduct.borrowing_percentage,
      borrowing_times: loanproduct.borrowing_times,
    };

    axios
      .post(`${API_URL}/loan_products/`, data, {
        headers: {
          headers,
        },
      })
      .then((response) => {
        setLoanProduct({
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

  const newLoanProduct = () => {
    setLoanProduct(initialLoanProductState);
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
              <h5 className="mb-0">Add New Loan Product </h5>
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
              <Link
                to={"/listloanproducts"}
                type="button"
                className="btn btn-success"
              >
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
                          Loan Product successfully added!
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

                  <Link
                    onClick={newLoanProduct}
                    type="button"
                    className="btn btn-success"
                  >
                    Add Another Record
                  </Link>

                  <hr />
                </p>
              ) : (
                <div className="row">
                  <div className="col-xl-9 mx-auto">
                    <h6 className="mb-0 text-uppercase">Add New Loan Product</h6>

                    <div className="card">
                      <div className="card-body">
                        <div className="mb-3">
                          <label for="name" className="form-label">
                            Name:
                          </label>
                          <input
                            type="text"
                            value={loanproduct.name}
                            onChange={handlelLoanProductChange}
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
                            onChange={handlelLoanProductChange}
                            value={loanproduct.description}
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
                            onChange={handlelLoanProductChange}
                            value={loanproduct.loan_duration_days}
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
                            onChange={handlelLoanProductChange}
                            name="penalty_rate"
                            value={loanproduct.penalty_rate}
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
                            onChange={handlelLoanProductChange}
                            id="interest_rate"
                            value={loanproduct.interest_rate}
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
                            onChange={handlelLoanProductChange}
                            id="product_type"
                            value={loanproduct.product_type}
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
                            value={loanproduct.borrowing_percentage}
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
                            onChange={handlelLoanProductChange}
                            id="borrowing_times"
                            className="form-control"
                            value={loanproduct.borrowing_times}
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
                          onClick={submitLoanProduct}
                          onChange={handlelLoanProductChange}
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

export default LoanProductAdd;
