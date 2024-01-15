import React, {Component, useRef } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import {useState, useEffect} from 'react';
import { API_URL, headers } from '../components/egroup.service';
const axios = require("axios");

function GroupAdd() { 

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

            const [group, setGroup] = useState(initialGroupState);
            const [submitted, setSubmitted] = useState(false);

            const handlelGroupChange = (e) => {
              const { name, value } = e.target;
              setGroup({ ...group, [name]: value });
            };

            const submitGroup = () => {
              let data = {               
                name: group.name,
                special_code: group.special_code,
                group_type: group.group_type,
                business_activity: group.business_activity,
                bank_name: group.bank_name,
                bank_services: group.bank_services,
                mpesa_tillnumber: group.mpesa_tillnumber,
                mpesa_paybill_busines_number: group.mpesa_paybill_busines_number,
                mpesa_paybill_account_number: group.mpesa_paybill_account_number,
                secretary_name: group.secretary_name,
                secretary_phone: group.secretary_phone,
                opportunity: group.opportunity,
                ward_id: group.ward_id,
              };

              axios.post(`${API_URL}/groups/`, data, {
                  headers: {
                    headers,
                  },
                })
                .then((response) => {
                  setGroup({
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
              setGroup(initialGroupState);
              setSubmitted(false);
            };
          
          
        return (
            <div className="wrapper">
            <Header />
            <Sidebar />

<main className="page-content">
<div className="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
  <div className="breadcrumb-title pe-3">Group</div>
  <div className="ps-3">
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb mb-0 p-0">
        <li className="breadcrumb-item"><a href="javascript:;"><i className="bx bx-home-alt"></i></a>
        </li>
        <li className="breadcrumb-item active" aria-current="page">List</li>
      </ol>
    </nav>
  </div>
  <div className="ms-auto">
    <div className="btn-group">
      <button type="button" className="btn btn-primary">Settings</button>
      <button type="button" className="btn btn-primary split-bg-primary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown">	<span className="visually-hidden">Toggle Dropdown</span>
      </button>
      <div className="dropdown-menu dropdown-menu-right dropdown-menu-lg-end">	<a className="dropdown-item" href="javascript:;">Action</a>
        <a className="dropdown-item" href="javascript:;">Another action</a>
        <a className="dropdown-item" href="javascript:;">Something else here</a>
        <div className="dropdown-divider"></div>	<a className="dropdown-item" href="javascript:;">Separated link</a>
      </div>
    </div>
  </div>
</div>

   <div className="card">
     <div className="card-body">
       <div className="d-flex align-items-center">
          <h5 className="mb-0">Add New Group</h5><form className="ms-auto position-relative">
             <div className="position-absolute top-50 translate-middle-y search-icon px-3"><i className="bi bi-search"></i></div>
             <input className="form-control ps-5" type="text" placeholder="search" />
           </form>
       </div>
       <div className="table-responsive mt-3">

       <Link to={'/listgroups'} type="button"  className="btn btn-success">View List</Link>
       <br /> <br />
       {submitted ? (	<p>
       
        
        <div className="alert border-0 bg-light-success alert-dismissible fade show py-2">
                    <div className="d-flex align-items-center">
                      <div className="fs-3 text-success"><i className="bi bi-check-circle-fill"></i>
                      </div>
                      <div className="ms-3">
                        <div className="text-success">Group successfully added!</div>
                      </div>
                    </div>
                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                  </div>
                  <hr />
                 <br />

        <Link onClick={newGroup} type="button"  className="btn btn-success">Add Another Record</Link>

        <hr />



       </p>  ) : (
            <div className="row">
					<div className="col-xl-9 mx-auto">
						<h6 className="mb-0 text-uppercase">Add New Group</h6>

            <div className="card">
							<div className="card-body">


            <div className="mb-3">
                        <label for="name" className="form-label">Name:</label> 
                        <input type="text"  value={group.name}
                        onChange={handlelGroupChange} 
                        name="name"
                        className="form-control" maxLength="100"  aria-label="Name" required />
                      </div>  
                    <div className="mb-3">
                        <label for="special_code" className="form-label">Special code:</label> 
                        <input name='special_code' onChange={handlelGroupChange}  value={group.special_code} type="text" className="form-control" maxLength="4" placeholder="special_code" id='special_code' aria-label="special_code" required />
                      </div> 
                     
                      <div className="mb-3">
                        <label for="opportunity" className="form-label">Opportunity:</label>
                        <textarea

name='opportunity' onChange={handlelGroupChange}  id='opportunity' className="form-control" value={group.opportunity} aria-label="opportunity" required
                        
                        >
                          
                          </textarea> 
                      </div>
                    
                      <div className="mb-3">
                        <label for="group_type" className="form-label">Group type:</label> 
                        <select  className="form-control" name='group_type' onChange={handlelGroupChange}  id='group_type' value={group.group_type}    aria-label="group type" required>
                        <option value={null} >No Selection</option>
                          <option value="Youth Group" >Youth Group</option>
                          <option value="Women Group" >Women Group</option>
                          <option value="Men Group" >Men Group</option>
                          <option value="Mixed Group" >Mixed Group</option>
                        </select>
                        </div>

                        <div className="mb-3">
                        <label for="business_activity" className="form-label">Business activity:</label> 
                        <select  className="form-control" name='business_activity' onChange={handlelGroupChange}  id='business_activity' value={group.business_activity}    aria-label="business_activity" required>
                        <option value={null} >No Selection</option>
                          <option value="Producers" >Producers</option>
                          <option value="Processors" >Processors</option>
                          <option value="Aggregators" >Aggregators</option>
                          <option value="Traders" >Traders</option>
                        </select>
                        </div>
                        <hr />

                        <div className="mb-3">
                        <label for="bank_name" className="form-label">Bank name:</label> 
                        <input type="text" id='bank_name' onChange={handlelGroupChange}  name='bank_name' value={group.bank_name}  className="form-control"  aria-label="bank_name" />
                      </div> 
                      <div className="mb-3">
                        <label for="mpesa_tillnumber" className="form-label">MPesa  Till Number:</label> 
                        <input type="number" name='mpesa_tillnumber' onChange={handlelGroupChange}  id='mpesa_tillnumber' value={group.mpesa_tillnumber}  className="form-control"  aria-label="mpesa_tillnumber" required />
                      </div> 

                      <div className="mb-3">
                        <label for="mpesa_paybill_busines_number" className="form-label">Mpesa Paybill/Busines Number:</label> 
                        <input type="number" name='mpesa_paybill_busines_number' value={group.mpesa_paybill_busines_number}  id='mpesa_paybill_busines_number' className="form-control" maxLength="15" placeholder="0" aria-label="mpesa_paybill_busines_number" required />
                      </div> 
                      <div className="mb-3">
                        <label for="mpesa_paybill_account_number" className="form-label">Mpesa Paybill Account Number:</label> 
                        <input type="text" name='mpesa_paybill_account_number' onChange={handlelGroupChange}  id='mpesa_paybill_account_number' className="form-control" value={group.mpesa_paybill_account_number} aria-label="mpesa_paybill_account_number" required />
                      </div> 
                      <hr />

                      <div className="mb-3">
                        <label for="secretary_name" className="form-label">Secretary's Name:</label> 
                        <input type="text" name='secretary_name' onChange={handlelGroupChange}  id='secretary_name' className="form-control" value={group.secretary_name} maxLength="40" aria-label="secretary_name" required />
                      </div>

                      <div className="mb-3">
                        <label for="secretary_phone" className="form-label">Secretary's Phone Contact:</label> 
                        <input type="phone" name='secretary_phone' onChange={handlelGroupChange}  id='secretary_phone' className="form-control" value={group.secretary_phone} aria-label="secretary_phone" required />
                      </div>

                      <div className="mb-3">
                        <label for="ward" className="form-label">Ward:</label> 
                        <select  className="form-control" name='business_activity' onChange={handlelGroupChange}  id='ward' value={group.business_activity}    aria-label="ward" required>
                        <option value={null} >No Selection</option>
                          <option value="1" >Ward 1</option>
                          <option value="2" >Ward 2</option>
                          <option value="3" >Ward 3</option>
                          <option value="4" >Ward 4</option>
                        </select>
                        </div>


                      </div>
                      <hr />
                      <div className="mb-3">
                        <button type="button" onClick={submitGroup} onChange={handlelGroupChange}   className="btn btn-primary ">Submit</button>
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

export default GroupAdd;