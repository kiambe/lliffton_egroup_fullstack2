import React, {Component} from 'react';
import { Link } from 'react-router-dom';

export default class Error404 extends Component {
    render(){
        return (
        <main className="page-content">
            <div className="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
              <div className="breadcrumb-title pe-3">Page Not Found</div>
              <div className="ps-3">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb mb-0 p-0">
                    <li className="breadcrumb-item"><a href="javascript:;"><i className="bx bx-home-alt"></i></a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">404 Error</li>
                  </ol>
                </nav>
              </div>
             
            </div>
            <div className="error-404 d-flex align-items-center justify-content-center">
              <div className="container">
                <div className="card py-5">
                  <div className="row g-0">
                    <div className="col col-xl-5">
                      <div className="card-body p-4">
                        <h1 className="display-1"><span className="text-danger">4</span><span className="text-primary">0</span><span className="text-success">4</span></h1>
                        <h2 className="font-weight-bold display-4">Lost in Space</h2>
                        <p>You have reached the edge of the universe.
                          <br />The page you requested could not be found.
                          <br />Dont'worry, return to the previous page or go Home.</p>
                        <div className="mt-5"> <Link to="/home" className="btn btn-primary btn-lg px-md-5 radius-30">Go Home</Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-7">
                      <img src="assets/images/error/404-error.png" className="img-fluid" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>


          )
    }
}