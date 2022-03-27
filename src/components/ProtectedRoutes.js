import React from 'react'
import { Navigate } from 'react-router-dom'
import { useUserAuth } from '../context/UserAuthContext'
import Header from "./Header";
import Sidebar from "./Sidebar";

 function ProtectedRoutes({children}) {
    let {user} = useUserAuth();

    if(!user) {
      return  <Navigate to = "/"/>
    }

  return( 
    <div>
      <Header />
      <Sidebar />
      {children}
    </div>
  ); 
}

export default ProtectedRoutes;