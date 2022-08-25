import React, { useEffect, useState } from "react";
import ProductCard from "./Product.card";
function RenderProducts({ store, products, getProducts }) {

    // useEffect(() => {
    //     getProducts()
    // }, [])

    // const [products, setProducts] = useState([])

    // const getProducts = () => {
    //     fetch('http://localhost:9292/products')
    //         .then(resp => resp.json())
    //         .then(resp => setProducts(resp))
    // }

    const arrayProducts = products.filter((obj) => {
        return (
            obj.store_id == store.id
        )

    })
    
    const handleClick = (obj) => {

        fetch(`http://localhost:9292/products/${obj}`, {
            method: "DELETE",
        })
            .then((r) => r.json())
            .then(() => handleDelete())

    }
    
    const updateInventory = ()=>{
        getProducts()
    }
    

    const handleDelete = () => {
        getProducts()
    }



    const productInfo = arrayProducts.map((obj) => {
        return (
            < ProductCard id={obj.id} name = {obj.name} price = {obj.price} inventory = {obj.inventory} obj = {obj} handleClick = {handleClick} category = {obj.category} updateInventory = {updateInventory} key = {obj.id} handleDelete = {handleDelete} />)
        })

   
    
   

  

   

    return (
        <div>

            {productInfo}
        </div>
    )
}
export default RenderProducts