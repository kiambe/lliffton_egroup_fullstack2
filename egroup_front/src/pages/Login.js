import React, {Component, useContext, useEffect, useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext'
import { StoreofflineLocalStorage, getOfflineData, removeValueFromOffline } from '../constants/OfflineStorage';
import { useDispatch } from 'react-redux';
import { getUserOffline, getUserTokenOffline, loginUser } from '../app-redux/features/appData/appDataSlice';
import { JsonToformData } from '../constants/utils';



function Login() {  
  const dispatch = useDispatch();
  const [username, setUsername] = useState(undefined);
  const [password, setPassword] = useState(undefined);
  const navigate = useNavigate();
  // const {loginUser} = useContext(AuthContext)
  const handleSubmit = e => {
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value

    // email.length > 0 && loginUser(email, password)

    console.log(email)
    console.log(password)
   
  }

  useEffect(() => {
    removeValueFromOffline("@userData");
    removeValueFromOffline("@isLoggedIn");
    removeValueFromOffline("@isLoggedIn2");
    removeValueFromOffline("@userData2");
  }, []);

  useEffect(() => {
    document.title = "Login"; // Replace 'Your New Page Title' with your desired title}
  }, []);
  const onSubmitLogin = async (e) => {
    e.preventDefault();
    // const token = await recaptchaRef.current.executeAsync();
    // console.log(token)

    dispatch(loginUser(JsonToformData({username: username, password:password })))
      .unwrap()
      .then((res) => {
        console.log({res})
        // alert("success")
        setTimeout(() => {
          StoreofflineLocalStorage("@userData", res);
          StoreofflineLocalStorage("@isLoggedIn", true);
          StoreofflineLocalStorage("@isLoggedIn2", true);

          StoreofflineLocalStorage("@userData2", res);

          navigate(`/home`, { replace: true });

          getOfflineData("@isLoggedIn").then((res1) => {
            dispatch(getUserTokenOffline(res1));
            // updateToken(res)
            getOfflineData("@userData").then((res2) => {
              dispatch(getUserOffline(res2));
            });
            // dispatch(getUserOffline("@userData"))
            // console.log({res})
            if (!res1) {
              // alert(0)
              dispatch(getUserTokenOffline(false));

              navigate(`/login`, { replace: true });
            }
          });
        }, 100);
      })
      .catch((err) => {
        // console.log(err);
        if (err.hasOwnProperty("message")) {
          console.log({err})
          // alert(err.message);
        } else {
          if (err.hasOwnProperty("non_field_errors")) {
            // alert(err.non_field_errors[0]);

            return 0;
          }
          alert("Something went wrong");
        }
      });

    // apply to form data
  };
    
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
                         <form className="form-body"  
                         
                        //  onSubmit={handleSubmit}
                         onSubmit={(e) => onSubmitLogin(e)}
                         >
                           
                           <div className="login-separater text-center mb-4"> <span>SIGN IN WITH EMAIL</span>
                             <hr />
                           </div>
                             <div className="row g-3">
                               <div className="col-12">
                                 <label for="inputEmailAddress" className="form-label">Email Address</label>
                                 <div className="ms-auto position-relative">
                                   <div className="position-absolute top-50 translate-middle-y search-icon px-3"><i className="bi bi-envelope-fill"></i></div>
                                   <input onChange={(e)=>setUsername(e.target.value)} type="text" name="username" id="username" className="form-control radius-30 ps-5"  placeholder="Email Address" />
                                 </div>
                               </div>
                               <div className="col-12">
                                 <label for="inputChoosePassword" className="form-label">Enter Password</label>
                                 <div className="ms-auto position-relative">
                                   <div className="position-absolute top-50 translate-middle-y search-icon px-3"><i className="bi bi-lock-fill"></i></div>
                                   <input onChange={(e)=>setPassword(e.target.value)}   type="password" name='password' id="password" className="form-control radius-30 ps-5"  placeholder="Enter Password" />
                                 </div>
                               </div>
                               <div className="col-6">
                                 <div className="form-check form-switch">
                                   <input  className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked="" />
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