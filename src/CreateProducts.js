import React, { useState } from "react";

function CreateProducts ({id, products, getProducts}) {


const [newProducts, setNewProducts] = useState([])
// use to Control form
const [name, setName] = useState('')
const [price, setPrice] = useState('')
const [inventory, setInventory] = useState('')
const [category,setCategory] = useState('')


const newProduct = obj => {
    setNewProducts(products => [...products, obj])
}

console.log(id)

const CreateProduct = (e)=> {
    e.preventDefault()
    fetch ('http://localhost:9292/products', {
        method: "POST",
        headers: {
            'Content-type':"application/json",
        },
        body: JSON.stringify ({
            name,
            price,
            inventory,
            category,
            store_id: id
        }),
    })
    .then(res => res.json())
    .then(newProductobj => newProduct(newProductobj))
    getProducts();
}


    return (
    <div>
        <label /> Create a New Product
        <form onSubmit={CreateProduct}>
            <input placeholder="name" onChange={(e)=>setName(e.target.value)}></input>
            <input placeholder="price" onChange={(e)=>setPrice(e.target.value)}></input>
            <input placeholder="inventory" onChange={(e)=>setInventory(e.target.value)}></input>
            <input placeholder="category" onChange={(e)=>setCategory(e.target.value)}></input>
            <input type='submit' value="Send" ></input>
        </form>
    </div>
    )


}

export default CreateProducts;