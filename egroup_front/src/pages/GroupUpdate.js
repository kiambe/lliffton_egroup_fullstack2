import React, {Component, useRef, useState, useEffect } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import { Link, useParams  } from 'react-router-dom';
import { API_URL, headers } from '../components/egroup.service';
const axios = require("axios");


function GroupUpdate() { 
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
            const [submitted, setSubmitted] = useState(false);


            useEffect(() => {
              retrieveGroup();
            }, [countRef]);
            const handleGroupChange = (e) => {
              const { name, value } = e.target;
              setCurrentGroup({ ...currentGroup, [name]: value });
            };
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
                    mpesa_paybill_busines_number: response.data.mpesa_paybill_busines_number,
                    mpesa_paybill_account_number: response.data.mpesa_paybill_account_number,
                    secretary_name: response.data.secretary_name,
                    secretary_phone: response.data.secretary_phone,
                    opportunity: response.data.opportunity,
                    ward_id: response.data.ward_id
                  });
                  console.log(currentGroup);
                })
                .catch((e) => {
                  console.error(e);
                });
            };
            const updateGroup = () => {
              let data = {
                    name: currentGroup.name,
                    special_code: currentGroup.special_code,
                    group_type: currentGroup.group_type,
                    business_activity: currentGroup.business_activity,
                    bank_name: currentGroup.bank_name,
                    bank_services: currentGroup.bank_services,
                    mpesa_tillnumber: currentGroup.mpesa_tillnumber,
                    mpesa_paybill_busines_number: currentGroup.mpesa_paybill_busines_number,
                    mpesa_paybill_account_number: currentGroup.mpesa_paybill_account_number,
                    secretary_name: currentGroup.secretary_name,
                    secretary_phone: currentGroup.secretary_phone,
                    opportunity: currentGroup.opportunity,
                    ward_id: currentGroup.ward_id

              };
              axios
                .put(`${API_URL}/groups/${id}/`, data, {
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
                    mpesa_paybill_busines_number: response.data.mpesa_paybill_busines_number,
                    mpesa_paybill_account_number: response.data.mpesa_paybill_account_number,
                    secretary_name: response.data.secretary_name,
                    secretary_phone: response.data.secretary_phone,
                    opportunity: response.data.opportunity,
                    ward_id: response.data.ward_id
                  });
                  setSubmitted(true);
                  console.log(response.data);
                })
                .catch((e) => {
                  console.error(e);
                });
            };
            const newGroup = () => {
              setCurrentGroup(initialGroupState);
              setSubmitted(false);
            };


          
          
        return (
            <div className="wrapper">
            <Header />
            <Sidebar />

<main class="page-content">
<div class="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
  <div class="breadcrumb-title pe-3">Group</div>
  <div class="ps-3">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb mb-0 p-0">
        <li class="breadcrumb-item"><a href="javascript:;"><i class="bx bx-home-alt"></i></a>
        </li>
        <li class="breadcrumb-item active" aria-current="page">Update</li>
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
          <h5 class="mb-0">Update Group </h5><form class="ms-auto position-relative">
             <div class="position-absolute top-50 translate-middle-y search-icon px-3"><i class="bi bi-search"></i></div>
             <input class="form-control ps-5" type="text" placeholder="search" />
           </form>
       </div>
       <div class="table-responsive mt-3">

       <Link to={'/listgroups'} type="button"  class="btn btn-success">View List</Link>
       <br /> <br />
       {submitted ? (	<p>
       
        
        <div class="alert border-0 bg-light-success alert-dismissible fade show py-2">
                    <div class="d-flex align-items-center">
                      <div class="fs-3 text-success"><i class="bi bi-check-circle-fill"></i>
                      </div>
                      <div class="ms-3">
                        <div class="text-success">Group successfully updated!</div>
                      </div>
                    </div>
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                  </div>
                  <hr />
                 <br />

        <Link onClick={newGroup} type="button"  class="btn btn-success">Add Another Record</Link>

        <hr />



       </p>  ) : (
            <div class="row">
					<div class="col-xl-9 mx-auto">
						<h6 class="mb-0 text-uppercase">Update Group</h6>

            <div class="card">
							

                      <div class="card-body">
            <div class="mb-3">
                        <label for="name" class="form-label">Name:</label> 
                        <input type="text"  value={currentGroup.name}
                        name="name" 
                        onChange={handleGroupChange} 
                        class="form-control" maxLength="100"  aria-label="Name" required />
                      </div>  
                    <div class="mb-3">
                        <label for="special_code" class="form-label">Special code:</label> 
                        <input name='special_code' onChange={handleGroupChange}    value={currentGroup.special_code} type="text" class="form-control"  id='special_code' aria-label="special_code" required />
                      </div> 
                     
                      <div class="mb-3">
                        <label for="opportunity" class="form-label">Opportunity:</label> 
                        <textarea
                        name='opportunity' 
                        onChange={handleGroupChange}  
                        id='opportunity' 
                        class="form-control" 
                        value={currentGroup.opportunity} 
                        aria-label="opportunity" 
                        required
                        
                        >
                          
                          </textarea> 
                      
                      
                      </div>
                    
                      <div class="mb-3">
                        <label for="group_type" class="form-label">Group type:</label> 
                        <select
                        onChange={handleGroupChange}  class="form-control" 
                        name='group_type'   
                        id='group_type' 
                        value={currentGroup.group_type}    
                        aria-label="group type" 
                        required>                          
                          <option>{currentGroup.group_type}</option>
                          <option value="Youth Group" >Youth Group</option>
                          <option value="Women Group" >Women Group</option>
                          <option value="Men Group" >Men Group</option>
                          <option value="Mixed Group" >Mixed Group</option>

                        </select>
                       
                        </div>

                        <div class="mb-3">
                        <label for="business_activity" class="form-label">Business activity:</label> 
                       <input type='text' onChange={handleGroupChange}  class="form-control" name='business_activity'   id='business_activity' value={currentGroup.business_activity}    aria-label="group type" required />
                        
                        </div>
                        <hr />

                        <div class="mb-3">
                        <label for="bank_name" class="form-label">Bank name:</label> 
                        <input type="text" id='bank_name' onChange={handleGroupChange}   name='bank_name' value={currentGroup.bank_name}  class="form-control"  aria-label="bank_name" />
                      </div> 
                      <div class="mb-3">
                        <label for="mpesa_tillnumber" class="form-label">MPesa  Till Number:</label> 
                        <input type="number" name='mpesa_tillnumber' onChange={handleGroupChange}   id='mpesa_tillnumber' value={currentGroup.mpesa_tillnumber}  class="form-control"  aria-label="mpesa_tillnumber" required />
                      </div> 

                      <div class="mb-3">
                        <label for="mpesa_paybill_busines_number" class="form-label">Mpesa Paybill/Busines Number:</label> 
                        <input type="number" onChange={handleGroupChange}   name='mpesa_paybill_busines_number' value={currentGroup.mpesa_paybill_busines_number}  id='mpesa_paybill_busines_number' class="form-control" maxLength="15" placeholder="0" aria-label="mpesa_paybill_busines_number" required />
                      </div> 
                      <div class="mb-3">
                        <label for="mpesa_paybill_account_number" class="form-label">Mpesa Paybill Account Number:</label> 
                        <input type="text" name='mpesa_paybill_account_number' onChange={handleGroupChange}   id='mpesa_paybill_account_number' class="form-control" value={currentGroup.mpesa_paybill_account_number} aria-label="mpesa_paybill_account_number" required />
                      </div> 
                      <hr />

                      <div class="mb-3">
                        <label for="secretary_name" class="form-label">Secretary's Name:</label> 
                        <input type="text" name='secretary_name'  onChange={handleGroupChange}  id='secretary_name' class="form-control" value={currentGroup.secretary_name} maxLength="40" aria-label="secretary_name" required />
                      </div>

                      <div class="mb-3">
                        <label for="secretary_phone" class="form-label">Secretary's Phone Contact:</label> 
                        <input type="phone" name='secretary_phone'   id='secretary_phone' class="form-control" value={currentGroup.secretary_phone} aria-label="secretary_phone" required />
                      </div>

                      <div class="mb-3">
                        <label for="ward" class="form-label">Ward:</label> 
                        <input type="text" name='ward' onChange={handleGroupChange}   id='ward' class="form-control" value={currentGroup.ward} aria-label="ward" required />
                     
                        </div>


                      </div>







                      <hr />
                      <div class="mb-3">
                        <button type="button" onClick={updateGroup} onChange={handleGroupChange}   class="btn btn-primary ">Submit</button>
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

export default GroupUpdate;