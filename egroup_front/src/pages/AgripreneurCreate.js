import React, { Component } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

export default class AgripreneurCreate extends Component {
  render() {
    return (
      <div className="wrapper">
        <Header />
        <Sidebar />

        <main className="page-content">
          <div className="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
            <div className="breadcrumb-title pe-3">Agripreneur</div>
            <div className="ps-3">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb mb-0 p-0">
                  <li className="breadcrumb-item">
                    <a href="javascript:;">
                      <i className="bx bx-home-alt"></i>
                    </a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Create New
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
              <div className="p-4 border rounded">
                <form className="was-validated">
                  <div className="mb-3">
                    <label for="validationTextarea" className="form-label">
                      Textarea
                    </label>
                    <textarea
                      className="form-control is-invalid"
                      id="validationTextarea"
                      placeholder="Required example textarea"
                      required
                    ></textarea>
                    <div className="invalid-feedback">
                      Please enter a message in the textarea.
                    </div>
                  </div>
                  <div className="form-check mb-3">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="validationFormCheck1"
                      required
                    />
                    <label
                      className="form-check-label"
                      for="validationFormCheck1"
                    >
                      Check this checkbox
                    </label>
                    <div className="invalid-feedback">
                      Example invalid feedback text
                    </div>
                  </div>
                  <div className="form-check">
                    <input
                      type="radio"
                      className="form-check-input"
                      id="validationFormCheck2"
                      name="radio-stacked"
                      required
                    />
                    <label
                      className="form-check-label"
                      for="validationFormCheck2"
                    >
                      Toggle this radio
                    </label>
                  </div>
                  <div className="form-check mb-3">
                    <input
                      type="radio"
                      className="form-check-input"
                      id="validationFormCheck3"
                      name="radio-stacked"
                      required
                    />
                    <label
                      className="form-check-label"
                      for="validationFormCheck3"
                    >
                      Or toggle this other radio
                    </label>
                    <div className="invalid-feedback">
                      More example invalid feedback text
                    </div>
                  </div>
                  <div className="mb-3">
                    <select
                      className="form-select"
                      required
                      aria-label="select example"
                    >
                      <option value="">Open this select menu</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                    <div className="invalid-feedback">
                      Example invalid select feedback
                    </div>
                  </div>
                  <div className="mb-3">
                    <input
                      type="file"
                      className="form-control"
                      aria-label="file example"
                      required
                    />
                    <div className="invalid-feedback">
                      Example invalid form file feedback
                    </div>
                  </div>
                  <div className="mb-3">
                    <button className="btn btn-primary" type="submit" disabled>
                      Submit form
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}
