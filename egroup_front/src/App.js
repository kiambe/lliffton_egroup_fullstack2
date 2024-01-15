import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React, {Fragment} from 'react';

import PrivateRoute from "./utils/PrivateRoute"
import { AuthProvider } from './context/AuthContext'
import Login from './pages/Login';
import Home from './pages/Home';
import Error404 from './pages/Error404';

import LoanProductList from './pages/LoanProductList';
import LoanProductAdd from './pages/LoanProductAdd';
import LoanProductUpdate from './pages/LoanProductUpdate';
import LoanProductView from './pages/LoanProductView';


import LoanList from './pages/LoanList';
import LoanAdd from './pages/LoanAdd';
import LoanUpdate from './pages/LoanUpdate';
import LoanView from './pages/LoanView';

import MemberList from './pages/MemberList';
import MemberAdd from './pages/MemberAdd';
import MemberUpdate from './pages/MemberUpdate';
import MemberView from './pages/MemberView';

import GroupMemberList from './pages/GroupMemberList';
import GroupMemberAdd from './pages/GroupMemberAdd';
import GroupMemberUpdate from './pages/GroupMemberUpdate';
import GroupMemberView from './pages/GroupMemberView';

import GroupList from './pages/GroupList';
import GroupAdd from './pages/GroupAdd';
import GroupUpdate from './pages/GroupUpdate';
import GroupView from './pages/GroupView';


import AgripreneursList from './pages/MemberList';
import AgripreneurCreate from './pages/MemberAdd';









function App() {
  return (
    <div>  
      <Router>
      <AuthProvider>       
      <Routes>
          <Route exact path='/home' element={<PrivateRoute/>}>
            <Route exact path='/home' element={<Home/>}/>
          </Route>
          
      
        
          <Route index  element ={<Login /> }  />
          <Route path="/login" element ={<Login /> } />
          

          
          <Route path="/agripreneurs" element={<AgripreneursList  />} />
          <Route path="/createagripreneur" element={<AgripreneurCreate  />} />

         
          <Route path="/listloanproducts" element={<LoanProductList  />} />
          <Route path="/addloanproducts" element={<LoanProductAdd  />} />
          <Route path="/updateloanproducts/:id/update/" element={<LoanProductUpdate  />} />
          <Route path="/viewloanproducts/:id/view/" element={<LoanProductView  />} />



          <Route path="/listloans" element={<LoanList  />} />
          <Route path="/addloan" element={<LoanAdd  />} />
          <Route path="/updateloan/:id/update/" element={<LoanUpdate  />} />
          <Route path="/viewloan/:id/view/" element={<LoanView  />} />

          <Route path="/listmembers" element={<MemberList  />} />
          <Route path="/addmember" element={<MemberAdd  />} />
          <Route path="/updatemember/:id/update/" element={<MemberUpdate  />} />
          <Route path="/viewmember/:id/view/" element={<MemberView  />} />

          <Route path="/listgroupmembers" element={<GroupMemberList  />} />
          <Route path="/addgroupmember" element={<GroupMemberAdd  />} />
          <Route path="/updategroupmember/:id/update/" element={<GroupMemberUpdate  />} />
          <Route path="/viewgroupmember/:id/view/" element={<GroupMemberView  />} />



          <Route path="/listgroups" element={<GroupList  />} />
          <Route path="/addgroup" element={<GroupAdd  />} />
          <Route path="/updategroup/:id/update/" element={<GroupUpdate  />} />
          <Route path="/viewgroup/:id/view/" element={<GroupView  />} />


          <Route path="*" element={<Error404  />} />
        
         
        </Routes> 
        </AuthProvider>  
      </Router>   
      </div>
  );
}

export default App;
