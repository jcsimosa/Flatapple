import { useState,useEffect } from "react"

export default function FlatAppleChicago() {
    // fetch request
    const [products, setProducts] = useState([])
    // use to Control form
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [inventory, setInventory] = useState('')
    const [category,setCategory] = useState('')

    const getProducts = ()=> {
        fetch('http://localhost:9292/products')
        .then(resp => resp.json())
        .then (resp => setProducts(resp))
    }

    const handleDelete = ()=> {
        getProducts()
    }

    // UseEffect to fetch 
    useEffect(() => {
        getProducts()
    },[]) 

    // Copy of the Products array to add a new product
    const newProduct = obj => {
        setProducts(products => [...products, obj])
    }
    // Post request
    const CreateProduct = (e)=> {
        e.preventDefault()
        fetch ('http://localhost:9292/products', {
            method: "POST",
            headers: {
                'Content-type':"application/json",
            },
            body: JSON.stringify({
                name,
                price,
                inventory,
                category,
                store_id: 1,
            }),
        })
        .then(res => res.json())
        .then(newProductobj => newProduct(newProductobj))
    }
    
   
    // Deleted request
    const HandleClick = (obj) => {
        
        fetch(`http://localhost:9292/products/${obj}`,{
                method: "DELETE",
            })
            .then((r)=> r.json())
            .then(()=> handleDelete())
        }
        const Arrayproducts = products.map((obj) => {
            return (
            <div key={obj.id}>
                <ul>
                    <li>{obj.name}</li>
                    <li>{`price ${obj.price}`}</li>
                    <li>{obj.inventory}</li>
                    <li>{obj.category}</li>
                    <button onClick={()=> HandleClick(obj.id)}>Delete Product</button>
                </ul>
            </div>) 
        })
        

    return (
        <div>
            <h1>FlatApple Chicago</h1>
            <label /> Create a New Product
            <form onSubmit={CreateProduct}>
            <input placeholder="name" onChange={(e)=>setName(e.target.value)}></input>
            <input placeholder="price" onChange={(e)=>setPrice(e.target.value)}></input>
            <input placeholder="inventory" onChange={(e)=>setInventory(e.target.value)}></input>
            <input placeholder="category" onChange={(e)=>setCategory(e.target.value)}></input>
            <input type='submit' value="Send" ></input>
            </form>        
            {Arrayproducts}
        </div>

    )
}