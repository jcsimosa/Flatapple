import { useState } from 'react';
import React from 'react';
import RenderProducts from './RenderProducts';


function NavBar({data}) {
  
    const names = data.map((obj)=> {
      return <p key={obj.id}>{obj.name}</p>
    })

    const [showproducts, setShowProducts] = useState(false)

    const toggleproducts = (e) => {
        setShowProducts(showproducts => !showproducts)
    } 
    
    return (
    <div>
      <div className='sidenav'>
        <h4 onClick={toggleproducts}>{names}</h4>
      </div>
        {showproducts ? null : <RenderProducts/>}
     </div>   
      );
}
export default NavBar
