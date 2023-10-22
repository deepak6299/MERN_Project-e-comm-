import React from "react";
import { Navigate,Outlet } from "react-router-dom";


function PrivateCompo(){

    const auth=localStorage.getItem('user')
    return(
        <div>
{
    auth?<Outlet/>:<Navigate to="/signup"/>
}
        </div>
    )
}

export default PrivateCompo