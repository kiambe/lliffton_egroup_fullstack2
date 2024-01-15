import React, { Component, useRef } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { API_URL, headers } from "../components/egroup.service";
import { useNavigate } from "react-router-dom";

const axios = require("axios");

function GroupList() {
  const [deleted, setDeleted] = useState(false);
  const navigate = useNavigate();
  const countRef = useRef(0);
  const [groups, setGroups] = useState([]);
  const [totalresults, setTotalResults] = useState(0);

  useEffect(() => {
    retrieveAllGroups();
  }, [countRef]);

  const retrieveAllGroups = () => {
    axios
      .get(`${API_URL}/groups/`, {
        headers: {
          headers,
        },
      })
      .then((response) => {
        setGroups(response.data.results);
      })
      .catch((e) => {
        console.error(e);
      });
  };

  const deleteGroup = (id) => {
    axios
      .delete(`${API_URL}/groups/${id}/`, {
        headers: {
          headers,
        },
      })
      .then((response) => {
        setDeleted(true);
        retrieveAllGroups();
      })
      .catch((e) => {
        console.error(e);
      });
  };

  const handleUpdateClick = (id) => {
    navigate(`/updategroup/${id}/update/`);
  };

  const handleViewClick = (id) => {
    navigate(`/viewgroup/${id}/view/`);
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
          onClick={() => changeUrl(API_URL + `/listgroups/?page=${i}`)}
          to={`/listgroups/?page=${i}`}
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
          <div className="breadcrumb-title pe-3">Groups</div>
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
              <h5 className="mb-0">Group Listing</h5>
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
              <Link to={"/addgroup"} type="button" className="btn btn-success">
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
                    <th>Code</th>
                    <th>Business Activity</th>
                    <th>Opportunity</th>
                    <th>Contact Person Name</th>
                    <th>BContact Person Contact</th>
                    <th>Group Type</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {groups.map((group) => (
                    <tr>
                      <td>-</td>
                      <td>
                        <div className="d-flex align-items-center gap-3 cursor-pointer">
                          <div className="">
                            <p className="mb-0">{group.name}</p>
                          </div>
                        </div>
                      </td>
                      <td>{group.special_code}</td>
                      <td>{group.business_activity}</td>
                      <td>{group.opportunity}</td>
                      <td>{group.secretary_name}</td>
                      <td>{group.secretary_phone}</td>
                      <td>
                        <span className="badge bg-light-success text-success w-100">
                          {group.group_type}
                        </span>
                      </td>
                      <td>
                        <div className="table-actions d-flex align-items-center gap-3 fs-6">
                          <button
                            onClick={() => handleViewClick(group.id)}
                            className="text-primary"
                            data-bs-toggle="tooltip"
                            data-bs-placement="bottom"
                            title="View"
                          >
                            <i className="bi bi-eye-fill"></i>
                          </button>
                          <button
                            onClick={() => handleUpdateClick(group.id)}
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
                                    onClick={() => deleteGroup(group.id)}
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

export default GroupList;
