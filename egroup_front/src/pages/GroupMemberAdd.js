import React, {Component, useRef } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {useState, useEffect} from 'react';
import { API_URL, headers } from '../components/egroup.service';

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

              axios.post(`${API_URL}/group_members/`, data, {
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

       <Link to={'/listgroupmembers'} type="button"  class="btn btn-success">View List</Link>
       <br /> <br />
       {submitted ? (	<p>
       
        
        <div class="alert border-0 bg-light-success alert-dismissible fade show py-2">
                    <div class="d-flex align-items-center">
                      <div class="fs-3 text-success"><i class="bi bi-check-circle-fill"></i>
                      </div>
                      <div class="ms-3">
                        <div class="text-success">Group Member successfully added!</div>
                      </div>
                    </div>
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                  </div>
                  <hr />
                 <br />

        <Link onClick={newGroupMember} type="button"  class="btn btn-success">Add Another Record</Link>

        <hr />



       </p>  ) : (
            <div class="row">
					<div class="col-xl-9 mx-auto">
						<h6 class="mb-0 text-uppercase">Add New Group Member</h6>

            <div class="card">
							<div class="card-body">


            <div class="mb-3">
                        <label for="member" class="form-label">Member:</label> 
                        <input 
                        type="text"  
                        value={groupmember.member}
                        onChange={handlelGroupMemberChange} 
                        name="member"
                        class="form-control" 
                        maxLength="100"  
                        aria-label="Member" 
                        required />
                      </div>  

                      <div class="mb-3">
                        <label for="group" class="form-label">Group:</label> 
                        <input 
                        type="text"  
                        value={groupmember.group}
                        onChange={handlelGroupMemberChange} 
                        name="group"
                        class="form-control" 
                        maxLength="100"  
                        aria-label="Group" 
                        required />
                      </div>  

                   

							
                      </div>
                      <hr />
                      <div class="mb-3">
                        <button type="button" onClick={submitGroupMember} onChange={handlelGroupMemberChange}   class="btn btn-primary ">Submit</button>
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

export default GroupMemberAdd;