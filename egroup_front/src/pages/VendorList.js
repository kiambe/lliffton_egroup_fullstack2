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
      .get("http://localhost:8000/api/list_members/")
      .then((res) => setMembers(res.data.results))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <Sidebar />

      <main class="page-content">
        <div class="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
          <div class="breadcrumb-title pe-3">Vendors</div>
          <div class="ps-3">
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb mb-0 p-0">
                <li class="breadcrumb-item">
                  <a href="javascript:;">
                    <i class="bx bx-home-alt"></i>
                  </a>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                  List
                </li>
              </ol>
            </nav>
          </div>
          <div class="ms-auto">
            <div class="btn-group">
              <button type="button" class="btn btn-primary">
                Settings
              </button>
              <button
                type="button"
                class="btn btn-primary split-bg-primary dropdown-toggle dropdown-toggle-split"
                data-bs-toggle="dropdown"
              >
                {" "}
                <span class="visually-hidden">Toggle Dropdown</span>
              </button>
              <div class="dropdown-menu dropdown-menu-right dropdown-menu-lg-end">
                {" "}
                <a class="dropdown-item" href="javascript:;">
                  Action
                </a>
                <a class="dropdown-item" href="javascript:;">
                  Another action
                </a>
                <a class="dropdown-item" href="javascript:;">
                  Something else here
                </a>
                <div class="dropdown-divider"></div>{" "}
                <a class="dropdown-item" href="javascript:;">
                  Separated link
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <div class="d-flex align-items-center">
              <h5 class="mb-0">Vendor Listing</h5>
              <form class="ms-auto position-relative">
                <div class="position-absolute top-50 translate-middle-y search-icon px-3">
                  <i class="bi bi-search"></i>
                </div>
                <input
                  class="form-control ps-5"
                  type="text"
                  placeholder="search"
                />
              </form>
            </div>
            <div class="table-responsive mt-3">
              <table class="table align-middle">
                <thead class="table-secondary">
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
                        <div class="d-flex align-items-center gap-3 cursor-pointer">
                          <img
                            src="assets/images/icons/entrepreneur.png"
                            class="rounded-circle"
                            width="44"
                            height="44"
                            alt=""
                          />
                          <div class="">
                            <p class="mb-0">{group.name}</p>
                          </div>
                        </div>
                      </td>
                      <td>{group.group_type}</td>
                      <td>{group.ward_id}</td>
                      <td>{group.business_activity}</td>
                      <td>{group.secretary_name}</td>
                      <td>
                        <span class="badge bg-light-success text-success w-100">
                          Active
                        </span>
                      </td>
                      <td>
                        <div class="table-actions d-flex align-items-center gap-3 fs-6">
                          <Link
                            to="/"
                            class="text-primary"
                            data-bs-toggle="tooltip"
                            data-bs-placement="bottom"
                            title="View"
                          >
                            <i class="bi bi-eye-fill"></i>
                          </Link>
                          <Link
                            to="/"
                            class="text-warning"
                            data-bs-toggle="tooltip"
                            data-bs-placement="bottom"
                            title="Edit"
                          >
                            <i class="bi bi-pencil-fill"></i>
                          </Link>
                          <Link
                            to="/"
                            class="text-danger"
                            data-bs-toggle="tooltip"
                            data-bs-placement="bottom"
                            title="Delete"
                          >
                            <i class="bi bi-trash-fill"></i>
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
