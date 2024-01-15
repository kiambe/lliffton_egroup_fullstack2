import React, {Component} from 'react';
import { Link } from 'react-router-dom';

export default class Sidebar extends Component {
    render(){
        return (
            <aside className="sidebar-wrapper" data-simplebar="true">
          <div className="sidebar-header">
            <div>
              <img src="assets/images/egroupl.png" className="logo-icon" alt="logo icon" />
            </div>
            <div>
              <h4 className="logo-text">eGroup</h4>
            </div>
            <div className="toggle-icon ms-auto"><i className="bi bi-chevron-double-left"></i>
            </div>
          </div>
            <ul className="metismenu" id="menu">
            <li>
              <a className="has-arrow">
                <div className="parent-icon"><i className="bi bi-house-door"></i>
                </div>
                <div className="menu-title">Home</div>
              </a>
            </li>
            <li>
              <a  className="has-arrow">
                <div className="parent-icon"><i className="bi bi-grid"></i>
                </div>
                <div className="menu-title">Groups</div>
              </a>
              <ul> 
              <li><Link to="/listgroups"><i className="bi bi-arrow-right-short"></i>Groups</Link></li>
              <li> <Link to="/listmembers"><i className="bi bi-arrow-right-short"></i>Members</Link></li>
              </ul>
            </li>
            <li className="menu-label">Products and Services</li>                  
            <li>
              <a >
                <div className="parent-icon"><i className="bi bi-bag-check"></i>
                </div>
                <div className="menu-title"><Link to="/listloans">Loans </Link></div>
              </a>
            </li>            
            <li>
              <a >
                <div className="parent-icon"><i className="bi bi-bag-check"></i>
                </div>
                <div className="menu-title"><Link to="/listloanproducts">Loan Products</Link></div>
              </a>
            </li>
            <li>
              <a >
                <div className="parent-icon"><i className="bi bi-credit-card-2-front"></i>
                </div>
                <div className="menu-title">Reports</div>
              </a>
            </li>   
            <li>
              <a  target="_blank">
                <div className="parent-icon"><i className="bi bi-headset"></i>
                </div>
                <div className="menu-title">Support</div>
              </a>
            </li>
          </ul>
       </aside>
        )
    }
}

