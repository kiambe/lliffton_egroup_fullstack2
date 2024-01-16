import React, { Component } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
const axios = require("axios");
import { useState, useEffect } from "react";

function VendorList() {
  const [members, setMembers] = useState([]);
  useEffect(() => {
    axios
      .get(process.env.REACT_APP_LIST_MEMBERS_URL)
      .then((res) => setMembers(res.data.results))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <Sidebar />

      <main className="page-content">
        <div className="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
          <div className="breadcrumb-title pe-3">Vendors</div>
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
              <h5 className="mb-0">Vendor Listing</h5>
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
              <table className="table align-middle">
                <thead className="table-secondary">
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Group Type</th>
                    <th>Ward</th>
                    <th>Business Activity</th>
                    <th>Secretary</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {members.map((group) => (
                    <tr>
                      <td>-</td>
                      <td>
                        <div className="d-flex align-items-center gap-3 cursor-pointer">
                          <img
                            src="assets/images/icons/entrepreneur.png"
                            className="rounded-circle"
                            width="44"
                            height="44"
                            alt=""
                          />
                          <div className="">
                            <p className="mb-0">{group.name}</p>
                          </div>
                        </div>
                      </td>
                      <td>{group.group_type}</td>
                      <td>{group.ward_id}</td>
                      <td>{group.business_activity}</td>
                      <td>{group.secretary_name}</td>
                      <td>
                        <span className="badge bg-light-success text-success w-100">
                          Active
                        </span>
                      </td>
                      <td>
                        <div className="table-actions d-flex align-items-center gap-3 fs-6">
                          <Link
                            to="/"
                            className="text-primary"
                            data-bs-toggle="tooltip"
                            data-bs-placement="bottom"
                            title="View"
                          >
                            <i className="bi bi-eye-fill"></i>
                          </Link>
                          <Link
                            to="/"
                            className="text-warning"
                            data-bs-toggle="tooltip"
                            data-bs-placement="bottom"
                            title="Edit"
                          >
                            <i className="bi bi-pencil-fill"></i>
                          </Link>
                          <Link
                            to="/"
                            className="text-danger"
                            data-bs-toggle="tooltip"
                            data-bs-placement="bottom"
                            title="Delete"
                          >
                            <i className="bi bi-trash-fill"></i>
                          </Link>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default VendorList;
