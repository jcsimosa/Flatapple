import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import RenderProducts from "./RenderProducts";
import CreateProducts from "./CreateProducts";

function StoreCard( {storeData} ) {


    const [ store, setStore ] = useState([])

    const {id} = useParams();


  useEffect(() => {
      getProducts()
  }, [])

  const [products, setProducts] = useState([])

  const getProducts = () => {
      fetch('http://localhost:9292/products')
          .then(resp => resp.json())
          .then(resp => setProducts(resp))
  }



    useEffect(() => {
        fetch(`http://localhost:9292/stores/${id}`)
        .then(resp => resp.json())
        .then(data => setStore(data))
      },[id])

    console.log(store.name)
  return (
    <div>
      <h3>{store.name}</h3>
      < CreateProducts id={id} products={products} getProducts={getProducts} />
      < RenderProducts store={store} products={products} getProducts={getProducts} />
    </div>
  );
}

export default StoreCard;