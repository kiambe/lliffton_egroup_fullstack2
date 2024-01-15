import React, { Component, useRef, useState, useEffect } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import { Link, useParams } from "react-router-dom";
import { API_URL, headers } from "../components/egroup.service";

const axios = require("axios");

function GroupMemberView() {
  const initialLoanProductState = {
    id: null,
    member: "",
    group: "",
  };

  let { id } = useParams();
  const [currentLoanProduct, setCurrentLoanProduct] = useState(
    initialLoanProductState
  );
  const countRef = useRef(0);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    retrieveLoanProduct();
  }, [countRef]);
  const handleLoanProductChange = (e) => {
    const { name, value } = e.target;
    setCurrentLoanProduct({ ...currentLoanProduct, [name]: value });
  };
  const retrieveLoanProduct = () => {
    axios
      .get(`${API_URL}/loan_products/${id}/`, {
        headers: {
          headers,
        },
      })
      .then((response) => {
        setCurrentLoanProduct({
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
        console.log(currentLoanProduct);
      })
      .catch((e) => {
        console.error(e);
      });
  };
  const updateLoanProduct = () => {
    let data = {
      name: currentLoanProduct.name,
      description: currentLoanProduct.description,
      loan_duration_days: currentLoanProduct.loan_duration_days,
      penalty_rate: currentLoanProduct.penalty_rate,
      interest_rate: currentLoanProduct.interest_rate,
      product_type: currentLoanProduct.product_type,
      borrowing_percentage: currentLoanProduct.borrowing_percentage,
      borrowing_times: currentLoanProduct.borrowing_times,
    };
    axios
      .put(`${API_URL}/loan_products/${id}/`, data, {
        headers: {
          headers,
        },
      })
      .then((response) => {
        setCurrentLoanProduct({
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
    setCurrentLoanProduct(initialLoanProductState);
    setSubmitted(false);
  };

  return (
    <div className="wrapper">
      <Header />
      <Sidebar />

      <main className="page-content">
        <div className="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
          <div className="breadcrumb-title pe-3">Group GroupMember</div>
          <div className="ps-3">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb mb-0 p-0">
                <li className="breadcrumb-item">
                  <a href="javascript:;">
                    <i className="bx bx-home-alt"></i>
                  </a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  View
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
              <h5 className="mb-0">View Group GroupMember </h5>
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
                to={"/listgroupmembers"}
                type="button"
                className="btn btn-success"
              >
                View List
              </Link>
              <br /> <br />
              <div className="row">
                <div className="col-xl-9 mx-auto">
                  <h6 className="mb-0 text-uppercase">
                    View Group GroupMember
                  </h6>

                  <div className="card">
                    <div className="card-body">
                      <div className="mb-3">
                        <label for="name" className="form-label">
                          Name:
                        </label>
                        <input
                          type="text"
                          value={currentLoanProduct.name}
                          name="name"
                          disabled
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
                          disabled
                          value={currentLoanProduct.description}
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
                          disabled
                          value={currentLoanProduct.loan_duration_days}
                          type="number"
                          className="form-control"
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
                          disabled
                          name="penalty_rate"
                          value={currentLoanProduct.penalty_rate}
                          className="form-control"
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
                          disabled
                          id="interest_rate"
                          value={currentLoanProduct.interest_rate}
                          className="form-control"
                          aria-label="interest_rate"
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label for="product_type" className="form-label">
                          Product type:
                        </label>
                        <input
                          type="text"
                          name="product_type"
                          disabled
                          id="product_type"
                          value={currentLoanProduct.product_type}
                          className="form-control"
                          aria-label="interest_rate"
                          required
                        />
                      </div>

                      <div className="mb-3">
                        <label
                          for="borrowing_percentage"
                          className="form-label"
                        >
                          Borrowing percentage (%):
                        </label>
                        <input
                          type="number"
                          disabled
                          name="borrowing_percentage"
                          value={currentLoanProduct.borrowing_percentage}
                          id="borrowing_percentage"
                          className="form-control"
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
                          disabled
                          name="borrowing_times"
                          id="borrowing_times"
                          className="form-control"
                          value={currentLoanProduct.borrowing_times}
                          aria-label="borrowing_times"
                          required
                        />
                      </div>
                    </div>
                    <hr />
                  </div>
                </div>
                <hr />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default GroupMemberView;
