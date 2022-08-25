import { useState } from "react"

export default function Home({createNewStore}) {
    
    const [storeName, setStoreName] = useState('')

    const handleStore = (e) => {
        e.preventDefault()
        fetch('http://localhost:9292/stores', {
            method: "POST",
            headers: {
                'Content-type':"application/json",
            },
            body: JSON.stringify({
                name: storeName
        }),
    })
    .then(r => r.json())
    .then(r => createNewStore(r))

    
    }
    return (

        <div>
            <h1>Home</h1>
            <label/> Create New Store
            <form onSubmit={handleStore}>
                <input placeholder="Name of the Store" onChange={(e)=>setStoreName(e.target.value)}></input>
                <input type="submit" value='Create'></input>
            </form>
        </div>


    )
    
}    
