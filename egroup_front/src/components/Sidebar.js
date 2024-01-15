import React, {Component} from 'react';
import { Link } from 'react-router-dom';

export default class Sidebar extends Component {
    render(){
        return (
            <aside class="sidebar-wrapper" data-simplebar="true">
          <div class="sidebar-header">
            <div>
              <img src="assets/images/egroupl.png" class="logo-icon" alt="logo icon" />
            </div>
            <div>
              <h4 class="logo-text">eGroup</h4>
            </div>
            <div class="toggle-icon ms-auto"><i class="bi bi-chevron-double-left"></i>
            </div>
          </div>
            <ul class="metismenu" id="menu">
            <li>
              <a class="has-arrow">
                <div class="parent-icon"><i class="bi bi-house-door"></i>
                </div>
                <div class="menu-title">Home</div>
              </a>
            </li>
            <li>
              <a  class="has-arrow">
                <div class="parent-icon"><i class="bi bi-grid"></i>
                </div>
                <div class="menu-title">Groups</div>
              </a>
              <ul> 
              <li><Link to="/listgroups"><i class="bi bi-arrow-right-short"></i>Groups</Link></li>
              <li> <Link to="/listmembers"><i class="bi bi-arrow-right-short"></i>Members</Link></li>
              </ul>
            </li>
            <li class="menu-label">Products and Services</li>                  
            <li>
              <a >
                <div class="parent-icon"><i class="bi bi-bag-check"></i>
                </div>
                <div class="menu-title"><Link to="/listloans">Loans </Link></div>
              </a>
            </li>            
            <li>
              <a >
                <div class="parent-icon"><i class="bi bi-bag-check"></i>
                </div>
                <div class="menu-title"><Link to="/listloanproducts">Loan Products</Link></div>
              </a>
            </li>
            <li>
              <a >
                <div class="parent-icon"><i class="bi bi-credit-card-2-front"></i>
                </div>
                <div class="menu-title">Reports</div>
              </a>
            </li>   
            <li>
              <a  target="_blank">
                <div class="parent-icon"><i class="bi bi-headset"></i>
                </div>
                <div class="menu-title">Support</div>
              </a>
            </li>
          </ul>
       </aside>
        )
    }
}

