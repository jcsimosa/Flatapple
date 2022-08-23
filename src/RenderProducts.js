import React, { useEffect, useState } from "react";

function RenderProducts(){
    
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('http://localhost:9292/products')
        .then(resp => resp.json())
        .then (resp => setProducts(resp))
    },[]) 

    const Arrayproducts = products.map ((obj) => {
        return (
        <span key={obj.id}>
        {obj.name}
        
        {`price ${obj.price}`}
        <br/>

        </span>) 
    })
    
    return (
        <div>
            {Arrayproducts}
        </div>
    )
}
export default RenderProducts