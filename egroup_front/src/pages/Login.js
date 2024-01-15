import React, {Component, useContext} from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../context/AuthContext'



function Login() {  
  const {loginUser} = useContext(AuthContext)
  const handleSubmit = e => {
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value

    email.length > 0 && loginUser(email, password)

    console.log(email)
    console.log(password)
   
  }
    
        return (
            <div className="wrapper">
            <main className="authentication-content">
             <div className="container-fluid">
               <div className="authentication-card">
                 <div className="card shadow rounded-0 overflow-hidden">
                   <div className="row g-0">
                     <div className="col-lg-6 bg-login d-flex align-items-center justify-content-center">
                       <img src="assets/images/egroupl2.png" className="img-fluid" alt="eGroup Management System" />
                     </div>
                     <div className="col-lg-6">
                       <div className="card-body p-4 p-sm-5">
                         <h5 className="card-title">Log In</h5>
                         <p className="card-text mb-5">eGroup Management System</p>
                         <form className="form-body"  onSubmit={handleSubmit}>
                           
                           <div className="login-separater text-center mb-4"> <span>SIGN IN WITH EMAIL</span>
                             <hr />
                           </div>
                             <div className="row g-3">
                               <div className="col-12">
                                 <label for="inputEmailAddress" className="form-label">Email Address</label>
                                 <div className="ms-auto position-relative">
                                   <div className="position-absolute top-50 translate-middle-y search-icon px-3"><i className="bi bi-envelope-fill"></i></div>
                                   <input type="email" name="email" id="email" className="form-control radius-30 ps-5"  placeholder="Email Address" />
                                 </div>
                               </div>
                               <div className="col-12">
                                 <label for="inputChoosePassword" className="form-label">Enter Password</label>
                                 <div className="ms-auto position-relative">
                                   <div className="position-absolute top-50 translate-middle-y search-icon px-3"><i className="bi bi-lock-fill"></i></div>
                                   <input type="password" name='password' id="password" className="form-control radius-30 ps-5"  placeholder="Enter Password" />
                                 </div>
                               </div>
                               <div className="col-6">
                                 <div className="form-check form-switch">
                                   <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked="" />
                                   <label className="form-check-label" for="flexSwitchCheckChecked">Remember Me</label>
                                 </div>
                               </div>
                               <div className="col-6 text-end">	<a href="authentication-forgot-password.html">Forgot Password ?</a>
                               </div>
                               <div className="col-12">
                                 <div className="d-grid">
                                   <button type="submit" className="btn btn-primary radius-30">Log In</button>
                                 </div>
                               </div>
                               <div className="col-12">
                                 <p className="mb-0">Don't have an account yet? <Link to="/home">Home</Link></p>
                               </div>
                             </div>
                         </form>
                      </div>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
            </main>
       </div>
        )
    }



export default Login; 