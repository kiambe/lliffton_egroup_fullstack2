import React, {Component, useRef } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {useState, useEffect} from 'react';
import { API_URL, headers } from '../components/egroup.service';
import { useNavigate } from "react-router-dom";

function LoanList() { 
            const [deleted, setDeleted] = useState(false);
            const navigate = useNavigate();
            const countRef = useRef(0);
            const [loans, setLoans] = useState([]);
            const [totalresults, setTotalResults] = useState(0);
            
          useEffect(() => {
            retrieveAllLoans();
          }, [countRef]);
          
          const retrieveAllLoans = () => {
            axios.get(`${API_URL}/loans/`, {
              headers: {
                  headers,
                },
              })
              .then((response) => {
                setLoans(response.data.results);
              })
              .catch((e) => {
                console.error(e);
              });
          };

          

          const deleteLoanProduct = (id) => {
            axios
              .delete(`${API_URL}/loans/${id}/`, {
                headers: {
                  headers,
                },
              })
              .then((response) => {
                setDeleted(true);
                retrieveAllLoans();
                
              })
              .catch((e) => {
                console.error(e);
              });
          };

          
          const handleUpdateClick = (id) => {
            navigate(`/updateloan/${id}/update/`);
          };

          const handleViewClick = (id) => {
            navigate(`/viewloan/${id}/view/`);
          };

          function changeUrl(API_URL){
           // setbaseUrl(API_URL);
            
          };

          var links=[];
          for(let i=1; i<=totalresults; i++){
            links.push(<li class="page-item"><Link class='page-link' onClick={() =>changeUrl(API_URL+`/listloans/?page=${i}`)} to={`/listloans/?page=${i}`}>{i}</Link></li>)
          };
          

        return (
            <div className="wrapper">
            <Header />
            <Sidebar />

<main class="page-content">
<div class="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
  <div class="breadcrumb-title pe-3">Loans</div>
  <div class="ps-3">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb mb-0 p-0">
        <li class="breadcrumb-item"><a href="javascript:;"><i class="bx bx-home-alt"></i></a>
        </li>
        <li class="breadcrumb-item active" aria-current="page">List</li>
      </ol>
    </nav>
  </div>
  <div class="ms-auto">
    <div class="btn-group">
      <button type="button" class="btn btn-primary">Settings</button>
      <button type="button" class="btn btn-primary split-bg-primary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown">	<span class="visually-hidden">Toggle Dropdown</span>
      </button>
      <div class="dropdown-menu dropdown-menu-right dropdown-menu-lg-end">	<a class="dropdown-item" href="javascript:;">Action</a>
        <a class="dropdown-item" href="javascript:;">Another action</a>
        <a class="dropdown-item" href="javascript:;">Something else here</a>
        <div class="dropdown-divider"></div>	<a class="dropdown-item" href="javascript:;">Separated link</a>
      </div>
    </div>
  </div>
</div>
   <div class="card">
     <div class="card-body">
       <div class="d-flex align-items-center">
          <h5 class="mb-0">Listing</h5><form class="ms-auto position-relative">
             <div class="position-absolute top-50 translate-middle-y search-icon px-3"><i class="bi bi-search"></i></div>
             <input class="form-control ps-5" type="text" placeholder="search" />
           </form>
       </div>
       <div class="table-responsive mt-3">


   <hr />

                 {deleted && (

<div class="alert border-0 bg-light-danger alert-dismissible fade show py-2">
<div class="d-flex align-items-center">
  <div class="fs-3 text-danger"><i class="bi bi-x-circle-fill"></i>
  </div>
  <div class="ms-3">
    <div class="text-danger">Record deleted!</div>
  </div>
</div>
<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>

)}





        
         <table class="table align-middle">
           <thead class="table-secondary">
             <tr>
              <th>#</th>
              <th>Name</th>
              <th>Amount Taken</th>
              <th>Amount Due</th>
              <th>Duration</th>
              <th>Interest</th>
              
              <th>Loan Type</th>
              <th>Approved</th>
              <th>Approved date</th>
              <th>Actions</th>
             </tr>
           </thead>
           <tbody>         
           {loans.map((loan)=>            
                        <tr>
                        <td>-</td>
                        <td>
                          <div class="d-flex align-items-center gap-3 cursor-pointer">
                              <div class="">
                                <p class="mb-0">{loan.group_id.name} <br />
                                {loan.group_member_id.fullname}<br />
                                {loan.group_member_id.primary_phone_number}
                                
                                </p>
                              </div>
                          </div>
                        </td>
                        <td>{loan.amount}</td>
                        <td>{loan.amount_due}</td>
                        <td>{loan.duration_days}</td>
                        <td>{loan.interest}</td> 
                        <td>{loan.loan_type}</td>                        
                        <td><span class="badge bg-light-danger text-danger w-100">{loan.approved}</span></td>
                        <td>{loan.approved_date}</td>
                        <td>
                          <div class="table-actions d-flex align-items-center gap-3 fs-6">
                          
                            <button  onClick={() => handleUpdateClick(loan.id)} class="text-warning" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Approve"><i class="bi bi-pencil-fill"></i></button>
                         


    <div class="modal fade" id="deleteModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
											
                      <div class="modal-dialog">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Warning</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                          </div>
                          <div class="modal-body">Record will no longer be available</div>
                          <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button onClick={() => deleteLoanProduct(loan.id)} type="button" class="btn btn-danger">Confirm Delete</button>
                          </div>
                        </div>
                      </div>
                </div>

                






                          </div>
                        </td>
                        </tr>           
                  )}        
           </tbody>
         </table>
         <hr />
         <nav aria-label="Page navigation example">

                      <ul class="pagination">
                        {links}   
                      </ul>
                    </nav>



                    







       </div>
     </div>
   </div>
</main>
<Footer />
</div>
)

}

export default LoanList;