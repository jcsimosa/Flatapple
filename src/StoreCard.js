import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import RenderProducts from "./RenderProducts";

function StoreCard( {storeData} ) {

    const [ store, setStore ] = useState([])

    const {id} = useParams();

    useEffect(() => {
        fetch(`http://localhost:9292/stores/${id}`)
        .then(resp => resp.json())
        .then(data => setStore(data))
      },[id])

    console.log(store.name)
  return (
    <div>
      <h3>{store.name}</h3>
      < RenderProducts store={store}/>
    </div>
  );
}

export default StoreCard;