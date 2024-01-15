import React, { Component, useRef } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { API_URL, headers } from "../components/egroup.service";
const axios = require("axios");

function GroupMemberAdd() {
  const initialGroupMemberState = {
    id: null,
    member: "",
    group: "",
  };

  const [groupmember, setGroupMember] = useState(initialGroupMemberState);
  const [submitted, setSubmitted] = useState(false);

  const handlelGroupMemberChange = (e) => {
    const { name, value } = e.target;
    setGroupMember({ ...groupmember, [name]: value });
  };

  const submitGroupMember = () => {
    let data = {
      member: groupmember.member,
      group: groupmember.group,
    };

    axios
      .post(`${API_URL}/group_members/`, data, {
        headers: {
          headers,
        },
      })
      .then((response) => {
        setGroupMember({
          id: response.data.id,
          member: response.data.member,
          group: response.data.group,
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch((e) => {
        console.error(e);
      });
  };

  const newGroupMember = () => {
    setGroupMember(initialGroupMemberState);
    setSubmitted(false);
  };

  return (
    <div className="wrapper">
      <Header />
      <Sidebar />

      <main className="page-content">
        <div className="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
          <div className="breadcrumb-title pe-3">Group Member</div>
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
              <h5 className="mb-0">Add New Group Member </h5>
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
              {submitted ? (
                <p>
                  <div className="alert border-0 bg-light-success alert-dismissible fade show py-2">
                    <div className="d-flex align-items-center">
                      <div className="fs-3 text-success">
                        <i className="bi bi-check-circle-fill"></i>
                      </div>
                      <div className="ms-3">
                        <div className="text-success">
                          Group Member successfully added!
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
                    onClick={newGroupMember}
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
                    <h6 className="mb-0 text-uppercase">
                      Add New Group Member
                    </h6>

                    <div className="card">
                      <div className="card-body">
                        <div className="mb-3">
                          <label for="member" className="form-label">
                            Member:
                          </label>
                          <input
                            type="text"
                            value={groupmember.member}
                            onChange={handlelGroupMemberChange}
                            name="member"
                            className="form-control"
                            maxLength="100"
                            aria-label="Member"
                            required
                          />
                        </div>

                        <div className="mb-3">
                          <label for="group" className="form-label">
                            Group:
                          </label>
                          <input
                            type="text"
                            value={groupmember.group}
                            onChange={handlelGroupMemberChange}
                            name="group"
                            className="form-control"
                            maxLength="100"
                            aria-label="Group"
                            required
                          />
                        </div>
                      </div>
                      <hr />
                      <div className="mb-3">
                        <button
                          type="button"
                          onClick={submitGroupMember}
                          onChange={handlelGroupMemberChange}
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

export default GroupMemberAdd;
