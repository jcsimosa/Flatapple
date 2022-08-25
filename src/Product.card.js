

export default function ProductCard({ name, price, inventory, obj, handleClick, handleDelete }) {
    
    const HandleUpdate = (object)=>{
       
        fetch(`http://localhost:9292/products/${object}`, {
            method: "PATCH",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify({
                inventory : inventory++
            })   
            .then((r)=> r.json())
            .then(()=> handleDelete())
    })
    }


    return (
        <div>
            <span>
                {obj.name},
                {obj.price},
                {obj.inventory},
                <button onClick={HandleUpdate(obj.id)}>Edit Item</button>
                {obj.category}
                <button onClick={() => handleClick(obj.id)}>Delete Product</button>
                <br />
            </span>
        </div>
    )
}