import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Product = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts();
    }, [])

    async function getProducts() {
        let result = await fetch("http://localhost:5000/products");

        result = await result.json()
        setProducts(result)
    }
    async function deleteProduct(id) {

        let result = await fetch(`http://localhost:5000/product/${id}`, {
            method: "Delete"
        })

        result = result.json()
        if (result) {
            alert("record is deleted")
            getProducts()
        }

    }
async function searchHandle(e){
    console.log(e.target.value);
    let key=e.target.value;
    let result=await fetch(`http://localhost:5000/search/${key}`)

    result=await result.json();
    if(result){
        setProducts(result)
    }

}


    return (
        <div className="Product-list">
            <h2>Product listing</h2>
            <input type="text"className="searchproduct" placeholder="Search Product" onChange={searchHandle}/>
            <ul>
                <li>S.No</li>
                <li>Name</li>
                <li>Price</li>
                <li>Category</li>
                <li>Company</li>
                <li>Operation</li>

            </ul>
            {
              products.length>0?  products.map((item, i) =>
                    <ul key={i}>
                        <li>{i+1} </li>
                        <li>{item.productName} </li>
                        <li>{item.price} </li>
                        <li>{item.category} </li>
                        <li>{item.company} </li>
                        <li><button className="delete" onClick={() => deleteProduct(item._id)}>Delete</button>
                            
                            <button className="delete"><Link to={'/update/'+item._id}>Edit</Link></button>
                            </li>
                    </ul>
                ):
                <h2>No result found!! Sorry:(</h2>
            }
        </div>
    )
}

export default Product