import React, {Component} from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
    render(){
        return (
            <header className="top-header">        
<nav className="navbar navbar-expand">
  <div className="mobile-toggle-icon d-xl-none">
      <i className="bi bi-list"></i>
    </div>
    <div className="top-navbar d-none d-xl-block">
    <ul className="navbar-nav align-items-center">
      <li className="nav-item">
      <Link to="/" className="nav-link">Loans</Link>   
      </li>
      <li className="nav-item">     
      <Link to="/listgroups" className="nav-link">Groups</Link>   
      </li>
      <li className="nav-item">      
        <Link to="/listgroupmembers" className="nav-link">Group Members</Link>      
      </li>
    </ul>
    </div>
    <div className="search-toggle-icon d-xl-none ms-auto">
      <i className="bi bi-search"></i>
    </div>
    <form className="searchbar d-none d-xl-flex ms-auto">
        <div className="position-absolute top-50 translate-middle-y search-icon ms-3"><i className="bi bi-search"></i></div>
        <input className="form-control" type="text" placeholder="Type here to search" />
        <div className="position-absolute top-50 translate-middle-y d-block d-xl-none search-close-icon"><i className="bi bi-x-lg"></i></div>
    </form>
    <div className="top-navbar-right ms-3">
      <ul className="navbar-nav align-items-center">
      <li className="nav-item dropdown dropdown-large">
        <a className="nav-link dropdown-toggle dropdown-toggle-nocaret" 
         data-bs-toggle="dropdown">
          <div className="user-setting d-flex align-items-center gap-1">
            <img src="assets/images/avatars/avatar-1.png" className="user-img" alt="" />
            <div className="user-name d-none d-sm-block">Jhon Deo</div>
          </div>
        </a>
        <ul className="dropdown-menu dropdown-menu-end">
          <li>
             <a className="dropdown-item" >
               <div className="d-flex align-items-center">
                  <img src="assets/images/avatars/avatar-1.png" alt="" className="rounded-circle" width="60" height="60" />
                  <div className="ms-3">
                    <h6 className="mb-0 dropdown-user-name">Jhon Deo</h6>
                    <small className="mb-0 dropdown-user-designation text-secondary">HR Manager</small>
                  </div>
               </div>
             </a>
           </li>
           <li><hr className="dropdown-divider" /></li>
           <li>
              <a className="dropdown-item" >
                 <div className="d-flex align-items-center">
                   <div className="setting-icon"><i className="bi bi-person-fill"></i></div>
                   <div className="setting-text ms-3"><span>Profile</span></div>
                 </div>
               </a>
            </li>
            <li>
              <a className="dropdown-item" >
                 <div className="d-flex align-items-center">
                   <div className="setting-icon"><i className="bi bi-gear-fill"></i></div>
                   <div className="setting-text ms-3"><span>Setting</span></div>
                 </div>
               </a>
            </li>
            <li>
              <a className="dropdown-item" >
                 <div className="d-flex align-items-center">
                   <div className="setting-icon"><i className="bi bi-speedometer"></i></div>
                   <div className="setting-text ms-3"><span>Dashboard</span></div>
                 </div>
               </a>
            </li>
            <li>
              <a className="dropdown-item" >
                 <div className="d-flex align-items-center">
                   <div className="setting-icon"><i className="bi bi-piggy-bank-fill"></i></div>
                   <div className="setting-text ms-3"><span>Earnings</span></div>
                 </div>
               </a>
            </li>
            <li>
              <a className="dropdown-item" >
                 <div className="d-flex align-items-center">
                   <div className="setting-icon"><i className="bi bi-cloud-arrow-down-fill"></i></div>
                   <div className="setting-text ms-3"><span>Downloads</span></div>
                 </div>
               </a>
            </li>
            <li><hr className="dropdown-divider" /></li>
            <li>
              <a className="dropdown-item" >
                 <div className="d-flex align-items-center">
                   <div className="setting-icon"><i className="bi bi-lock-fill"></i></div>
                   <div className="setting-text ms-3"><span>Logout</span></div>
                 </div>
               </a>
            </li>
        </ul>
      </li>
      <li className="nav-item dropdown dropdown-large">
        <a className="nav-link dropdown-toggle dropdown-toggle-nocaret"  data-bs-toggle="dropdown">
          <div className="projects">
            <i className="bi bi-grid-3x3-gap-fill"></i>
          </div>
        </a>
        <div className="dropdown-menu dropdown-menu-end">
           <div className="row row-cols-3 gx-2">
              <div className="col">
                <a >
                 <div className="apps p-2 radius-10 text-center">
                    <div className="apps-icon-box mb-1 text-white bg-primary bg-gradient">
                      <i className="bi bi-cart-plus-fill"></i>
                    </div>
                    <p className="mb-0 apps-name">Loans</p>
                 </div>
                </a>
              </div>
              <div className="col">
                <a >
                <div className="apps p-2 radius-10 text-center">
                   <div className="apps-icon-box mb-1 text-white bg-danger bg-gradient">
                     <i className="bi bi-people-fill"></i>
                   </div>
                   <p className="mb-0 apps-name">Groups</p>
                </div>
              </a>
             </div>
             <div className="col">
              <a >
              <div className="apps p-2 radius-10 text-center">
                 <div className="apps-icon-box mb-1 text-white bg-success bg-gradient">
                  <i className="bi bi-bank2"></i>
                 </div>
                 <p className="mb-0 apps-name">Products</p>
              </div>
              </a>
            </div>
            <div className="col">
              <a >
              <div className="apps p-2 radius-10 text-center">
                 <div className="apps-icon-box mb-1 text-white bg-orange bg-gradient">
                  <i className="bi bi-collection-play-fill"></i>
                 </div>
                 <p className="mb-0 apps-name">Reports</p>
              </div>
              </a>
            </div>
            <div className="col">
              <a >
              <div className="apps p-2 radius-10 text-center">
                 <div className="apps-icon-box mb-1 text-white bg-purple bg-gradient">
                  <i className="bi bi-person-circle"></i>
                 </div>
                 <p className="mb-0 apps-name">Members</p>
               </div>
              </a>
            </div>
            <div className="col">
              <a >
              <div className="apps p-2 radius-10 text-center">
                 <div className="apps-icon-box mb-1 text-dark bg-info bg-gradient">
                  <i className="bi bi-file-earmark-text-fill"></i>
                 </div>
                 <p className="mb-0 apps-name">Reports</p>
              </div>
              </a>
            </div>
            <div className="col">
              <a >
              <div className="apps p-2 radius-10 text-center">
                 <div className="apps-icon-box mb-1 text-white bg-pink bg-gradient">
                  <i className="bi bi-credit-card-fill"></i>
                 </div>
                 <p className="mb-0 apps-name">Payments</p>
              </div>
              </a>
            </div>
            <div className="col">
              <a >
              <div className="apps p-2 radius-10 text-center">
                 <div className="apps-icon-box mb-1 text-white bg-bronze bg-gradient">
                  <i className="bi bi-calendar-check-fill"></i>
                 </div>
                 <p className="mb-0 apps-name">Agripreneur</p>
              </div>
            </a>
            </div>
            <div className="col">
              <a >
              <div className="apps p-2 radius-10 text-center">
                 <div className="apps-icon-box mb-1 text-dark bg-warning bg-gradient">
                  <i className="bi bi-book-half"></i>
                 </div>
                 <p className="mb-0 apps-name">Sales</p>
                </div>
              </a>
            </div>
           </div>
           
        </div>
      </li>
      <li className="nav-item dropdown dropdown-large">
        <a className="nav-link dropdown-toggle dropdown-toggle-nocaret"  data-bs-toggle="dropdown">
          <div className="messages">
            <span className="notify-badge">0</span>
            <i className="bi bi-messenger"></i>
          </div>
        </a>
        <div className="dropdown-menu dropdown-menu-end p-0">
          <div className="p-2 border-bottom m-2">
              <h5 className="h5 mb-0">Messages</h5>
          </div>
         <div className="header-message-list p-2">
            <div className="dropdown-item bg-light radius-10 mb-1">
              <form className="dropdown-searchbar position-relative">
                <div className="position-absolute top-50 start-0 translate-middle-y px-3 search-icon"><i className="bi bi-search"></i></div>
                <input className="form-control" type="search" placeholder="Search Messages" />
              </form>
            </div>
             <a className="dropdown-item" >
               <div className="d-flex align-items-center">
                  <img src="assets/images/avatars/avatar-1.png" alt="" className="rounded-circle" width="52" height="52" />
                  <div className="ms-3 flex-grow-1">
                    <h6 className="mb-0 dropdown-msg-user">No new message<span className="msg-time float-end text-secondary">1 m</span></h6>
                    <small className="mb-0 dropdown-msg-text text-secondary d-flex align-items-center">...</small>
                  </div>
               </div>
             </a>
            
        </div>
        <div className="p-2">
          <div><hr className="dropdown-divider" /></div>
            <a className="dropdown-item" >
              <div className="text-center">View All Messages</div>
            </a>
        </div>
       </div>
      </li>
      <li className="nav-item dropdown dropdown-large d-none d-sm-block">
        <a className="nav-link dropdown-toggle dropdown-toggle-nocaret"  data-bs-toggle="dropdown">
          <div className="notifications">
            <span className="notify-badge">1</span>
            <i className="bi bi-bell-fill"></i>
          </div>
        </a>
        <div className="dropdown-menu dropdown-menu-end p-0">
          <div className="p-2 border-bottom m-2">
              <h5 className="h5 mb-0">Notifications</h5>
          </div>
          <div className="header-notifications-list p-2">
             <div className="dropdown-item bg-light radius-10 mb-1">
              <form className="dropdown-searchbar position-relative">
                <div className="position-absolute top-50 start-0 translate-middle-y px-3 search-icon"><i className="bi bi-search"></i></div>
                <input className="form-control" type="search" placeholder="Search Messages" />
              </form>
              </div>
              
             <a className="dropdown-item" >
               <div className="d-flex align-items-center">
                <div className="notification-box"><i className="bi bi-people-fill"></i></div>
                  <div className="ms-3 flex-grow-1">
                    <h6 className="mb-0 dropdown-msg-user">No Notification<span className="msg-time float-end text-secondary">1 m</span></h6>
                    <small className="mb-0 dropdown-msg-text text-secondary d-flex align-items-center">5 new user registered</small>
                  </div>
               </div>
             </a>
             
         </div>
         <div className="p-2">
           <div><hr className="dropdown-divider" /></div>
             <a className="dropdown-item" >
               <div className="text-center">View All Notifications</div>
             </a>
         </div>
        </div>
      </li>
      </ul>
      </div>
</nav>
</header>
)
    }
}



