import React, {Component, useRef } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {useState, useEffect} from 'react';
import { API_URL, headers } from '../components/egroup.service';

function MemberAdd() { 
            const initialMemberState = {
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

            const [member, setMember] = useState(initialMemberState);
            const [submitted, setSubmitted] = useState(false);

            const handlelMemberChange = (e) => {
              const { name, value } = e.target;
              setMember({ ...member, [name]: value });
            };

            const submitMember = () => {
              let data = {
                fullname: member.fullname,
                email: member.email,
                is_an_group_admin: member.is_an_group_admin,
                physical_address: member.physical_address,
                national_id: member.national_id,
                primary_phone_number: member.primary_phone_number,
                primary_phone_number_provider: member.primary_phone_number_provider,
                alternative_phone_number: member.alternative_phone_number,
                alternative_phone_number_provider: member.alternative_phone_number_provider,
                year_of_birth: member.year_of_birth,
                gender: member.gender,
                ward_id: member.ward_id,
              };

              axios.post(`${API_URL}/members/`, data, {
                  headers: {
                    headers,
                  },
                })
                .then((response) => {
                  setMember({
                    id: response.data.id,
                    fullname: response.data.fullname,
                    email: response.data.email,
                    is_an_group_admin: response.data.is_an_group_admin,
                    physical_address: response.data.physical_address,
                    national_id: response.data.national_id,
                    primary_phone_number: response.data.primary_phone_number,
                    primary_phone_number_provider: response.data.primary_phone_number_provider,
                    alternative_phone_number: response.data.alternative_phone_number,
                    alternative_phone_number_provider: response.data.alternative_phone_number_provider,
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

            const newMember = () => {
              setMember(initialMemberState);
              setSubmitted(false);
            };
          
          
        return (
            <div className="wrapper">
            <Header />
            <Sidebar />

<main class="page-content">
<div class="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
  <div class="breadcrumb-title pe-3">Group Member</div>
  <div class="ps-3">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb mb-0 p-0">
        <li class="breadcrumb-item"><a href="javascript:;"><i class="bx bx-home-alt"></i></a>
        </li>
        <li class="breadcrumb-item active" aria-current="page">Add</li>
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
          <h5 class="mb-0">Add New Group Member </h5><form class="ms-auto position-relative">
             <div class="position-absolute top-50 translate-middle-y search-icon px-3"><i class="bi bi-search"></i></div>
             <input class="form-control ps-5" type="text" placeholder="search" />
           </form>
       </div>
       <div class="table-responsive mt-3">

       <Link to={'/listmembers'} type="button"  class="btn btn-success">View List</Link>
       <br /> <br />
       {submitted ? (	<p>
       
        
        <div class="alert border-0 bg-light-success alert-dismissible fade show py-2">
                    <div class="d-flex align-items-center">
                      <div class="fs-3 text-success"><i class="bi bi-check-circle-fill"></i>
                      </div>
                      <div class="ms-3">
                        <div class="text-success">Member successfully added!</div>
                      </div>
                    </div>
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                  </div>
                  <hr />
                 <br />

        <Link onClick={newMember} type="button"  class="btn btn-success">Add Another Record</Link>

        <hr />



       </p>  ) : (
            <div class="row">
					<div class="col-xl-9 mx-auto">
						<h6 class="mb-0 text-uppercase">Add New Group Member</h6>

            <div class="card">
							<div class="card-body">


            <div class="mb-3">
                        <label for="fullname" class="form-label">Fullname:</label> 
                        <input 
                        type="text"  
                        value={member.fullname}
                        onChange={handlelMemberChange} 
                        name="fullname"
                        class="form-control" 
                        maxLength="100"  
                        aria-label="Fullname" 
                        required />
                      </div>  

                      <div class="mb-3">
                        <label for="email" class="form-label">Email:</label> 
                        <input 
                        type="email"  
                        value={member.email}
                        onChange={handlelMemberChange} 
                        name="email"
                        class="form-control" 
                        maxLength="100"  
                        aria-label="Email" 
                        required />
                      </div>  

                      <div class="mb-3">
                        <label for="physical_address" class="form-label">Physical_address:</label> 
                        <textarea 
                        onChange={handlelMemberChange}
                        value={member.physical_address}
                        name="physical_address"
                        class="form-control" 
                        aria-label="physical_address" 
                        maxLength="255"
                        required >
                          
                        </textarea>
                        
                      </div>  

                      <div class="mb-3">
                        <label for="national_id" class="form-label">National ID:</label> 
                        <input 
                        type="text"  
                        value={member.national_id}
                        onChange={handlelMemberChange} 
                        name="national_id"
                        class="form-control"
                        aria-label="National ID" 
                        maxLength="15"
                        required />
                      </div>  

                      <div class="mb-3">
                        <label for="primary_phone_number" class="form-label">Primary Phone Number:</label> 
                        <input 
                        type="number"  
                        value={member.primary_phone_number}
                        onChange={handlelMemberChange} 
                        name="primary_phone_number"
                        class="form-control" 
                        maxLength="9"
                        placeholder='712345678'
                        aria-label="primary_phone_number" 
                        required />
                      </div>  

                      <div class="mb-3">
                        <label for="primary_phone_number_provider" class="form-label">Primary Phone Number Provider:</label> 
                        <select    
                        value={member.primary_phone_number_provider}
                        onChange={handlelMemberChange} 
                        name="primary_phone_number_provider"
                        class="form-control" 
                        aria-label="Primary Phone Number Provider" 
                        required >
                          <option value="">Not Selected</option>
                          <option value="Airtel">Airtel</option>
                          <option value="Safaricom">Safaricom</option>
                          <option value="Telkom">Telkom</option>
                        </select>
                      </div>  

                      <div class="mb-3">
                        <label for="alternative_phone_number" class="form-label">Alternative Phone Number:</label> 
                        <input 
                        type="number"  
                        value={member.alternative_phone_number}
                        onChange={handlelMemberChange} 
                        name="alternative_phone_number"
                        class="form-control" 
                        maxLength="9"
                        placeholder='712345678'
                        aria-label="alternative_phone_number" 
                        required />
                      </div>  

                      <div class="mb-3">
                        <label for="alternative_phone_number_provider" class="form-label">Alternative Phone Number Provider:</label> 
                        <select    
                        value={member.alternative_phone_number_provider}
                        onChange={handlelMemberChange} 
                        name="alternative_phone_number_provider"
                        class="form-control" 
                        aria-label="Alternative Phone Number Provider" 
                        required >
                          <option value="">Not Selected</option>
                          <option value="Airtel">Airtel</option>
                          <option value="Safaricom">Safaricom</option>
                          <option value="Telkom">Telkom</option>
                        </select>
                      </div>  

                      <div class="mb-3">
                        <label for="year_of_birth" class="form-label">Year of Birth:</label> 
                        <input 
                        type="number"  
                        value={member.year_of_birth}
                        onChange={handlelMemberChange} 
                        name="year_of_birth"
                        class="form-control" 
                        aria-label="year_of_birth" 
                        maxLength="4"
                        required />
                      </div>  

                      <div class="mb-3">
                        <label for="gender" class="form-label">Gender:</label> 
                        <select    
                        value={member.gender}
                        onChange={handlelMemberChange} 
                        name="gender"
                        class="form-control" 
                        aria-label="Gender" 
                        required >
                          <option value="">Not Selected</option>
                          <option value="Female">Female</option>
                          <option value="Male">Male</option>
                          <option value="Not Specified">Not Specified</option>
                        </select>
                      </div>  

                      <div class="mb-3">
                        <label for="ward_id" class="form-label">Ward:</label> 
                        <select    
                        value={member.ward_id}
                        onChange={handlelMemberChange} 
                        name="ward_id"
                        class="form-control" 
                        aria-label="Ward" 
                        required >
                          <option value="">Not Selected</option>
                          <option value="1">Ward 1</option>
                          <option value="2">Ward 2</option>
                        </select>
                      </div> 

                      <div class="mb-3">
                        <label for="is_an_group_admin" class="form-label">Group Administrator:</label> 
                        <select    
                        value={member.is_an_group_admin}
                        onChange={handlelMemberChange} 
                        name="is_an_group_admin"
                        class="form-control" 
                        aria-label="is_an_group_admin" 
                        required >
                          <option value="">Not Selected</option>
                          <option value="No" >No</option>
                          <option value="Yes">Yes</option>
                        </select>
                      </div> 

							
                      </div>
                      <hr />
                      <div class="mb-3">
                        <button type="button" onClick={submitMember} onChange={handlelMemberChange}   class="btn btn-primary ">Submit</button>
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
)

}

export default MemberAdd;