import React, { useState,useEffect } from "react";
import {  useNavigate } from "react-router-dom";

function Signup(){

const[name,setName]=useState(" ");
const[email,setEmail]=useState(" ");
const[password,setPassword]=useState(" ");

const navigate=useNavigate()

  useEffect(()=>{
    const auth=localStorage.getItem('user');
   if(auth){
    navigate("/add")
   }
  })

const  collectdata=async()=>{
    console.log(name,email,password);

    let result=await fetch('http://localhost:5000/register',{
        method:'post',
        body:JSON.stringify({name,email,password}),
        headers:{
            'Content-Type':'application/json'
        }
    })
    result=await result.json()
    console.log(result);
    localStorage.setItem('user',JSON.stringify(result))
    if(result){
        navigate('/')
    }
}



    return(
        <div className="signup">
            <h2>Register</h2>
            <input type="text" placeholder="Enter Name"  onChange={(e)=>setName(e.target.value)}/>
            <input type="text" placeholder="Enter Emai"  onChange={(e)=>setEmail(e.target.value)}/>
            <input type="text" placeholder="Enter Password"  onChange={(e)=>setPassword(e.target.value)}/>
            <button onClick={collectdata}>Register</button>
          
           
                
        </div>
    )
}

export default Signup