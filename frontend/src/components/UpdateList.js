import React,{useEffect, useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom';



export default function UpdateList() {

  const [productName, setProductName] = useState(" ");
  const [price, setPrice] = useState(" ")
  const [category, setCategory] = useState(" ")
  const [company, setCompany] = useState(" ");
  const params=useParams();

  const navigate=useNavigate()
useEffect(()=>{
  console.log(params);
  getProductDetail()
},[])

async function getProductDetail() {
  let result = await fetch(`http://localhost:5000/product/${params.id}`);

  result = await result.json()
  console.log(result);
  setProductName(result.productName)
  setPrice(result.price)
  setCategory(result.category)
  setCompany(result.company)
}

async function updatelist(){
  console.log(productName,price,category,company);
let result = await fetch(`http://localhost:5000/product/${params.id}`,{
  method:"put",
  body:JSON.stringify({productName,price,category,company}),
  headers:{
    'Content-Type':'application/json'
  }
})
result=await result.json()
console.log(result);
if(result){
  alert("updated successfully");
  navigate('/')
}

}
  

  return (
    <div className='updateproduct'>
            <h2>Update product list </h2>
            <input type='text' placeholder='Enter product Name' onChange={(e) => setProductName(e.target.value)} value={productName}/>
           
            
            <input type='text' placeholder='Enter product price' onChange={(e) => setPrice(e.target.value)} value={price}/>
           

            <input type='text' placeholder='Enter product category' onChange={(e) => setCategory(e.target.value)} value={category}/>
            

            <input type='text' placeholder='Enter product company' onChange={(e) => setCompany(e.target.value)} value={company}/>
           

            <button onClick={updatelist}>Update Product</button>
        </div>
  )
}
