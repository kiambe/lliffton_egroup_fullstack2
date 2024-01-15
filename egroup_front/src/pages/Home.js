import React, {Component, useState, useEffect, useRef} from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { API_URL, headers } from '../components/egroup.service';

function Home(){

              const [stats, setStats] = useState([]);
              const navigate = useNavigate();
              const countRef = useRef(0);

              useEffect(() => {
                retrieveAllStats();
              }, [countRef]);

              const retrieveAllStats = () => {
                axios.get(`${API_URL}/stats/`, {
                  headers: {
                      headers,
                    },
                  })
                  .then((response) => {
                    setStats(response.data);
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
          {/* {JSON.stringify(stats.total_loan_amount.amount__sum)} */}
           
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2 row-cols-xl-4">
              <div className="col">
                <div className="card radius-10">
                  <div className="card-body">
                      <div className="d-flex align-items-center">
                          <div>
                              <p className="mb-0 text-secondary">Total Members</p>
                              <h4 className="my-1">{stats.members_count}</h4>
                              <p className="mb-0 font-13 text-success"><i className="bi bi-caret-up-fill"></i> _% from last week</p>
                          </div>
                          <div className="widget-icon-large bg-gradient-purple text-white ms-auto"><i className="bi bi-people-fill"></i>
                          </div>
                      </div>
                  </div>
                </div>
               </div>
              
               <div className="col">
                <div className="card radius-10">
                  <div className="card-body">
                      <div className="d-flex align-items-center">
                          <div>
                              <p className="mb-0 text-secondary">Loan Products</p>
                              <h4 className="my-1">{stats.no_of_loans}</h4>
                              <p className="mb-0 font-13 text-danger"><i className="bi bi-caret-down-fill"></i> _ from last week</p>
                          </div>
                          <div className="widget-icon-large bg-gradient-danger text-white ms-auto"><i className="bi bi-basket2-fill"></i>
                          </div>
                      </div>
                  </div>
               </div>
               </div>
               <div className="col">
                  <div className="card radius-10">
                    <div className="card-body">
                        <div className="d-flex align-items-center">
                            <div>
                                <p className="mb-0 text-secondary">Total Loan Disbursed</p> 
                                <h4 className="my-1">0</h4>
                                <p className="mb-0 font-13 text-success"><i className="bi bi-caret-up-fill"></i> _from last week</p>
                            </div>
                            <div className="widget-icon-large bg-gradient-success text-white ms-auto"><i className="bi bi-currency-exchange"></i>
                            </div>
                        </div>
                    </div>
                </div>
               </div>
               <div className="col">
                <div className="card radius-10">
                  <div className="card-body">
                      <div className="d-flex align-items-center">
                          <div>
                              <p className="mb-0 text-secondary">Total Amount Due</p>
                              <h4 className="my-1">0</h4>
                              <p className="mb-0 font-13 text-success"><i className="bi bi-caret-up-fill"></i> _% from last week</p>
                              </div>
                              <div className="widget-icon-large bg-gradient-success text-white ms-auto"><i className="bi bi-currency-exchange"></i>
                              </div>
                          </div>                         
                      </div>
                  </div>
                </div>
               
            </div>
   

          </main>
          <Footer />
          
          </div>
          )
    }



export default Home;
