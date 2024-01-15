import React, { Component, useRef } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { API_URL, headers } from "../components/egroup.service";
import { useNavigate } from "react-router-dom";
const axios = require("axios");

function LoanProductList() {
  const [deleted, setDeleted] = useState(false);
  const navigate = useNavigate();
  const countRef = useRef(0);
  const [loanproducts, setLoanProducts] = useState([]);
  const [totalresults, setTotalResults] = useState(0);
  //const [API_URL, setbaseUrl] = useState(API_URL);

  useEffect(() => {
    retrieveAllLoanProducts();
  }, [countRef]);

  const retrieveAllLoanProducts = () => {
    axios
      .get(`${API_URL}/loan_products/`, {
        headers: {
          headers,
        },
      })
      .then((response) => {
        setLoanProducts(response.data.results);
      })
      .catch((e) => {
        console.error(e);
      });
  };

  const deleteLoanProduct = (id) => {
    axios
      .delete(`${API_URL}/loan_products/${id}/`, {
        headers: {
          headers,
        },
      })
      .then((response) => {
        setDeleted(true);
        retrieveAllLoanProducts();
      })
      .catch((e) => {
        console.error(e);
      });
  };

  const handleUpdateClick = (id) => {
    navigate(`/updateloanproducts/${id}/update/`);
  };

  const handleViewClick = (id) => {
    navigate(`/viewloanproducts/${id}/view/`);
  };

  function changeUrl(API_URL) {
    // setbaseUrl(API_URL);
  }

  var links = [];
  for (let i = 1; i <= totalresults; i++) {
    links.push(
      <li className="page-item">
        <Link
          className="page-link"
          onClick={() => changeUrl(API_URL + `/listloanproducts/?page=${i}`)}
          to={`/listloanproducts/?page=${i}`}
        >
          {i}
        </Link>
      </li>
    );
  }

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
              <h5 className="mb-0">Loan Product Listing</h5>
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
                to={"/addloanproducts"}
                type="button"
                className="btn btn-success"
              >
                Add New
              </Link>

              <hr />

              {deleted && (
                <div className="alert border-0 bg-light-danger alert-dismissible fade show py-2">
                  <div className="d-flex align-items-center">
                    <div className="fs-3 text-danger">
                      <i className="bi bi-x-circle-fill"></i>
                    </div>
                    <div className="ms-3">
                      <div className="text-danger">Record deleted!</div>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="alert"
                    aria-label="Close"
                  ></button>
                </div>
              )}

              <table className="table align-middle">
                <thead className="table-secondary">
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Duration Days</th>
                    <th>Penalty</th>
                    <th>Interest</th>
                    <th>Borrowing Times</th>
                    <th>Product Type</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {loanproducts.map((loanproduct) => (
                    <tr>
                      <td>-</td>
                      <td>
                        <div className="d-flex align-items-center gap-3 cursor-pointer">
                          <div className="">
                            <p className="mb-0">{loanproduct.name}</p>
                          </div>
                        </div>
                      </td>
                      <td>{loanproduct.description}</td>
                      <td>{loanproduct.loan_duration_days}</td>
                      <td>{loanproduct.penalty_rate}</td>
                      <td>{loanproduct.interest_rate}</td>
                      <td>{loanproduct.borrowing_times}</td>
                      <td>
                        <span className="badge bg-light-success text-success w-100">
                          {loanproduct.product_type}
                        </span>
                      </td>
                      <td>
                        <div className="table-actions d-flex align-items-center gap-3 fs-6">
                          <button
                            onClick={() => handleViewClick(loanproduct.id)}
                            className="text-primary"
                            data-bs-toggle="tooltip"
                            data-bs-placement="bottom"
                            title="View"
                          >
                            <i className="bi bi-eye-fill"></i>
                          </button>
                          <button
                            onClick={() => handleUpdateClick(loanproduct.id)}
                            className="text-warning"
                            data-bs-toggle="tooltip"
                            data-bs-placement="bottom"
                            title="Edit"
                          >
                            <i className="bi bi-pencil-fill"></i>
                          </button>
                          <button
                            type="button"
                            className="text-danger"
                            data-bs-toggle="modal"
                            data-bs-target="#deleteModal"
                            data-bs-placement="bottom"
                            title="Delete"
                          >
                            <i className="bi bi-trash-fill"></i>
                          </button>

                          <div
                            className="modal fade"
                            id="deleteModal"
                            tabindex="-1"
                            aria-labelledby="exampleModalLabel"
                            aria-hidden="true"
                          >
                            <div className="modal-dialog">
                              <div className="modal-content">
                                <div className="modal-header">
                                  <h5
                                    className="modal-title"
                                    id="exampleModalLabel"
                                  >
                                    Warning
                                  </h5>
                                  <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                  ></button>
                                </div>
                                <div className="modal-body">
                                  Record will no longer be available
                                </div>
                                <div className="modal-footer">
                                  <button
                                    type="button"
                                    className="btn btn-secondary"
                                    data-bs-dismiss="modal"
                                  >
                                    Close
                                  </button>
                                  <button
                                    onClick={() =>
                                      deleteLoanProduct(loanproduct.id)
                                    }
                                    type="button"
                                    className="btn btn-danger"
                                  >
                                    Confirm Delete
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <hr />
              <nav aria-label="Page navigation example">
                <ul className="pagination">{links}</ul>
              </nav>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default LoanProductList;
