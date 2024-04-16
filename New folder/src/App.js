import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; // Import BrowserRouter and Switch

import AdminLogin from './AdminLogin';
import UserLogin from './UserLogin';
import UserRegistration from './UserRegistration';
import Header from './Header';


function App() {
  return (
    <>
    <Header></Header>
    <AdminLogin></AdminLogin>
    
    </>
  );
}

export default App;
