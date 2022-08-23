
import React from 'react';


export default function NavBar({data}) {
  
  const names = data.map((obj)=> {
    return <p key={obj.id}>{obj.name}</p>
  })

  return (
   <div className='sidenav'>
    <h4>{names}</h4>
   </div>
  );
}

