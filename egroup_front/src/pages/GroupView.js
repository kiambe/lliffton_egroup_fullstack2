import React, { Component, useRef, useState, useEffect } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import { Link, useParams } from "react-router-dom";
import { API_URL, headers } from "../components/egroup.service";
const axios = require("axios");

function GroupView() {
  const initialGroupState = {
    id: null,
    name: "",
    special_code: "",
    group_type: "",
    business_activity: "",
    bank_name: "",
    bank_services: null,
    mpesa_tillnumber: "",
    mpesa_paybill_busines_number: null,
    mpesa_paybill_account_number: null,
    secretary_name: "",
    secretary_phone: "",
    opportunity: null,
    ward_id: null,
  };

  let { id } = useParams();
  const [currentGroup, setCurrentGroup] = useState(initialGroupState);
  const countRef = useRef(0);

  useEffect(() => {
    retrieveGroup();
  }, [countRef]);

  const retrieveGroup = () => {
    axios
      .get(`${API_URL}/groups/${id}/`, {
        headers: {
          headers,
        },
      })
      .then((response) => {
        setCurrentGroup({
          id: response.data.id,
          name: response.data.name,
          special_code: response.data.special_code,
          group_type: response.data.group_type,
          business_activity: response.data.business_activity,
          bank_name: response.data.bank_name,
          bank_services: response.data.bank_services,
          mpesa_tillnumber: response.data.mpesa_tillnumber,
          mpesa_paybill_busines_number:
            response.data.mpesa_paybill_busines_number,
          mpesa_paybill_account_number:
            response.data.mpesa_paybill_account_number,
          secretary_name: response.data.secretary_name,
          secretary_phone: response.data.secretary_phone,
          opportunity: response.data.opportunity,
          ward_id: response.data.ward_id,
        });
        console.log(currentGroup);
      })
      .catch((e) => {
        console.error(e);
      });
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
              <h5 className="mb-0">View Group Member </h5>
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
              <Link to={"/listgroups"} type="button" className="btn btn-success">
                View List
              </Link>
              <br /> <br />
              <div className="row">
                <div className="col-xl-9 mx-auto">
                  <h6 className="mb-0 text-uppercase">View Group Member</h6>

                  <div className="card">
                    <div className="card-body">
                      <div className="mb-3">
                        <label for="name" className="form-label">
                          Name:
                        </label>
                        <input
                          type="text"
                          value={currentGroup.name}
                          name="name"
                          disabled
                          className="form-control"
                          maxLength="100"
                          aria-label="Name"
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label for="special_code" className="form-label">
                          Special code:
                        </label>
                        <input
                          name="special_code"
                          disabled
                          value={currentGroup.special_code}
                          type="text"
                          className="form-control"
                          id="special_code"
                          aria-label="special_code"
                          required
                        />
                      </div>

                      <div className="mb-3">
                        <label for="opportunity" className="form-label">
                          Opportunity:
                        </label>
                        <input
                          type="text"
                          name="opportunity"
                          disabled
                          id="opportunity"
                          className="form-control"
                          value={currentGroup.opportunity}
                          aria-label="opportunity"
                          required
                        />
                      </div>

                      <div className="mb-3">
                        <label for="group_type" className="form-label">
                          Group type:
                        </label>
                        <input
                          type="text"
                          disabled
                          className="form-control"
                          name="group_type"
                          id="group_type"
                          value={currentGroup.group_type}
                          aria-label="group type"
                          required
                        />
                      </div>

                      <div className="mb-3">
                        <label for="business_activity" className="form-label">
                          Business activity:
                        </label>
                        <input
                          type="text"
                          disabled
                          className="form-control"
                          name="business_activity"
                          id="business_activity"
                          value={currentGroup.business_activity}
                          aria-label="group type"
                          required
                        />
                      </div>
                      <hr />

                      <div className="mb-3">
                        <label for="bank_name" className="form-label">
                          Bank name:
                        </label>
                        <input
                          type="text"
                          id="bank_name"
                          disabled
                          name="bank_name"
                          value={currentGroup.bank_name}
                          className="form-control"
                          aria-label="bank_name"
                        />
                      </div>
                      <div className="mb-3">
                        <label for="mpesa_tillnumber" className="form-label">
                          MPesa Till Number:
                        </label>
                        <input
                          type="number"
                          name="mpesa_tillnumber"
                          disabled
                          id="mpesa_tillnumber"
                          value={currentGroup.mpesa_tillnumber}
                          className="form-control"
                          aria-label="mpesa_tillnumber"
                          required
                        />
                      </div>

                      <div className="mb-3">
                        <label
                          for="mpesa_paybill_busines_number"
                          className="form-label"
                        >
                          Mpesa Paybill/Busines Number:
                        </label>
                        <input
                          type="number"
                          name="mpesa_paybill_busines_number"
                          value={currentGroup.mpesa_paybill_busines_number}
                          id="mpesa_paybill_busines_number"
                          className="form-control"
                          maxLength="15"
                          placeholder="0"
                          aria-label="mpesa_paybill_busines_number"
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label
                          for="mpesa_paybill_account_number"
                          className="form-label"
                        >
                          Mpesa Paybill Account Number:
                        </label>
                        <input
                          type="text"
                          name="mpesa_paybill_account_number"
                          disabled
                          id="mpesa_paybill_account_number"
                          className="form-control"
                          value={currentGroup.mpesa_paybill_account_number}
                          aria-label="mpesa_paybill_account_number"
                          required
                        />
                      </div>
                      <hr />

                      <div className="mb-3">
                        <label for="secretary_name" className="form-label">
                          Secretary's Name:
                        </label>
                        <input
                          type="text"
                          name="secretary_name"
                          disabled
                          id="secretary_name"
                          className="form-control"
                          value={currentGroup.secretary_name}
                          maxLength="40"
                          aria-label="secretary_name"
                          required
                        />
                      </div>

                      <div className="mb-3">
                        <label for="secretary_phone" className="form-label">
                          Secretary's Phone Contact:
                        </label>
                        <input
                          type="phone"
                          name="secretary_phone"
                          disabled
                          id="secretary_phone"
                          className="form-control"
                          value={currentGroup.secretary_phone}
                          aria-label="secretary_phone"
                          required
                        />
                      </div>

                      <div className="mb-3">
                        <label for="ward" className="form-label">
                          Ward:
                        </label>
                        <input
                          type="text"
                          name="ward"
                          disabled
                          id="ward"
                          className="form-control"
                          value={currentGroup.ward}
                          aria-label="ward"
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

export default GroupView;
