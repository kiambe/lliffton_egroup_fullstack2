import React, { Component, useRef, useState, useEffect } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import { Link, useParams } from "react-router-dom";
import { API_URL, headers } from "../components/egroup.service";
const axios = require("axios");

function GroupMemberUpdate() {
  const initialGroupMemberState = {
    id: null,
    fullname: "",
    email: "",
    is_an_group_admin: "",
    physical_address: "",
    national_id: "",
    primary_phone_number: "",
    primary_phone_number_provider: "",
    alternative_phone_number: "",
    alternative_phone_number_provider: "",
    year_of_birth: 1900,
    gender: "",
    ward_id: "",
  };

  let { id } = useParams();
  const [currentGroupMember, setCurrentGroupMember] = useState(
    initialGroupMemberState
  );
  const countRef = useRef(0);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    retrieveGroupMember();
  }, [countRef]);

  const handleGroupMemberChange = (e) => {
    const { name, value } = e.target;
    setCurrentGroupMember({ ...currentGroupMember, [name]: value });
  };

  const retrieveGroupMember = () => {
    axios
      .get(`${API_URL}/groupmembers/${id}/`, {
        headers: {
          headers,
        },
      })
      .then((response) => {
        setCurrentGroupMember({
          fullname: response.data.fullname,
          email: response.data.email,
          is_an_group_admin: response.data.is_an_group_admin,
          physical_address: response.data.physical_address,
          national_id: response.data.national_id,
          primary_phone_number: response.data.primary_phone_number,
          primary_phone_number_provider:
            response.data.primary_phone_number_provider,
          alternative_phone_number: response.data.alternative_phone_number,
          alternative_phone_number_provider:
            response.data.alternative_phone_number_provider,
          year_of_birth: response.data.year_of_birth,
          gender: response.data.gender,
          ward_id: response.data.ward_id,
        });
        console.log(currentGroupMember);
      })
      .catch((e) => {
        console.error(e);
      });
  };
  const updateGroupMember = () => {
    let data = {
      fullname: currentGroupMember.fullname,
      email: currentGroupMember.email,
      is_an_group_admin: currentGroupMember.is_an_group_admin,
      physical_address: currentGroupMember.physical_address,
      national_id: currentGroupMember.national_id,
      primary_phone_number: currentGroupMember.primary_phone_number,
      primary_phone_number_provider:
        currentGroupMember.primary_phone_number_provider,
      alternative_phone_number: currentGroupMember.alternative_phone_number,
      alternative_phone_number_provider:
        currentGroupMember.alternative_phone_number_provider,
      year_of_birth: currentGroupMember.year_of_birth,
      gender: currentGroupMember.gender,
      ward_id: currentGroupMember.ward_id,
    };
    axios
      .put(`${API_URL}/groupmembers/${id}/`, data, {
        headers: {
          headers,
        },
      })
      .then((response) => {
        setCurrentGroupMember({
          id: response.data.id,
          fullname: response.data.fullname,
          email: response.data.email,
          is_an_group_admin: response.data.is_an_group_admin,
          physical_address: response.data.physical_address,
          national_id: response.data.national_id,
          primary_phone_number: response.data.primary_phone_number,
          primary_phone_number_provider:
            response.data.primary_phone_number_provider,
          alternative_phone_number: response.data.alternative_phone_number,
          alternative_phone_number_provider:
            response.data.alternative_phone_number_provider,
          year_of_birth: response.data.year_of_birth,
          gender: response.data.gender,
          ward_id: response.data.ward_id,
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch((e) => {
        console.error(e);
      });
  };
  const newGroupMember = () => {
    setCurrentGroupMember(initialGroupMemberState);
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
              <h5 className="mb-0">Update Group GroupMember </h5>
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
                          GroupMember successfully updated!
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
                      Update Group GroupMember
                    </h6>

                    <div className="card">
                      <div className="card-body">
                        <div className="mb-3">
                          <label for="fullname" className="form-label">
                            Fullname:
                          </label>
                          <input
                            type="text"
                            value={currentGroupMember.fullname}
                            onChange={handleGroupMemberChange}
                            name="fullname"
                            className="form-control"
                            maxLength="100"
                            aria-label="Fullname"
                            required
                          />
                        </div>

                        <div className="mb-3">
                          <label for="email" className="form-label">
                            Email:
                          </label>
                          <input
                            type="email"
                            value={currentGroupMember.email}
                            onChange={handleGroupMemberChange}
                            name="email"
                            className="form-control"
                            maxLength="100"
                            aria-label="Email"
                            required
                          />
                        </div>

                        <div className="mb-3">
                          <label for="physical_address" className="form-label">
                            Physical_address:
                          </label>
                          <textarea
                            onChange={handleGroupMemberChange}
                            value={currentGroupMember.physical_address}
                            name="physical_address"
                            className="form-control"
                            aria-label="physical_address"
                            maxLength="255"
                            required
                          ></textarea>
                        </div>

                        <div className="mb-3">
                          <label for="national_id" className="form-label">
                            National ID:
                          </label>
                          <input
                            type="text"
                            value={currentGroupMember.national_id}
                            onChange={handleGroupMemberChange}
                            name="national_id"
                            className="form-control"
                            aria-label="National ID"
                            maxLength="15"
                            required
                          />
                        </div>

                        <div className="mb-3">
                          <label
                            for="primary_phone_number"
                            className="form-label"
                          >
                            Primary Phone Number:
                          </label>
                          <input
                            type="number"
                            value={currentGroupMember.primary_phone_number}
                            onChange={handleGroupMemberChange}
                            name="primary_phone_number"
                            className="form-control"
                            maxLength="9"
                            placeholder="712345678"
                            aria-label="primary_phone_number"
                            required
                          />
                        </div>

                        <div className="mb-3">
                          <label
                            for="primary_phone_number_provider"
                            className="form-label"
                          >
                            Primary Phone Number Provider:
                          </label>
                          <select
                            value={
                              currentGroupMember.primary_phone_number_provider
                            }
                            onChange={handleGroupMemberChange}
                            name="primary_phone_number_provider"
                            className="form-control"
                            aria-label="Primary Phone Number Provider"
                            required
                          >
                            <option>
                              {currentGroupMember.primary_phone_number_provider}
                            </option>
                            <option value="Airtel">Airtel</option>
                            <option value="Safaricom">Safaricom</option>
                            <option value="Telkom">Telkom</option>
                          </select>
                        </div>

                        <div className="mb-3">
                          <label
                            for="alternative_phone_number"
                            className="form-label"
                          >
                            Alternative Phone Number:
                          </label>
                          <input
                            type="number"
                            value={currentGroupMember.alternative_phone_number}
                            onChange={handleGroupMemberChange}
                            name="alternative_phone_number"
                            className="form-control"
                            maxLength="9"
                            placeholder="712345678"
                            aria-label="alternative_phone_number"
                            required
                          />
                        </div>

                        <div className="mb-3">
                          <label
                            for="alternative_phone_number_provider"
                            className="form-label"
                          >
                            Alternative Phone Number Provider:
                          </label>
                          <select
                            onChange={handleGroupMemberChange}
                            name="alternative_phone_number_provider"
                            className="form-control"
                            aria-label="Alternative Phone Number Provider"
                            required
                          >
                            <option>
                              {
                                currentGroupMember.alternative_phone_number_provider
                              }
                            </option>
                            <option value="Airtel">Airtel</option>
                            <option value="Safaricom">Safaricom</option>
                            <option value="Telkom">Telkom</option>
                          </select>
                        </div>

                        <div className="mb-3">
                          <label for="year_of_birth" className="form-label">
                            Year of Birth:
                          </label>
                          <input
                            type="number"
                            value={currentGroupMember.year_of_birth}
                            onChange={handleGroupMemberChange}
                            name="year_of_birth"
                            className="form-control"
                            aria-label="year_of_birth"
                            maxLength="4"
                            required
                          />
                        </div>

                        <div className="mb-3">
                          <label for="gender" className="form-label">
                            Gender:
                          </label>
                          <select
                            onChange={handleGroupMemberChange}
                            name="gender"
                            className="form-control"
                            aria-label="Gender"
                            required
                          >
                            <option>{currentGroupMember.gender}</option>
                            <option value="Female">Female</option>
                            <option value="Male">Male</option>
                            <option value="Not Specified">Not Specified</option>
                          </select>
                        </div>

                        <div className="mb-3">
                          <label for="ward_id" className="form-label">
                            Ward:
                          </label>
                          <select
                            onChange={handleGroupMemberChange}
                            name="ward_id"
                            className="form-control"
                            aria-label="Ward"
                            required
                          >
                            <option>{currentGroupMember.ward_id}</option>
                            <option value="1">Ward 1</option>
                            <option value="2">Ward 2</option>
                          </select>
                        </div>

                        <div className="mb-3">
                          <label for="is_an_group_admin" className="form-label">
                            Group Administrator:
                          </label>
                          <select
                            onChange={handleGroupMemberChange}
                            name="is_an_group_admin"
                            className="form-control"
                            aria-label="is_an_group_admin"
                            required
                          >
                            <option>
                              {currentGroupMember.is_an_group_admin}
                            </option>
                            <option value="No">No</option>
                            <option value="Yes">Yes</option>
                          </select>
                        </div>
                      </div>

                      <hr />
                      <div className="mb-3">
                        <button
                          type="button"
                          onClick={updateGroupMember}
                          onChange={handleGroupMemberChange}
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

export default GroupMemberUpdate;
