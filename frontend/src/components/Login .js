import React, { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Login () {

    const[email,setEmail]=useState(" ");
    const[password,setPassword]=useState(" ")

    const navigate=useNavigate();

    useEffect(()=>{
      const auth=localStorage.getItem('user');
     if(auth){
      navigate("/")
     }
    })

   async function  handlelogin(){

        console.log(email,password);

        let result= await fetch("http://localhost:5000/login",{
            method:"post",
            body:JSON.stringify({email,password}),
            headers:{
                "Content-Type":"application/json"
            }
        })
        result= await result.json()
        console.log(result);
        if(result.name){
          localStorage.setItem('user',JSON.stringify(result))
          navigate('/')
        }else{
          alert("Please Enter correct Details")
        }
        
    }

  return (
    <div className='login'>
      <h2>Login </h2>
        <input type='text' placeholder='enter email' onChange={(e)=>setEmail(e.target.value)}/>
        <input type='password' placeholder='enter password' onChange={(e)=>setPassword(e.target.value)}/>
        <button onClick={handlelogin}>Login</button>
      
    </div>
  )
}
