import React from 'react'
import { useState } from 'react'
import { json, useNavigate } from 'react-router-dom';

export default function AddProduct() {

    const [productName, setProductName] = useState(" ");
    const [price, setPrice] = useState(" ")
    const [category, setCategory] = useState(" ")
    const [company, setCompany] = useState(" ")
    const [err,setErr]=useState(false)

    const navigate=useNavigate()

    async function addProduct() {

if(!productName || !price || !category || !company) {
    setErr(true)
    return false
}

        console.log(productName, price, category, company);
        const userId = JSON.parse(localStorage.getItem('user'))._id;


        let result = await fetch("http://localhost:5000/addProduct", {
            method: "post",
            body: JSON.stringify({ productName, price, category, company, userId }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        result = await result.json()
        console.log(result);
        if(result){
            navigate('/')
        }

    }

    return (
        <div className='addProduct'>
            <h2>Add product</h2>
            <input type='text' placeholder='Enter product Name' onChange={(e) => setProductName(e.target.value)} />
            { err && !productName && <span className='invalid'>Enter valid name</span>}
            
            <input type='text' placeholder='Enter product price' onChange={(e) => setPrice(e.target.value)} />
            { err && !price && <span className='invalid'>Enter valid price</span>}

            <input type='text' placeholder='Enter product category' onChange={(e) => setCategory(e.target.value)} />
            { err && !category && <span className='invalid'>Enter valid category name</span>}

            <input type='text' placeholder='Enter product company' onChange={(e) => setCompany(e.target.value)} />
            { err && !company && <span className='invalid'>Enter valid company name</span>}

            <button onClick={addProduct}>Add Product</button>
        </div>
    )
}
