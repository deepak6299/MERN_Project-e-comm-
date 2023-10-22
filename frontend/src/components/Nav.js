import React from "react";
import {Link,useNavigate} from 'react-router-dom'

const Nav=()=>{
    const auth=localStorage.getItem('user');

const navigate=useNavigate()

    function logout(){
        console.log("apple");
        localStorage.clear();
        navigate("/signup")
    }

    return(
        <div className="navbar"> 
        <img alt="logo" src="https://w7.pngwing.com/pngs/621/196/png-transparent-e-commerce-logo-logo-e-commerce-electronic-business-ecommerce-angle-text-service.png" height={40}/>
           {auth? <ul>
            <li><Link to="/">Products</Link></li>
            <li><Link to="/add">Add Products</Link></li>
            <li><Link to="/update">Update Product</Link></li>
           
            <li><Link to="/profile">Profile</Link></li>
            <li><Link to="/signup" onClick={logout}>({JSON.parse(auth).name}) Logout </Link></li>
           </ul>:
           <ul className="nav-right"> 
            <li><Link to="/signup">Signup</Link></li>
            <li><Link to="/login">Login</Link></li>
            </ul>
           }
           
            
        </div>
    )
}

export default Nav