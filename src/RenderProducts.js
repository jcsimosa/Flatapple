import React, { useEffect, useState } from "react";

function RenderProducts({ store }) {

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('http://localhost:9292/products')
            .then(resp => resp.json())
            .then(resp => setProducts(resp))
    }, [])
    const arrayProducts = products.filter((obj) => {
       return (
        obj.store_id == store.id
       )
    
    })
    console.log(arrayProducts)

    const productInfo = arrayProducts.map((obj) => {
        return (
            <span>
            {obj.name}, 
            {obj.price},
            {obj.inventory},
            {obj.category}
            <br/>
            </span>
           
        )
    })


    
    return (
        <div>
           
            {productInfo}
        </div>
    )
}
export default RenderProducts