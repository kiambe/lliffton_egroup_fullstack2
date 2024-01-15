import {BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'
import React, {Fragment} from 'react';

// import PrivateRoute from "./utils/PrivateRoute"
// import { AuthProvider } from './context/AuthContext'

import { Provider } from 'react-redux';
import AppRoutes from './routes/AppRoutes';
import rootStore from './app-redux/store';









function App() {
  return (
    <div>  
        <Provider store={rootStore}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
     
    </Provider>  
      </div>
  );
}

export default App;
